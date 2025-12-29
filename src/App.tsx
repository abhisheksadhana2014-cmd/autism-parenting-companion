function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      fontFamily: 'system-ui', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white', 
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🎉 AUTISM PARENTING COMPANION
      </h1>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '2rem', 
        borderRadius: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          ✅ VERCEL LIVE SUCCESS!
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Production-ready app deployed!
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>
          Ready for full Dashboard, Sessions, Journal...
        </p>
      </div>
    </div>
  )
}

export default App
