import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Permision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            warning: false
        }
    }

    isEnable = () => {
        sessionStorage.setItem('enabled', 'true')
    }

    notEnabled = () => {
        this.setState({ warning: true })
    }

    render() {
        return (
            <div className="container">
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1 text center">
                        <div class="card-content white-text">
                            <span class="card-title">AirTraffic permission</span>
                            <p>Welcome to airTraffic if you want to continue you have to give us permission to track your current location</p>
                        </div>
                        <div class="card-action">
                            <Link to="/"><p onClick={this.isEnable}>Enable</p></Link>
                            <p onClick={this.notEnabled}>Disable</p>
                            {this.state.warning?<p>You have to enable location if you want to continue</p>:null}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Permision