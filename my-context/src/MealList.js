import { MealContext } from './Meal'
import { useContext } from 'react'

function MealList(){
    const meals = useContext( MealContext);
    return(
        <div>
            <h1> The Menu</h1>
            <ul>
                {meals.map((meal, index)=>(
                   <li key={index}>{meal}</li> 
                ))}
            </ul>
        </div>
    )
}

export default MealList;