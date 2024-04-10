import { useState, useEffect } from "react";
import RecipeApi from "../api/recipeApi";
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";
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
  };

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

  return (
    <Contenitore>
        <h2>Anime List</h2>
        <RecipeCard ricette={ricette}/>
      </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;
  h2{
    margin-bottom: 20px;
    margin-left: 1.6%;
  }
  `;

export default Recipes;