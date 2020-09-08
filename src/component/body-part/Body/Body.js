import React, { PureComponent } from "react";
import Date from "../Date/Date";
import styles from "./Body.module.css";
import Temp from "../Temp/Temp";
import MinMax from "../MinMax/MinMax";

class Body extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
      img:"",
      deg:"",
      shape:"",
      windspeed:"",
      icon:""
    };
  }
  componentDidMount() {
    fetch(
      "http://api.weatherstack.com/current?access_key=fa81e213f450fa1a269b4077eb25d6d9&query=Vienna"
    )
      .then((res) => res.json())
      .then((rs) => {
        this.setState({
          time: rs.location.localtime,
          deg:rs.current.temperature,
          img:rs.current.weather_icons[0],
          shape:rs.current.weather_descriptions[0],
          windspeed:rs.current.wind_speed,
        });
      })
      fetch('http://api.openweathermap.org/data/2.5/weather?q=vienna&appid=be8952e8d9a144b625f22b737368de07')
      .then(res=>res.json())
      .then(rs=>{
          // console.log(rs)
          this.setState({
              icon:rs.weather[0].icon,
              
          })
      })

  }


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <Date time={this.state.time} />
          <Temp icon={this.state.icon} deg={this.state.deg}/>
          <MinMax shape={this.state.shape} windspeed={this.state.windspeed} />
        </div>
      </div>
    );
  }
}

export default Body;
