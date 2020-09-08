import React, { PureComponent } from 'react'
import styles from './Location.module.css'
import Locationframe from '../Locationframe/Locationframe'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


class Location extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            city:"",
            country:""
        }
    }
    componentDidMount() {
        // fetch('http://api.openweathermap.org/data/2.5/weather?q=vienna&appid=be8952e8d9a144b625f22b737368de07')
        fetch('http://api.weatherstack.com/current?access_key=fa81e213f450fa1a269b4077eb25d6d9&query=Vienna')
        .then(res=>res.json())
        .then(rs=>{
            this.setState({
                country:rs.location.country,
                city:rs.location.name
            })
        })
    }

    render() {
        return (
            <div>
                <Locationframe icon={faMapMarkerAlt} city={this.state.city} country={this.state.country}/>
            </div>
        )
    }
}

export default Location