import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body=()=>{
  console.log(resList)
  // here in the below line we are creating a local state variable here listOfRestaurant variable will be the name 
  // and the setListOfRestaurant will be the function which will help us to update the listOfRestaurant state variable
  // this is how we update the variable in react 
  const [listOfRestaurant, setListOfRestaurant] = useState([...resList])
  console.log(listOfRestaurant)
    return (
      <div className="body">
        <div className="filter">
          {/* IF WE WANT TO ADD ANYEVENT HANDLERS TO BUTTON WE CAN ADD THE FOLLOWING SYNTAXES
          TO THE BUTTON TAG
          onClick={()=>{
            console.log("BUTTON CLICKED")
          }}
           */}
          <button className="filter-btn" onClick={()=>{
            debugger
            // const list =[]
            // listOfRestaurant.forEach((rest)=>{
            //   if(rest.card.card.info.avgRating>4){
            //     list.push(rest)
            //   }
            // })
            const list = listOfRestaurant.filter((rest)=>{
             return rest?.card?.card.info?.avgRating>4
            })
            setListOfRestaurant(list)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container"> 
          {/* one way of passing data using props */}
        {/* <RestaurantCard resName="Meghana Restaurant" cuisine="indian, continental, chinese"/> */}
        {/* you can use map or forEach to render all the restaurants with single component making it dynamic */}
        {console.log(resList)}
        {
            
            listOfRestaurant.map((rest,index)=>
            // key is a unique parameter which should be unique for every card that is rendering
          // best practice is to use keys always, if keys are not available atleast use index  
            <RestaurantCard key={rest.card.card.info.id} resobj ={rest}/>
          )
        }
        {/* {
          resList.forEach((rest)=>
            <RestaurantCard resobj ={rest}/>
          )
        } */}
        {/* <RestaurantCard resobj ={resList[0]}/>
        <RestaurantCard resobj ={resList[1]}/>
        <RestaurantCard resobj ={resList[2]}/>
        <RestaurantCard resobj ={resList[3]}/>
        <RestaurantCard resobj ={resList[4]}/>
        <RestaurantCard resobj ={resList[5]}/>
        <RestaurantCard resobj ={resList[6]}/> */}
        {/* <RestaurantCard resName="KFC kothapet" cuisine="chicken nuggets,burgers"/> */}
        </div>
  
      </div>
    )
  }

  export default Body