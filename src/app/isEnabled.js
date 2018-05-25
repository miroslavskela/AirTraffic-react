import React, {Component} from 'react'
import Permision from './permision/Permision'
import App from '../App'

const isEnabled = () => {
    return class enable extends Component {

        displayComponent = () => {
          return sessionStorage.getItem('enabled') ?  <App /> : <Permision/>    
            
        }

        render () {
            return this.displayComponent();
        }
    }
            
};

export default isEnabled;