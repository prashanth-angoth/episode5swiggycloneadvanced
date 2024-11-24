
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // always import components when we are using structured files
import Body from "./components/Body"; 
/*initial low level design of swiggy clone apps
  Header
   -logo
   -Nav items
  Body
    - Search
    - RestaurantContainer
      -Restaurant Card
        -Name, img, star rating,cuisine
  Footer
   -Copyright
   -Links
   -Address
   -Contact
*/



                


const Applayout=()=>{
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)
