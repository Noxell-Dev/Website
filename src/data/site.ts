export const site = {
  name: 'noxell.dev',
  email: 'hola@noxell.dev',
} as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Noxell-Dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/noxell.dev/' },
] as const;

export type ServiceKey = 'web' | 'ai' | 'gaming' | 'scripts';
export type IconName = 'frame' | 'nodes' | 'gamepad' | 'braces';

export const serviceItems: readonly {
  key: ServiceKey;
  icon: IconName;
  wide: boolean;
}[] = [
    { key: 'web', icon: 'frame', wide: true },
    { key: 'ai', icon: 'nodes', wide: false },
    { key: 'gaming', icon: 'gamepad', wide: false },
    { key: 'scripts', icon: 'braces', wide: true },
  ];

/**
 * Custom monoline marks echoing the brand's angular knot —
 * deliberately not the default icon-set vocabulary.
 * Rendered with stroke: currentColor.
 */
export const serviceIcons: Record<IconName, string> = {
  // corner frame + core dot: software built around a real center
  frame:
    '<path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9"/><path d="M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9"/><path d="M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15"/><path d="M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15"/><circle cx="12" cy="12" r="1.7"/>',
  // connected nodes: AI, automations and chatbots
  nodes:
    '<circle cx="5.5" cy="5.5" r="2"/><circle cx="18.5" cy="5.5" r="2"/><circle cx="12" cy="18.5" r="2"/><path d="M7 7.2 10.9 16.6"/><path d="M17 7.2 13.1 16.6"/><path d="M7.5 5.5h9"/>',
  // gamepad: gaming & dedicated servers
  gamepad:
    '<path d="M7.5 8h9a4.5 4.5 0 0 1 4.4 5.4l-.6 3a2.6 2.6 0 0 1-4.6 1.1L14.6 15H9.4l-1.1 2.5a2.6 2.6 0 0 1-4.6-1.1l-.6-3A4.5 4.5 0 0 1 7.5 8z"/><path d="M8 11v3"/><path d="M6.5 12.5h3"/><path d="M15.8 11.5h.01"/><path d="M18 13.5h.01"/>',
  // braces: custom scripts and mechanics
  braces:
    '<path d="M9 4C7.3 4 6.5 5 6.5 6.5v2.2c0 1.2-.6 2.2-2 2.8 1.4.6 2 1.6 2 2.8v2.2C6.5 19 7.3 20 9 20"/><path d="M15 4c1.7 0 2.5 1 2.5 2.5v2.2c0 1.2.6 2.2 2 2.8-1.4.6-2 1.6-2 2.8v2.2C17.5 19 16.7 20 15 20"/>',
};

export const methodSteps: readonly { key: string; num: string }[] = [
  { key: 'step1', num: '01' },
  { key: 'step2', num: '02' },
  { key: 'step3', num: '03' },
  { key: 'step4', num: '04' },
  { key: 'step5', num: '05' },
  { key: 'step6', num: '06' },
  { key: 'step7', num: '07' },
];
