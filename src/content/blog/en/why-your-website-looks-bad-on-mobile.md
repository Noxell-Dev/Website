---
title: "Why Your Website Looks Bad on Mobile Even Though It Looks Fine on Desktop"
description: "Your website looks perfect on desktop but broken on your phone: tiny text, buttons you can't tap, sideways scrolling. Here are the most common causes and how to fix them."
date: 2026-11-09
locale: "en"
tags: ["responsive design", "mobile", "user experience"]
draft: false
---

You open your website on your computer and it looks perfect. You open it on your phone and it's a different story: the text is tiny, images spill off the screen, the menu is unusable and you have to scroll sideways to read anything. You're not alone: it's one of the most common website problems, and one of the most costly, because most web traffic today comes from mobile devices.

The cause is almost never a single thing. It's usually a combination of design decisions that go unnoticed on a large screen and become a mess on a small one. Let's go through them one by one, from the most common to the most subtle.

## 1. The website has no responsive design (or only half of one)

Responsive design is what rearranges a page depending on screen size: on a desktop it shows columns side by side, on a phone it stacks them one under another, the menu becomes a button and the text adjusts so it can be read without zooming. If your website was built with only the desktop in mind, the browser has no instructions for rearranging anything on a phone: either it shrinks the whole page until the text is unreadable, or it shows the desktop version as-is, forcing you to scroll sideways.

**How to fix it:** responsive design isn't an extra, it's the foundation. If your website was built years ago, or with a tool that didn't generate responsive CSS, the fix means redesigning it with a mobile-first approach: design for mobile first, then expand for larger screens. It's a substantial change, but it's the only one that solves the problem at the root.

## 2. The viewport meta tag is missing

It's a small technical detail with a huge effect. The `viewport` tag tells a mobile browser how to interpret the page's width. Without it, the browser pretends the page is about 980 pixels wide — a desktop width — and then shrinks the whole thing to fit the screen. The result is that miniature website where you have to pinch and zoom to read anything.

**How to fix it:** the correct tag is `<meta name="viewport" content="width=device-width, initial-scale=1">`. If your website doesn't have it, adding it is the fastest fix with the biggest impact there is. It's also the first thing whoever built your website should check.

## 3. Fixed widths in the layout

A container with a fixed width of 1200 pixels looks fine on a monitor, but on a phone with a 390-pixel-wide screen it overflows and creates the dreaded horizontal scrolling. The same happens with fixed-width images, tables that don't adapt and banners designed for a panoramic screen.

**How to fix it:** widths should be flexible: percentages and `max-width` instead of fixed pixels, and images with `max-width: 100%` so they never exceed their container's width. It's a simple rule, but it's the one that breaks the most websites when it's ignored.

## 4. Text is too small and buttons are impossible to tap

On a desktop, small light-grey text can look elegant. On a phone, in bright sunlight, it's unreadable. And a button that's easy to click with a mouse on a desktop has to be tapped with a fingertip on a phone: if it's small or crammed against another link, the visitor keeps tapping the wrong one.

**How to fix it:** paragraph text should be at least 16 pixels on mobile, with clear contrast between text and background. Touch targets (buttons and links) should be around 44–48 pixels, with enough space between them. Those are the figures recommended by Apple's and Google's design guidelines, and the difference is obvious from the first use.

## 5. The menu doesn't work on small screens

Navigation is one of the elements that breaks most often when moving to mobile: menu items get cut off, dropdowns don't open when tapped, a hamburger menu doesn't respond, or a fixed header covers the content. If visitors can't navigate, it doesn't matter how pretty the page is: they leave.

**How to fix it:** on mobile, the menu should be one thing: a clear button that opens a complete, easy-to-tap list, with the most important options (contact, services, location) always within reach. Test the menu on a real phone, not just by narrowing your browser window: touch gestures behave differently from a mouse.

## 6. Images aren't adapted for mobile

A 1400-pixel-wide hero image looks right on a desktop, but on a phone the browser downloads the full file even though it only displays a scaled-down version. That slows down loading and, in some layouts, the image overflows and breaks the rest of the page. Images with text baked in (like a banner with the phone number written inside it) also become unreadable when shrunk.

**How to fix it:** serve a version of each image adapted to each screen size (HTML's `srcset` attribute exists for this) and compress photos before uploading them. And never put important text inside an image: it should be real text, readable and scalable on any screen.

## 7. Pop-ups that take over the whole screen

A newsletter pop-up, a huge cookie notice, a chat widget that opens by itself and a promotion: on a desktop they're a small annoyance. On a phone they cover the entire screen, and the button to close them is often out of view or too small to tap. Visitors can't see your website even if they want to.

**How to fix it:** if you use pop-ups, use only one, don't show it in the first few seconds, and make sure it can be closed with a large, visible button. On mobile, less is more: every element that covers content is a visitor leaving.

## 8. It was only tested on a computer (or only by narrowing the browser)

This is the underlying mistake behind almost all of the above. Many websites are checked by narrowing the browser window on a desktop, and that's not the same as a real phone: pixel density, the browser's UI chrome, touch behaviour and connection speed all change. A website that "passes" the narrowed-browser test can still be broken on a real phone.

**How to fix it:** check your website on a real phone, calmly: read a full paragraph without zooming, tap every button, open the menu, fill in the contact form and check that no horizontal scrolling appears. And run it through PageSpeed Insights in mobile mode: besides speed, it flags the usability problems Google detects on each page.

## Why it matters: Google judges you by the mobile version

Since 2019, Google has used mobile-first indexing: to decide how to rank your website, it looks mainly at its mobile version, not the desktop one. If text is missing, looks broken or loads slowly on mobile, that affects how people find you — even those searching from a computer. And if a visitor lands on your site and leaves within seconds because they can't read anything, Google reads that bounce as another negative signal.

In other words: a website that looks bad on mobile isn't just an aesthetic problem. It's a visibility problem and a lost-customers problem, every day, without you noticing.

## How to diagnose it in 10 minutes

If you don't know where to start, follow this order:

1. Open your website on your own phone and note everything that fails: small text, horizontal scrolling, buttons that are hard to tap, a menu that doesn't work.
2. Check whether the viewport tag exists and whether widths are flexible: that's the first thing whoever built your website should review.
3. Run the site through PageSpeed Insights in mobile mode and note the usability and speed warnings.
4. Prioritise by impact: viewport and fixed widths first, then text and buttons, and finally images and pop-ups.

Most websites that look bad on mobile don't need to start from scratch: they need someone to go through these points calmly and fix them in order. And if the website was built without responsive design from the start, then yes: it's time to redesign it — this time starting with mobile.
