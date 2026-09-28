interface MetricCardProps {
  label: string
  value: string
  unit?: string
}

function MetricCard({ label, value, unit }: MetricCardProps) {
  return (
    <div className="metric-card">
      <h3 className="metric-label">{label}</h3>

      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit"> {unit}</span>}
      </div>
    </div>
  )
}

export default MetricCard