import RecipeLists from "@/components/recipe-list/page";

async function FetchListOfRecipe(){
    try {
        const apiResponse = fetch('https://dummyjson.com/recipes');
        const data = (await apiResponse).json();

        return data?.recipes
    } catch (e) {
        throw new Error(e)
    }
}

export default async function RecipeList() {

    const recipeList = await FetchListOfRecipe();

    return <div>
        <RecipeLists />
    </div>
}