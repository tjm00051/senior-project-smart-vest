interface ConnectionStatusProps {
  connected: boolean
  deviceId?: string
}

/** Sidebar card: green dot + "Vest Connected" and the vest's device ID. */
function ConnectionStatus({ connected, deviceId }: ConnectionStatusProps) {
  return (
    <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`} role="status">
      <span className="connection-indicator" aria-hidden="true" />
      <div>
        <strong>{connected ? 'Vest Connected' : 'Vest Not Connected'}</strong>
        {deviceId && <small>{deviceId}</small>}
      </div>
    </div>
  )
}

export default ConnectionStatus
