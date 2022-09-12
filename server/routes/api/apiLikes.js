const express = require('express');
const { LikeModel, UserModel, User } = require('../../db/models');

const route = express.Router();

route.post('/like/:id', async (req, res) => {
  const { id } = req.params.id;
  console.log(req.session);
  await LikeModel.create({ where: { model_id: id, user_id: req.session } });
  res.sendStatus(200);
});

route.get('/like/:id', async (req, res) => {
  const { id } = req.params;
  console.log('===========================', id);
  const result = await LikeModel.findAll({ where: { model_id: id } });
  res.json(result);
});

route.get('/like', async (req, res) => {
  const { userId } = req.query;
  console.log('===========================', userId);
  const result = await LikeModel.findAll({ include: UserModel });
  res.json(result);
});

route.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = route;
