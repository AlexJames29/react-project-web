import React from "react";
import DarkVariantExample from "./components/DarkVariantExample";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from "./components/Navigator";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="social">
      <Navigator />
      <DarkVariantExample />
      <About />
      <Footer />
    </div>
  );
}

export default App;
