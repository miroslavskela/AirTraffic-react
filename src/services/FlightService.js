import Flight from '../entities/Flight'


class FlightService {

    fetchFlights = (lat, lon) => {
        return fetch(`https://cors-anywhere.herokuapp.com/http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${lat}&lng=${lon}&fDstL=0&fDstU=100`)
        .then(response => {
            return response.json()
        }).then((response) => {
            const ldv = response.lastDv;
            const flights = response.acList;
            return flights.map((flight) => {
                return new Flight(flight, ldv)
            })
        })
    }

   
}

export const flightService = new FlightService()