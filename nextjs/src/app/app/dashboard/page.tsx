'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [active, setActive] = useState(false)

  const startSimulation = () => {
    setActive(true)
    const ghostInput = document.getElementById('ghostInput') as HTMLInputElement
    ghostInput?.focus()

    setInterval(() => {
      if (ghostInput) {
        ghostInput.value += '.'
        ghostInput.value = ''
        ghostInput.focus()
        console.log('Activity simulated')
      }
    }, 60000)
  }

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: '2rem', textAlign: 'center' }}>
      <h1>🟢 Stay Online Tool</h1>
      <p>This tool helps keep your Microsoft Teams status online.</p>

      <button
        onClick={startSimulation}
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#00BFA6',
          color: '#fff',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Start Simulation
      </button>

      {active && <p style={{ marginTop: '20px', color: 'green' }}>✅ Simulation is running</p>}

      <input id="ghostInput" style={{ opacity: 0, position: 'absolute' }} />
    </div>
  )
}
