import React, { PureComponent } from "react";
import styles from "./Humidity.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faSun } from "@fortawesome/free-solid-svg-icons";

class Humidity extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <FontAwesomeIcon color={this.props.color} size="lg" icon={this.props.icon} />
          <h3 className={styles.humid}>{this.props.situation}</h3>
        </div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

export default Humidity;
