import React from "react";
import DarkVariantExample from "./components/DarkVariantExample";
import "bootstrap/dist/css/bootstrap.min.css";


//import Navigator from "./components/Navigator";
import About from "./components/About";
import Footer from "./components/Footer";
import NavigatorMantine from "./components/NavigatorMantine";

// import Contact from "./components/Contact";
function App() {

  return (
    <div>
      <Navigator />
      <NavigatorMantine/>
      <DarkVariantExample />
      <About />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
