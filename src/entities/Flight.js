import React from 'react'
import planeeast from '../assets/planeeast.png'
import planewest from '../assets/planewest.png'

class Flight{
    constructor(flight, ldv){
    this.id = flight.Id
    this.altitude = flight.Alt || "No data"
    this.model = flight.Mdl
    this.ldv = ldv 
    this.trak = flight.Trak
    this.from = flight.From || "No data"
    this.to = flight.To || "No data"
    this.man = flight.Man
 }

 getImage(){
     if(this.trak > 180){
         return (<img className='sidewest' width='20px' alt="" src={planewest} title='West'/>)
     } else{
         return (<img className='sideeast' width='20px' alt="" src={planeeast} title='East'/>)
     }
 }

 sortFlights(){
     
 }
}

 export default Flight