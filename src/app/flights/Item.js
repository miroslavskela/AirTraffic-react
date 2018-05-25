import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const Item = ({data}) =>{
    
  
    return(
        <Fragment>
           <tr>
            <td>{data.getImage()}</td>
            <td>{data.altitude}</td>
            <td>{data.id}</td>
            <Link to={`/flight/${data.id}`}><span>Flight Details</span></Link>
          </tr>
        </Fragment>
    )
}

export default Item