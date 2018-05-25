import React, {Component, Fragment} from 'react'
import {flightService} from '../../services/FlightService'
import FlightTable from './FlightTable'
class Main extends Component{
    constructor(props){
        super(props)
this.state = {
    flights:[],
    error:false,
    lat:"",
    lon:""
}
    }

    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({lat:position.coords.latitude, lon: position.coords.longitude})
                this.fetchFlights(this.state.lat, this.state.lon)}, 
                this.showError)

                this.interval = setInterval(() => {
                    this.fetchFlights(this.state.lat, this.state.lon)
                }, 60000)
            
        }
    }
    componentWillUnmount(){
       clearInterval(this.interval)
    }
    
    fetchFlights = (lat, lon) => {
        flightService.fetchFlights(lat, lon)
        .then((flightsList) => {
            this.setState({flights:flightsList})
            localStorage.setItem("flights", JSON.stringify(flightsList))
            
        }).catch(() => {
            this.setState({error:true})
        })
    }

    
    showError = (error) => {
        window.alert(error.code + ":" + error.message)
    }


    render(){
        return(
            <Fragment>
             {this.state.error?<h3>Could not fetch data</h3>:<FlightTable data={this.state.flights}/>}
           
            </Fragment>
        ) 
    }

}

export default Main