import PreviousSearches from "../components/PreviousSearches"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import axios from "axios"



export default function Recipe() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [list, setList] = useState('alcohol-free')
    const YOUR_APP_ID = 'd61bc819'
    const YOUR_APP_KEY = '99d88520246c8fb83fc2c5d60cbad12a'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`

  const searchRecipes = async () => {
    
    const response = await axios.get(url)
    setRecipes(response.data.hits)
    console.log(response.data)
  };

  return (
    <div>
        <PreviousSearches />
        <div className="previous-searches section">
            <div className="search-box">
                <input 
                    type= "text" 
                    placeholder="Search for recipe" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn" onClick={searchRecipes}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
        <div className="recipes-container">
            {recipes.map((recipe,index) => (
                <div key={index} className="recipe-card">
                    <div className="card-img">
                        <img
                            src={recipe['recipe'].image}
                            className="card-img"
                            alt={recipe['recipe'].label}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{recipe['recipe'].label}</h5>
                        <div className="card-btn">
                            <a
                            href={recipe['recipe'].url}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                            >
                            View Recipe
                            </a>
                        </div>
                    </div>    
                </div>
            ))}
        </div>
    </div>
  );
}



//     return(
//         <div>
//             <PreviousSearches />
//             <div className="recipes-container">
//                 {/* <RecipeCard /> */}
//                 {recipes.map((recipe, index) => (
//                     <RecipeCard key={index} recipe={recipe} />
//                 ))}
//             </div>
//         </div>
//     )
// }