// if you doesn't want to use props you can also do destructuring and directly
//  use in component just like below code

import { CDN_URL } from "../utils/constants" //named exports imported like this eith curly braces
const styleCard = {
  margin:0
}
// const RestaurantCard=({resName,cuisine})=>{
const RestaurantCard=(props)=>{
    console.log(props)
  return(
  <div className="res-card">
    <img className="imageTag" src={CDN_URL+props?.resobj?.card?.card?.info?.cloudinaryImageId}/>
    <hr style={styleCard}></hr>
    {/* when you destructure the props following syntax is used */}
    {/* <h3>{resName}</h3>
    <h4 style={{margin:0}}>{cuisine}</h4> */}
    <h3>{props?.resobj?.card?.card?.info?.name}</h3>
    <h4 style={{margin:0}}>{props?.resobj?.card?.card?.info?.cuisines.toString()}</h4>
    <h4 style={{margin:0}}>
    Rating : {props?.resobj?.card?.card?.info?.avgRating} Stars
    </h4>
    <p style={{margin:0}}>ETA: {props?.resobj?.card?.card?.info?.sla?.deliveryTime} Minutes</p>
  </div>
  )
  }

  export default RestaurantCard