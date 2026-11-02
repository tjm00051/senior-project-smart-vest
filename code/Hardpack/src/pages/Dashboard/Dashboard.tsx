
import MetricCard from '../../components/MetricCard/MetricCard'
import ConnectionStatus from '../../components/ConnectionStatus/ConnectionStatus'
import { mockVestData } from '../../data/mockData'

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="hero-banner">
        <div className="hero-copy">
          <p className="hero-eyebrow">THERMOSHELL CONNECT</p>
          <h1>
            Stay Warm.
            <br />
            Perform Longer.
          </h1>
          <p className="hero-description">
            Real-time monitoring and intelligent
            <br className="desktop-break" />
            temperature control for your adventures.
          </p>
        </div>
      </section>

      <section className="device-status-grid">
        <div className="status-card">
          <span className="status-icon bluetooth-icon">ᛒ</span>
          <div>
            <h3>Vest Connection</h3>
            <ConnectionStatus connected={mockVestData.connected} />
          </div>
        </div>

        <div className="status-card">
          <span className="status-icon battery-icon">▰</span>
          <div>
            <h3>Battery</h3>
            <p className="status-value">{mockVestData.battery}%</p>
          </div>
        </div>

        <div className="status-card">
          <span className="status-icon heat-icon">♨</span>
          <div>
            <h3>Heating Mode</h3>
            <p className="status-value">Auto Mode</p>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-title-row">
          <div>
            <h2>Live Metrics</h2>
            <p>Current readings from your vest</p>
          </div>
          <span className="live-indicator">
            <span />
            Sample Data
          </span>
        </div>

        <div className="metrics-grid">
          <MetricCard
            label="Heart Rate"
            value={String(mockVestData.heartRate)}
            unit="BPM"
          />
          <MetricCard
            label="Skin Temperature"
            value="98.6"
            unit="°F"
          />
          <MetricCard
            label="Ambient Temperature"
            value="32.5"
            unit="°F"
          />
          <MetricCard
            label="Vest Temperature"
            value={String(mockVestData.bodyTemperature)}
            unit="°F"
          />
        </div>
      </section>

      <section className="heating-panel">
        <div className="section-title-row">
          <div>
            <h2>Heating Control</h2>
            <p>Adjust your preferred warmth level</p>
          </div>
          <span className="auto-mode-label">AUTO MODE</span>
        </div>

        <div className="heat-scale">
          <span>Low</span>
          <div className="heat-track">
            <div className="heat-track-fill" />
            <span className="heat-knob" />
          </div>
          <span>High</span>
        </div>

        <div className="target-temperature">
          <div>
            <h3>Target Temperature</h3>
            <p>Preferred vest temperature</p>
          </div>
          <div className="temperature-control">
            <button type="button" aria-label="Decrease target temperature">
              −
            </button>
            <strong>95°F</strong>
            <button type="button" aria-label="Increase target temperature">
              +
            </button>
          </div>
        </div>
      </section>

      <section className="comfort-panel">
        <div className="comfort-symbol">✓</div>
        <div>
          <div className="comfort-heading">
            <h2>Current Status</h2>
            <span className="comfort-badge">● Optimal</span>
          </div>
          <p>
            Thermal comfort is within the preferred range.
          </p>
          <p className="comfort-description">
            This is a sample status for the interface preview.
            Live comfort analysis will be connected as the project develops.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
