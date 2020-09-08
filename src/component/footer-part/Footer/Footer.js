import React, { PureComponent } from 'react'
import Humidity from '../humidity/Humidity'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from './Footer.module.css'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          
          num:"",
          number:""
        }
    }
    componentDidMount() {
        fetch(
            "http://api.weatherstack.com/current?access_key=fa81e213f450fa1a269b4077eb25d6d9&query=Vienna"
          )
            .then((res) => res.json())
            .then((rs) => {
              this.setState({
                number:rs.current.humidity,
                num:rs.current.pressure
              });
            })
    }

    render() {
        return (
            <>
            <div className={styles.main}>
                <Humidity icon={faTint} color="rgb(8, 201, 255)" situation="Humidity" number={this.state.number}/>
                <Humidity icon={faSun} color="yellow" situation="Pressure" number={this.state.num}/>
            
            </div>
            <div className={styles.footer}>
            <div className={styles.footerline}></div>
            </div>
            </>
        )
    }
}

export default Footer