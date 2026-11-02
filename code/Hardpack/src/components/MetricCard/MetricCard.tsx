import type { ReactNode } from 'react'

interface MetricCardProps {
  label: string
  value: string
  unit?: string
  icon?: ReactNode
  /** Sets the icon color: heart = red, temp = blue, ambient = yellow, battery = green */
  tone?: 'heart' | 'temp' | 'ambient' | 'battery'
  highlighted?: boolean
}

function MetricCard({ label, value, unit, icon, tone, highlighted }: MetricCardProps) {
  return (
    <div className={`metric-card${highlighted ? ' highlighted' : ''}`}>
      {icon && <span className={`metric-icon tone-${tone ?? 'temp'}`}>{icon}</span>}
      <h3 className="metric-label">{label}</h3>
      <div className="metric-value">{value}</div>
      {unit && <div className="metric-unit">{unit}</div>}
    </div>
  )
}

export default MetricCard
