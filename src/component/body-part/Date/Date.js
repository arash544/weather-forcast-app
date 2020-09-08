import React, { PureComponent } from 'react'
import styles from './Date.module.css'

class Date extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div >
                {/* <h5>{this.props.date}</h5> */}
                <h2 className={styles.date}>{this.props.time}</h2>
            </div>
        )
    }
}

export default Date