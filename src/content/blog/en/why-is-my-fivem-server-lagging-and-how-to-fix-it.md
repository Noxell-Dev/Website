---
title: "Why Is My FiveM Server Lagging and How Can I Fix It?"
description: "Teleporting cars, hitch warnings and FPS drops: learn how to diagnose FiveM lag with resmon and the profiler, find the real cause and fix it step by step."
date: 2026-10-19
locale: "en"
tags: ["FiveM", "roleplay server", "optimization", "performance"]
draft: false
---

Few problems empty out a roleplay server faster than lag. Cars teleport, doors take ages to open, the inventory answers late, and the console starts filling up with *hitch* warnings. When that happens, the usual reaction is to blame the hosting and pay for a bigger server — but in most cases the hardware is not the source: a script, a heavy resource, or a setting nobody has measured yet is.

This guide helps you tell which kind of lag you actually have, track down the culprit with the tools FiveM already ships, and apply the fixes that really work, in the right order.

## First: which kind of lag do you have?

"Lag" is one word covering very different problems, and each one is fixed in a different place. Before you touch anything, work out which one is yours.

### Server lag: it happens to everyone at the same time

If every player stutters at the same moment, wherever they are on the map, the problem is on the server: its main thread cannot keep up with the work scripts or the database are asking of it. Typical symptoms are rubber banding (players and vehicles snapping back), desync between what each player sees, and *server thread hitch warning* messages in the console.

### Client lag: only in one area, or only for some players

If FPS drops when entering one specific neighbourhood, textures are slow to load, or someone falls through the ground while driving fast, the server may be perfectly healthy. What is failing is the client: too many heavy visual resources — MLOs, custom vehicles, clothing — overwhelming the player's PC. The key clue is that it only affects some players, or specific places on the map.

### Network lag: high ping and packet loss

If one player has sky-high ping while the server runs smoothly for everyone else, look at the connection: distance to the host, packet loss, or saturated bandwidth. No amount of script optimization fixes a bad network route.

Mixing these three up is the most expensive mistake: people switch hosts over a texture problem, and rewrite scripts over a network problem.

## How to diagnose lag with resmon and the profiler

In FiveM you don't have to guess: you measure. Two built-in tools tell you which resource is eating the time your server is missing.

### resmon: every resource's cost in real time

Open the client console with F8 and type `resmon 1`. You'll see, resource by resource, how many milliseconds of CPU each script consumes and how much memory it uses. The column that matters is CPU in ms: the budget for each frame is tiny, so fractions of a millisecond added up across dozens of resources make all the difference.

As a practical rule of thumb, widely used across the community:

- **Under 0.10 ms at idle:** a healthy resource — leave it alone.
- **A steady 0.25–0.50 ms at idle:** worth a look; it usually hides a loop doing more work than it should.
- **Over 0.50–1.0 ms sustained, or spikes of several milliseconds:** a prime hitch suspect.

A brief spike when opening a phone or inventory is normal. The problem is the resource that stays expensive *while nothing is happening*, or that spikes every few seconds.

### The server profiler: what is happening inside the resource

`resmon` tells you *which* resource is heavy; the profiler tells you *which function* inside it. From the server console:

```
profiler record 500
profiler status
profiler saveJSON profile.json
```

Record while a player reproduces the action that causes the stutter, then open the result with `profiler view` or in Chrome's performance tools. The tall spikes in the graph are the expensive frames: expand one and you'll see the exact function, which is almost always a per-frame loop, a database query on the main thread, or an event firing non-stop.

### txAdmin: spotting the trend

txAdmin won't profile individual resources, but its graphs show your server's overall health over time. They reveal the pattern: does the lag only appear at peak hours? Did it start the day you installed something new? Does it get worse the longer the server stays up? That context decides where to start.

Always work the same way: note the three most expensive resources, change **one single thing**, and measure again after a full restart, under a similar player load.

## The most common causes of FiveM lag

### 1. Poorly optimized scripts

This is cause number one, by a wide margin. The classic pattern is a `while true do` loop with `Wait(0)`: it runs on every frame even when frame-level precision is pointless. Multiply that by twenty scripts and the main thread runs out of air. In the same family: code that checks every player's state on every *tick* instead of reacting to events, NUI interfaces that refresh every frame, and leaked "full server" packs that ship two phones, two inventories, or two competing *target* systems at once.

