import playerData from "../player.json"
import PlayerCard from './PlayerCard'
import React from 'react'


export default function PlayerList() {

    return (
        <div style={{display:'flex',margin: '10px',padding: '20px', width: '300px' }}>{playerData.players.map((player)=><PlayerCard player={player}/>)}</div>
        )
        
}
