import { createContext } from 'react';
 export const MealContext =createContext(["Cake", "Rice", "Soup"])

const Meal=({children})=>{
    return(
        <MealContext.Provider value={["Cake", "Rice", "Soup"]}>
            {children}
        </MealContext.Provider>
    )
}

export default Meal;