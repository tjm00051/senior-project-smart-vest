import MetricCard from '../../components/MetricCard/MetricCard'
import ConnectionStatus from '../../components/ConnectionStatus/ConnectionStatus'
import { mockVestData } from '../../data/mockData'

function Dashboard() {
  return (
    <main className="dashboard">

      {/* Vest Information */}
      <section className="vest-info">

        <div className="vest-details">
          <div>
            <span className="info-label">Vest ID</span>
            <span className="info-value">
              {mockVestData.vestId}
            </span>
          </div>

          <div>
            <span className="info-label">Session Length</span>
            <span className="info-value">
              {mockVestData.sessionLength}
            </span>
          </div>
        </div>

        <ConnectionStatus
          connected={mockVestData.connected}
        />

      </section>

      {/* Health Metrics */}
      <section className="metrics-grid">

        <MetricCard
          label="Heart Rate"
          value={String(mockVestData.heartRate)}
          unit="BPM"
        />

        <MetricCard
          label="Body Temperature"
          value={String(mockVestData.bodyTemperature)}
          unit="°F"
        />

        <MetricCard
          label="Blood Oxygen"
          value={String(mockVestData.bloodOxygen)}
          unit="%"
        />

        <MetricCard
          label="Battery"
          value={String(mockVestData.battery)}
          unit="%"
        />

      </section>

    </main>
  )
}

export default Dashboard