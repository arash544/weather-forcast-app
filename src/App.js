import React from "react";
import styles from "./App.module.css";
import Header from "./component/header-part/Header/Header";
import Location from "./component/location-part/Location/Location";
import Body from "./component/body-part/Body/Body";
import Footer from "./component/footer-part/Footer/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Location/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
