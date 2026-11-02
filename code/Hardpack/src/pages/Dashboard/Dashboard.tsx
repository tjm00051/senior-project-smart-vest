import { useState } from 'react'

import MetricCard from '../../components/MetricCard/MetricCard'
import HeatingControl from '../../components/HeatingControl/HeatingControl'
import { BatteryIcon, HeartIcon, SunIcon, ThermometerIcon } from '../../components/Icons/Icons'
import { THRESHOLDS } from '../../config/thresholds'
import { mockVestData } from '../../data/mockData'

function Dashboard() {
  // Local UI state for now; later this is sent to the vest over Bluetooth.
  const [autoMode, setAutoMode] = useState(true)
  const [targetF, setTargetF] = useState(THRESHOLDS.defaultTargetF)

  return (
    <div className="dashboard">
      <section className="hero-banner">
        <div className="hero-copy">
          <h1>
            Stay Warm.
            <br />
            <span className="accent">Perform Longer.</span>
          </h1>
          <p className="hero-description">
            Real-time monitoring and intelligent
            <br className="desktop-break" /> temperature control for your adventures.
          </p>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Live metrics">
        <MetricCard
          label="Heart Rate"
          value={String(mockVestData.heartRate)}
          unit="BPM"
          icon={<HeartIcon />}
          tone="heart"
        />
        <MetricCard
          label="Skin Temperature"
          value={mockVestData.skinTemperature.toFixed(1)}
          unit="°F"
          icon={<ThermometerIcon />}
          tone="temp"
          highlighted
        />
        <MetricCard
          label="Ambient Temperature"
          value={mockVestData.ambientTemperature.toFixed(1)}
          unit="°F"
          icon={<SunIcon />}
          tone="ambient"
        />
        <MetricCard
          label="Battery"
          value={`${mockVestData.battery}%`}
          icon={<BatteryIcon level={mockVestData.battery} />}
          tone="battery"
        />
      </section>

      <HeatingControl
        autoMode={autoMode}
        targetF={targetF}
        onAutoModeChange={setAutoMode}
        onTargetChange={setTargetF}
      />
    </div>
  )
}

export default Dashboard
