const express = require('express');
const { UserModel } = require('../../db/models');

const route = express.Router();

route.get('/models/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const result = await UserModel.findOne({ where: { id: modelId } });
  res.json(result);
});

route.get('/models', async (req, res) => {
  const { userid } = req.query;
  const result = await UserModel.findAll({
    where: !+userid ? {} : { user_id: +userid }, limit: 100, attributes: ['id', 'name', 'path', 'user_id', 'categ_id', 'price'],
  });
  res.json(result);
});

route.delete('/model/:id', async (req, res) => {
  const { id } = req.params;
  await UserModel.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = route;
