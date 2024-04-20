import React, { useEffect, useState } from 'react'
import IMAGES from '../Images/image.js'
import './PlayersHome.css'
import IndividualPlayer from './IndividualPlayer.js'

const PlayersHome = () => {
    const[players,setPlayers]=useState([])
    const[showPlayerCard, setShowPlayerCard] = useState(false);
    const[individualPlayer, setIndividualPlayer] = useState(null);

    const onClickPlayerCard = (player) => {
        setShowPlayerCard(true);
        setIndividualPlayer(player);
    }

    const handleClosePlayerCard = () => {
        setShowPlayerCard(false);
    }
    useEffect(()=>{
        fetch("http://localhost:8080/player/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setPlayers(result);
        }
    )
    },[players])


  return (
    <>
    <div className='player-card-container'>
        {players.map(player=>
        <div key={player.id} className='player-card' onClick={() => onClickPlayerCard(player)}>
            <img src={ IMAGES[player.name] } alt={player.name} />
        </div>
        )}
    </div>
    {showPlayerCard && <IndividualPlayer onClose={handleClosePlayerCard} playerProp={individualPlayer}/>}
    </>
    
  )
}

export default PlayersHome