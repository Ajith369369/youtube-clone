import Header from '../Header/Header'
import Chip from '../Chip/Chip'
import Sidebar from '../Sidebar/Sidebar'
import VideoGrid from '../Video Grid/VideoGrid'
import './App.css'

function App() {

  return (
    <>
     <div className='app-container'>
       <Header/>
       <Chip/>
       <Sidebar/>
       <VideoGrid/>
     </div>
    </>
  )
}

export default App
