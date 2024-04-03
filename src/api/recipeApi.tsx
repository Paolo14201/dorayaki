import RECIPES from "../mocks/recipes-mocks";

async function getRecipes() {
  try {
    const response = await RECIPES;
    return response;
  } catch (error) {
    console.log(error);
  }
}




const RecipeApi = {
    getRecipes : getRecipes,
}

export default RecipeApi;