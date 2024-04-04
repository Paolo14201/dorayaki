import { useState, useEffect } from "react";
import RecipeApi from "../api/recipeApi";
import { Ricetta } from "../models/recipe.model";


const Recipes = () => {
  const [ricette, setRicette] = useState<Ricetta[]>([]);
  async function prendiRicette() {
    try {
      const response: any = await RecipeApi.getRecipes();
      setRicette(response);
    } catch (error) {
      console.log(error);
    }
  }
  //use effect all'avvio del componente
  useEffect(() => {
    prendiRicette();
    return () => {
      console.log("sei uscito dal componente");
    }
  }, []);

  useEffect(() => {
    if(ricette.length > 1){
        console.log('hai ricevuto le ricette dal server')
        console.log(ricette)
    }
  }, [ricette])

  return <div>Ricette</div>;
};

export default Recipes;