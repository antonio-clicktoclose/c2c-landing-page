import { BrowserRouter, Routes, Route } from 'react-router-dom'
import C2CTrackerLanding from '../Existing Page Code/C2C Landing Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<C2CTrackerLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
