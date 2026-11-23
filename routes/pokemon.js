
var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res) {

  // ポケモンの番号をランダムに決定
  const id = Math.floor(Math.random() * 1025) + 1;

  // PokéAPIにアクセス
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id;

  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);

      // 取得したポケモンの情報を返す
      res.json({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
      });

    } else {
      res.status(500).send('API取得エラー');
    }
  });
});

module.exports = router;
