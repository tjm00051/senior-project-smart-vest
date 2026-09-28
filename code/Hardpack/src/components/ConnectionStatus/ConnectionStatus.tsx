interface ConnectionStatusProps {
  connected: boolean
}

function ConnectionStatus({ connected }: ConnectionStatusProps) {
  return (
    <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`}>
      <span className="connection-indicator"></span>

      <span>
        {connected ? 'Connected' : 'Not Connected'}
      </span>
    </div>
  )
}

export default ConnectionStatus