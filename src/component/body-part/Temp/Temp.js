import React, { PureComponent } from 'react'
import styles from './Temp.module.css'

class Temp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={styles.temp}>
                {/* <img src={this.props.pic}/> */}
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
                <h3>{this.props.deg}c°</h3>
            </div>
        )
    }
}

export default Temp