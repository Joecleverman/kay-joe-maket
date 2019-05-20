import React from 'react';
import pancakes from './pancakes.jpeg'

const Recipes = () => {
  return (
    <div className="recipes">
      <h3>Share Brunch Recipes - <span className="italics">Coming Soon!</span></h3>
      <p>Hosting a brunch at home? Soon, you can share recipes and hosting tips with fellow brunch lovers.
      <br></br>
      Until then, please enjoy the recipe below!</p>

      <h4>Lemon-Ricotta Pancakes</h4>
      <p className="italics">Recipe courtesy of Giada De Laurentiis</p>
      <img src={pancakes} width="400" height="300" alt="pancakes"/>
      <div className="row">
        <div className="col-md-4">
          <h5>Ingredients</h5>
            <ul>
              <li>2/3 cup all-purpose flour</li>
              <li>1/3 cup polenta</li>
              <li>1 tsp baking powder</li>
              <li>1/4 tsp kosher salt</li>
              <li>1 cup buttermilk</li>
              <li>1/2 cup part-skim ricotta cheese</li>
              <li>2 tsp grated lemon zest (2 lemons)</li>
              <li>2 eggs</li>
              <li>Grapeseed oil</li>
              <li>Maple syrup, warmed, for serving</li>
            </ul>
        </div>

        <div className="col-md-8">
          <h5>Directions</h5>
          <p>In a large bowl, whisk together the flour, polenta, baking powder and salt.
          In a large measuring cup, whisk together the buttermilk, ricotta, lemon zest
          and eggs. Pour the liquid ingredients over the dry ingredients and fold togehter,
          using a rubber spatula, until just combined. Let sit for 15 minutes to allow
          the polenta to soften.</p>
          <p>Preheat a rimmed griddle to medium-low heat. Add oil to coat the griddle.</p>
          <p>With a 1/4-cup measure, scoop batter onto the griddle. Cook for 2 to 3 minutes
          per side, until golden brown and cooked through. Remove the pancakes to a plate and
          continue with the remaining batter. Serve warm with lots of warm maple syrup.</p>
        </div>

      </div>
    </div>
  )
}

export default Recipes;
