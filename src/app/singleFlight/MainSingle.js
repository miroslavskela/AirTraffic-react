import React, {Component} from 'react'
import FlightData from './FlightData'

class MainSingle extends Component {
    constructor(props){
        super(props)
        this.state = {
           
            singleFlight:null
        }
    }


    componentDidMount(){
        const flightArray = JSON.parse(localStorage.getItem('flights'))
        const id = this.props.match.params.id
        this.getSingleFlight(flightArray, id)  
        console.log(this.state.singleFlight);
        
        
    }
    

    getSingleFlight = (array, id) => {
        for(let i = 0; i < array.length; i++){
            if(array[i].id == id){
               this.setState({singleFlight:array[i]})
            }
          }
          
         
    }



    render(){

        if (!this.state.singleFlight) {
            return <h1>Loading...</h1>
          }
        return(
       
            <FlightData data1={this.state.singleFlight}/>
        
        )
    }

    
}

export default MainSingle