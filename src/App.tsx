import './App.css'
import { SideBar } from './components/SideBar'
import { Main } from './components/Main'

function App() {

  return (
    <div className='overflow-hidden h-[100vh] font-poppins'>
      <div className="grid grid-cols-10">
        <div className={`col-span-7 min-h-screen`}>
          <Main />
        </div>
        <div className={`col-span-3 max-h-screen overflow-y-auto`}>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default App
