import RecipeLists from "@/components/recipe-list";

async function getListOfRecipe(){
    try {
        const responseData = await fetch('https://dummyjson.com/recipes');
        const data = await responseData.json();

        return data?.recipes;
    } catch(e){
        throw new Error(e);
    }
}

export default async function RecipeList() {
    const recipeData = await getListOfRecipe();
    return <RecipeLists recipeData={recipeData} />
}