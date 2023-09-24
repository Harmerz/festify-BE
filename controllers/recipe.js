const Recipe = require('../models/recipe')

exports.getRecipe = (req, res) => {
  Recipe.find()
    .then((recipe) => {
      if (!recipe) return res.status(404).json({ message: 'Recipe tidak ditemukan' })
      return res.json(recipe)
    })
    .catch((err) => console.log(err))
}

exports.getOneRecipe = (req, res) => {
  const recipeId = req.params.id; // Assuming the ID is passed in the request parameters

    Recipe.findById(recipeId)
      .then((recipe) => {
        if (!recipe) return res.status(404).json({ message: 'Recipe tidak ditemukan' });
        return res.json(recipe);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      });
}

exports.addRecipe = (req, res) => {
  const recipe = new Recipe({
    Id: req.body.id,
    name: req.body.name,
    ingredient: req.body.ingredient,
    instruction: req.body.instruction,
  })
  recipe.save((err, recipe) => {
    if (err) return res.status(500).json({ error: err })
    return res.json(recipe)
  })
}

exports.deleteRecipe = (req, res) => {
  Recipe.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    return res.sendStatus(200);
  });
};

exports.updateRecipe = (req, res) => {
  const { Id, name, ingredient, instruction } = req.body;

  Recipe.findByIdAndUpdate(
    req.params.id,
    { Id, name, ingredient, instruction },
    { new: true },
    (err, recipe) => {
      if (err) return res.status(500).json({ error: err });
      return res.json(recipe);
    }
  );
};
