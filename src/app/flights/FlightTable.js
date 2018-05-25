import React from 'react'
import Item from './Item'




const FlightTable = ({data}) => {
    const sortedData = data.sort(function(a,b){
        return b.altitude - a.altitude
    })
    console.log(sortedData);
    return(
        <div className="container">
            <div className="row">
            <table className="centered">
            <thead>
              <tr>
                  <th>East/West</th>
                  <th>Altitude</th>
                  <th>Id</th>
              </tr>
            </thead>
    
            <tbody>
            {sortedData.map((flight,index) => {
        
              return  <Item data={flight} key={index}/>
            })} 
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default FlightTable