### 2. Visual resources that are too heavy

Every MLO, vehicle, or clothing pack you add is streamed to clients. Models with far too many polygons, huge uncompressed textures, and missing LODs — the simplified versions of a model shown at a distance — cause texture loss, FPS drops, and long loading times, even when the server has CPU to spare.

### 3. A database working on the main thread

Queries on every *tick* and for every player, tables without indexes on the most-searched fields — inventory, users, vehicles, properties — or constant writes for every tiny state change will stall the server in bursts. If the database also lives on a distant machine, every query adds latency on top.

### 4. Hardware that doesn't fit FiveM

The FiveM server's main thread is largely single-threaded: per-core clock speed matters more than core count. A cheap VPS with shared, low-clock CPU will choke sooner than a modest machine with fast cores, NVMe storage, and enough RAM that entities aren't constantly being evicted. That said, hardware should only be considered *after* optimizing: a bad loop will eat the most expensive machine too.

### 5. Settings and runaway entities

OneSync tuned wrong for your player count, unsuitable entity culling distances, hundreds of abandoned vehicles and props that nobody cleans up, and sessions running for days without a restart degrade performance gradually. It's not a single failure: it's build-up.

## How to fix the lag, step by step

### Step 1: measure before you change anything

Join at peak time, open `resmon 1`, travel through the problem areas, and write down the three most expensive resources at idle and during the action that causes trouble. Without that baseline, every change is a gamble.

### Step 2: attack loops and per-frame work

For each suspect resource:

- Raise the `Wait()` in loops that don't need frame precision: plenty of jobs work just as well every 250–1000 ms, or only when a player is nearby.
- Replace constant checking (polling) with event-driven logic: let the code wake up when something changes instead of asking non-stop.
- Cache results and exports instead of recalculating or requesting them inside tight loops.
- Merge scattered threads doing nearly the same thing into a single, well-timed loop.

### Step 3: make the database work asynchronously

Use `oxmysql` asynchronously so no query blocks the main thread, add indexes to frequently searched columns, batch your writes — save state on a timer or on disconnect, not on every minor change — and host the database on the same machine, or as close to the server as possible.

### Step 4: slim down visual resources

Compress textures, insist on proper LODs for vehicles and MLOs, remove packs nobody uses, and test every new resource on a test server before it reaches the live one. If the lag only appears in one area, start by auditing exactly what streams there.

### Step 5: clean up, restart, and tune the settings

Schedule cleanups of abandoned vehicles and props, set OneSync for your real player count, review culling distances, and schedule restarts in quiet hours: a daily restart clears memory leaks and accumulated entities. If you raise the *tickrate*, do it while testing and watching CPU: more *ticks* mean more responsiveness, but also more load.

### Step 6: decide whether it's really hardware

Only once your scripts are clean and the profiler no longer points at anyone is the ceiling physical. That's when high per-core clock speed, NVMe, and a host with a good network route to your community are worth paying for. Buying hardware before measuring just moves the problem onto a bigger bill.

## Mistakes that keep the lag alive even after you "already optimized"

- **Removing resources at random** because one number looked high for a second, without repeating the same test under the same conditions.
- **Changing five things at once** and not knowing which one worked — or being unable to undo the one that broke something else.
- **Testing only on an empty server:** many problems show up only under real peak-hour load.
- **Leaving debug prints and development resources** running on the live server.
- **Not measuring again after the change**, or measuring after a hot reload instead of a full restart.

## Quick maintenance checklist

- Check `resmon` regularly, and after every new resource.
- Keep your framework, server artifacts, and dependencies up to date.
- Audit and remove duplicated, abandoned, or unused scripts.
- Review database indexes and cleanup from time to time.
- Watch txAdmin to make sure server health isn't degrading with uptime.
- Test everything in a staging environment before touching the live server.

## Bottom line

Lag on a FiveM server is almost never bad luck or a mystery: it's measurable work happening in the wrong place. First work out whether your problem is server, client, or network; find the handful of resources eating the time with `resmon` and the profiler; and fix things in order — loops, database, visual resources, cleanup, and only at the very end, hardware. A server that gets measured doesn't need to be the most expensive one to feel instant: it needs every millisecond spent on playing, not on waiting.
