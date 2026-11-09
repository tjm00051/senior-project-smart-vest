import { Link, Outlet } from 'react-router-dom'

import ConnectionStatus from '../ConnectionStatus/ConnectionStatus'
import Navigation from '../Navigation/Navigation'
import { MountainLogo } from '../Icons/Icons'
import { mockVestData } from '../../data/mockData'

/** Page frame from the SRS GUI mockup: header with tabs, sidebar, and the page content. */
function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="brand" aria-label="ThermoShell home">
          <MountainLogo className="brand-logo" />
          <span className="brand-name">
            Thermo<span>Shell</span>
          </span>
        </Link>
        <Navigation variant="top" />
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <ConnectionStatus connected={mockVestData.connected} deviceId={mockVestData.vestId} />
          <Navigation variant="side" />
        </aside>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
