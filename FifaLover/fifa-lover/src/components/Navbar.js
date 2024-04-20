import React, { useState } from 'react'
import './Navbar.css'
import FifaLogo from '../Images/fifa-lover-logo.png'
import SearchLogo from '../Images/search-w.png'
import AddPlayer from './AddPlayer'

const Navbar = () => {
  const[showAddPlayer, setShowAddPlayer] = useState(false);
  const handleClickAddPlayer = (e) =>{
    setShowAddPlayer(true);
  }

  const handleCloseAddPlayerModal = () =>{
    setShowAddPlayer(false);
  }
  return (
    <div className='navbar'>
        <img src={FifaLogo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li onClick={handleClickAddPlayer}>Add Player</li>
        </ul>
    
    <div className='search-box'>
        <input type="text" placeholder='Search for players' />
        <img src={SearchLogo} alt="" className='search-logo' />
    </div>
    {showAddPlayer && <AddPlayer onClose={handleCloseAddPlayerModal}/>}
    </div>
  )
}

export default Navbar