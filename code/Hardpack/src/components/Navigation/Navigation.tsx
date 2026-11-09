import { NavLink } from 'react-router-dom'
import type { ComponentType } from 'react'

import { AnalyticsIcon, HomeIcon, SettingsIcon } from '../Icons/Icons'

interface NavItem {
  to: string
  label: string
  Icon: ComponentType<{ size?: number }>
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Dashboard', Icon: HomeIcon },
  { to: '/analytics', label: 'Analytics', Icon: AnalyticsIcon },
  { to: '/settings', label: 'Settings', Icon: SettingsIcon },
]

interface NavigationProps {
  /** "top" = header tabs, "side" = sidebar list */
  variant: 'top' | 'side'
}

function Navigation({ variant }: NavigationProps) {
  return (
    <nav className={`nav nav-${variant}`} aria-label={variant === 'top' ? 'Main' : 'Sidebar'}>
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <Icon size={variant === 'top' ? 22 : 24} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
