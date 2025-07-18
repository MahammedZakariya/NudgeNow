'use client';

import { useEffect, useRef, useState } from 'react';

export default function SimulatePage() {
  const [running, setRunning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const startTyping = () => {
    setRunning(true);
    inputRef.current?.focus();

    setInterval(() => {
      if (inputRef.current) {
        inputRef.current.value += '.';
        inputRef.current.focus();
      }
    }, 5000);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🟢 Keep Screen Active Tool</h2>
      <p>Click the button below to start simulating activity.</p>
      <button
        onClick={startTyping}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        Start Simulating
      </button>
      <input
        ref={inputRef}
        style={{
          position: 'absolute',
          left: '-9999px',
        }}
      />
    </div>
  );
}
