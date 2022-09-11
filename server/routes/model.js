const express = require('express');
const {
  UserModel, LikeModel, Comment, Favorites,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  console.log(req.params.id, 'reqqqqqqqqqqqqqqqqq');
  const models = await UserModel.findAll({ attributes: ['id', 'name', 'path', 'user_id', 'categ_id', 'price'] });
  //   const models = await Favorites.findAll();
  console.log(models, 'models');
  res.json(models);
});

router.get('likes/:id', async (req, res) => {
  console.log(req.params.id);
  const models = await LikeModel.findAll({ where: { model_id: req.params.id } });
  res.json(models);
});

module.exports = router;
