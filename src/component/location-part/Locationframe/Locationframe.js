import React, { PureComponent } from "react";
import styles from "./Locationframe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Locationframe extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrap}>
      <div className={styles.loc}>
        <FontAwesomeIcon size="lg" color="orange" icon={this.props.icon} />
        <h2>{this.props.city},</h2>
        <h2>{this.props.country}</h2>
      </div>
      </div>
    );
  }
}

export default Locationframe;
