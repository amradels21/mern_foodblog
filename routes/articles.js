const express = require('express');
const router = express.Router();

const Articles = require('../models/articles');


// @route GET api/articles
// @desc GET All articles
// @access Public
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400). json(`Error: ${err}`))
});


// @route POST api/articles
// @desc Create A article
// @access Public

router.post('/add', (req, res) => {
    console.log(req.body);
    const newArticle = new Articles({
        title: req.body.title,
        ingredients: req.body.ingredients,
        recipe: req.body.recipe
    });

    newArticle
    .save()
    .then(article => res.json(article))
    .catch(err => res.status(400). json(`Error: ${err}`))


});


// Request find by Id
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(400). json(`Error: ${err}`))
  });
  


// Request find and update by Id
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
      .then(article => {
          article.title = req.body.title;
          article.ingredients = req.body.ingredients;
          article.recipe = req.body.recipe;

          article
            .save()
            .then( () => res.json("The Article is updated Successfully"))
            .catch(err => res.status(400). json(`Error: ${err}`))

      })
      .catch(err => res.status(400). json(`Error: ${err}`))
});



// Request find and delete by Id
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
      .then(() => res.json('This article has deleted'))
      .catch(err => res.status(404).json({success: false}));
  });
  

module.exports = router;