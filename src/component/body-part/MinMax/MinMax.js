import React, { PureComponent } from 'react'
import styles from './MinMax.module.css'

class MinMax extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={styles.minmax}>
                <h3 className={styles.shape}>{this.props.shape}</h3>
                <h4 className={styles.wind}>Wind  {this.props.windspeed}</h4>
                {/* <h4>Max{this.props.max}</h4> */}
            </div>
        )
    }
}

export default MinMax