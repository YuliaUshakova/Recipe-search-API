function MyRecipesComponent({label, ingredients, image, calories}) {
   
    return (<div>
    <div className="container">
        <h2>{label}</h2>
        </div>

    <div className="container search">
        <img className="tasty" src={image} alt="fooditem"/>
        </div>

        <ul className="list">
            {ingredients.map(ingredient => (
            <li><span><img src="https://img.icons8.com/doodle/48/000000/checkmark.png" className="icon" alt="tick"/>{ingredient}</span></li>
            ))}
        </ul>
        
        <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
        </div>
   
    </div>)
}

export default MyRecipesComponent;