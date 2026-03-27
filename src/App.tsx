import { BrowserRouter, Routes, Route } from 'react-router-dom'
import C2CTrackerLanding from '../Existing Page Code/C2C Landing Page'
import LmMoziStep1 from './LmMoziStep1'
import LmMoziStep2 from './LmMoziStep2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<C2CTrackerLanding />} />
        <Route path="/lm-mozi-step1" element={<LmMoziStep1 />} />
        <Route path="/lm-mozi-step2" element={<LmMoziStep2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
