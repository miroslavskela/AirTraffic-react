import React from 'react'


const FlightData = ({data1}) => {

console.log(data1);
    return(
        <div className="container">
        <div className="row">
        <table className="centered">
        <thead>
          <tr>
              <th>Manufacturer</th>
              <th>from</th>
              <th>to</th>
              <th>Company Logo</th>
          </tr>
        </thead>

        <tbody>
       <tr>
           <td>{data1.man}</td>
           <td>{data1.from}</td>
           <td>{data1.to}</td>
           <td><img alt="" src={`https://logo.clearbit.com/${data1.man}.com `}/></td>
       </tr>
        </tbody>
      </table>
        </div>
    </div>
    )
}
export default FlightData