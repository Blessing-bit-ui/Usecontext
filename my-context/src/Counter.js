import { MealContext } from "./Meal";
import { useContext } from "react";

function Counter(){
    const meals = useContext(MealContext)
    return(
        <p>
         There are {meals.length} meals available
         </p>
    
    )
}
export default Counter;