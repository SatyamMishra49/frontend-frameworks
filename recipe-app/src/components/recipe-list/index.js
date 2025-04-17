
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function RecipeLists({recipeData}){
    return <div>
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        {recipeData && recipeData.length > 0
        ? recipeData.map((recipe) => (
            <Card>
                <CardHeader></CardHeader>
                <CardContent>
                    <img className="rounded-md" src={recipe.image}
                    alt={recipe.name}></img>
                    <p className="text-center">{recipe.name}</p>
                </CardContent>
                <CardFooter className="object-center">
                    <CardDescription className="text-center">{recipe.cuisine}</CardDescription>
                </CardFooter>
            </Card>
        )): null}
        </div>
        </div>
    </div>
}