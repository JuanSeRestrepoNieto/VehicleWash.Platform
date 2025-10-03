import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [weather, setWeather] = useState<WeatherForecast[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('http://localhost:5021/weatherforecast')
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>VehicleWash Platform</h1>
      <h2>React + Vite + TypeScript + .NET 8</h2>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <h3>Backend API Integration Test</h3>
        <button onClick={fetchWeather} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Weather from Backend'}
        </button>
        
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        
        {weather && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4>Weather Forecast:</h4>
            <ul>
              {weather.map((forecast, index) => (
                <li key={index}>
                  <strong>{forecast.date}</strong>: {forecast.temperatureC}°C ({forecast.temperatureF}°F) - {forecast.summary}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="read-the-docs">
        Click the button above to test the connection between React frontend and .NET backend
      </p>
    </>
  )
}

export default App
