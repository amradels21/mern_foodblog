const express = require('express');
const router = express.Router();
const multer = require('multer');
const Articles = require('../models/articles');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5}
});

// @route GET /articles
// @desc GET All articles
// @access Public
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400). json(`Error: ${err}`))
});


// @route POST /articles
// @desc Create A article
// @access Public

router.post('/add', upload.single("articleImage"), (req, res) => {
    console.log(req.body);
    const newArticle = new Articles({
        title: req.body.title,
        ingredients: req.body.ingredients,
        recipe: req.body.recipe,
        articleImage: req.file.originalname
    });

    newArticle
    .save()
    .then(article => res.json('Dish posted successfully'))
    .catch(err => res.status(400). json(`Error: ${err}`))


});


// @route GET /articles/:id
// @desc GET an article
// @access Public

router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(400). json(`Error: ${err}`))
  });
  


// @route UPDATE /articles/:id
// @desc Update an article
// @access Public

router.put('/update/:id', upload.single("articleImage"), (req, res) => {
    Articles.findById(req.params.id)
      .then(article => {
          article.title = req.body.title;
          article.ingredients = req.body.ingredients;
          article.recipe = req.body.recipe;
          article.articleImage = req.file.originalname;

          article
            .save()
            .then( () => res.json("The Article is updated Successfully"))
            .catch(err => res.status(400). json(`Error: ${err}`))

      })
      .catch(err => res.status(400). json(`Error: ${err}`))
});


// @route DELETE /articles/:id
// @desc Delete an Article
// @access Public

router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
      .then(() => res.json('This article has deleted'))
      .catch(err => res.status(404).json({success: false}));
  });
  

module.exports = router;