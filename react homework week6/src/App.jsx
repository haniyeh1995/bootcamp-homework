import { useState } from 'react'
import Header from './header/header.jsx'
import profileimg from './pub/profilepic.png'
import './App.css'

function App() {
  const Tabs = [
    { text: "Explore", link: "#" },
    { text: "Community post", link: "#" },
    { text: "Pages", link: "#" },
  ]
  const content = {
    nickname: "Chandan S",
    username: "@uiuxchandan",
    profileimg: profileimg,
  }
  const [selectedView, setSelectedView] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='left'>

        </div>
        <div className='main'>
          <div className='header'>
            <Header Tabs={Tabs} selectedView={selectedView} content={content} setSelectedView={setSelectedView} />
          </div>

        </div>

      </div>
    </>
  )
}

export default App
