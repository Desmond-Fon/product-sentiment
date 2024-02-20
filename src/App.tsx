import './App.css'
import { SideBar } from './components/SideBar'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='overflow-hidden lg:h-[100vh] font-poppins'>
      <div className="hidden lg:grid grid-cols-10">
        <div className={`col-span-7 min-h-screen`}>
          <Main />
        </div>
        <div className={`col-span-3 max-h-screen overflow-y-auto`}>
          <SideBar />
        </div>
      </div>

      <div className='lg:hidden'>
        <Nav />
        <Main />
        <SideBar />
        <Footer />
      </div>
    </div>
  )
}

export default App
