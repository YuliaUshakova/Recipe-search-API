import { useEffect, useState } from "react";
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from "./MyRecipesComponent";

function App() {

  const MY_ID = "def367ce";
  const MY_KEY = "e2b59d68161260ad6509fedc282745ed";

  const [mySearch, setMySearch] = useState(''); 
  const [myRecipes, setMyRecipes] = useState([]);

  const [wordSubmitted, setWordSubmitted] = useState('avocado');
  
  const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
    }

  useEffect(() => {
    const getReсipe = async() => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits)
    }
    getReсipe();
    mySearch=useState('');
    setMySearch=useState('');
  }, [wordSubmitted])

  return (
<div className="App">
  <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
  </div> 

<div className="container">
  <form onSubmit={finalSearch}>
    <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
    </input>
    <button>
    <img src="https://img.icons8.com/glyph-neue/64/000000/search.png" width="20px" className="icons" alt="search"/>
  </button>
  </form>
</div>

<div className="column">
{myRecipes.map(element => (
  <MyRecipesComponent label={element.recipe.label} ingredients={element.recipe.ingredientLines} image={element.recipe.image} calories={element.recipe.calories} dishType={element.recipe.dishType} mealType={element.recipe.mealType}/>
))}
</div>

</div>
  );
}

export default App;
