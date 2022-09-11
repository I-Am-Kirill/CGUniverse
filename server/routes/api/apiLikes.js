const express = require('express');
const { LikeModel } = require('../../db/models/usermodel');

const route = express.Router();

route.post('/like', async (req, res) => {
});

route.get('/like', async (req, res) => {
  const { userid } = req.query;
  const result = await LikeModel.findAll({
    where: !+userid ? {} : { user_id: +userid }, limit: 100,
  });
  res.json(result);
});

route.delete('/like/:id', async (req, res) => {
  const { id } = req.params;
  await LikeModel.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = route;
