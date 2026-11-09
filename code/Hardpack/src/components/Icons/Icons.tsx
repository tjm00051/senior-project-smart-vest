// Small inline SVG icons used across the app (no icon library needed).
// They inherit color from CSS via `currentColor` unless a fill is set.

interface IconProps {
  size?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
})

export function MountainLogo({ size = 40, className }: IconProps) {
  return (
    <svg {...base(size)} viewBox="0 0 48 32" className={className} fill="none">
      <path
        d="M2 30 L18 6 L26 18 L31 11 L46 30 Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M13 13.5 L18 6 L23 13.5 L20.5 12 L18 14.5 L15.5 12 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HomeIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M12 3 2.5 11h2.8v9.5h5.2v-6h3v6h5.2V11h2.8z" />
    </svg>
  )
}

export function AnalyticsIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <rect x="4" y="11" width="4" height="9" rx="1" />
      <rect x="10" y="5" width="4" height="15" rx="1" />
      <rect x="16" y="8" width="4" height="12" rx="1" />
    </svg>
  )
}

export function SettingsIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3.3h-4l-.4 2.6a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.6h4l.4-2.6c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" transform="translate(-1 0)" />
    </svg>
  )
}

export function HeartIcon({ size = 34, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4h2c.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.7 4.3 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}

export function ThermometerIcon({ size = 34, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 4.5a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z" />
      <circle cx="12" cy="17.2" r="1.8" fill="currentColor" stroke="none" />
      <path d="M12 9.5v6" strokeLinecap="round" />
    </svg>
  )
}

export function SunIcon({ size = 34, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
    </svg>
  )
}

export function BatteryIcon({ size = 34, level = 100, className }: IconProps & { level?: number }) {
  const width = Math.max(0, Math.min(100, level)) / 100 * 14
  return (
    <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M21.5 10.5v3" strokeLinecap="round" strokeWidth="2.4" />
      <rect x="4" y="9" width={width} height="6" rx="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function HeatWavesIcon({ size = 30, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M7 4c-2 2.5 2 5-0 8s2 5.5 0 8" />
      <path d="M12 4c-2 2.5 2 5 0 8s2 5.5 0 8" />
      <path d="M17 4c-2 2.5 2 5 0 8s2 5.5 0 8" />
    </svg>
  )
}
