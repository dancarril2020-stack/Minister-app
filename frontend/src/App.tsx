function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-panel p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">
          Ministering Web App
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Welcome to the management and tracking system.
        </p>
        <button className="btn-primary w-full">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
