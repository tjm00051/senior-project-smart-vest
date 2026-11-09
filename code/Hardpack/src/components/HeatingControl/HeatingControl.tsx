import { THRESHOLDS } from '../../config/thresholds'
import { HeatWavesIcon } from '../Icons/Icons'

interface HeatingControlProps {
  autoMode: boolean
  targetF: number
  onAutoModeChange: (auto: boolean) => void
  onTargetChange: (targetF: number) => void
}

/** Heating panel from the mockup: Auto Mode switch + target temperature stepper (85–102 °F). */
function HeatingControl({ autoMode, targetF, onAutoModeChange, onTargetChange }: HeatingControlProps) {
  const { minTargetF, maxTargetF } = THRESHOLDS
  const step = (delta: number) =>
    onTargetChange(Math.min(maxTargetF, Math.max(minTargetF, targetF + delta)))

  return (
    <section className="heating-panel" aria-labelledby="heating-title">
      <div className="heating-header">
        <h2 id="heating-title">
          <HeatWavesIcon className="heating-icon" />
          Heating Control
        </h2>

        <label className="auto-toggle">
          <span>Auto Mode</span>
          <input
            type="checkbox"
            role="switch"
            checked={autoMode}
            onChange={(e) => onAutoModeChange(e.target.checked)}
          />
          <span className="switch-track" aria-hidden="true">
            <span className="switch-thumb" />
          </span>
        </label>
      </div>

      <div className="target-row">
        <span className="target-label">Target Temperature</span>
        <div className="stepper">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={targetF <= minTargetF}
            aria-label="Decrease target temperature"
          >
            −
          </button>
          <output aria-live="polite">{targetF} °F</output>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={targetF >= maxTargetF}
            aria-label="Increase target temperature"
          >
            +
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeatingControl
