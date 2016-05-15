var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{


  req.accepts('application/json');

  var queryParams = [];

  for (var prop in req.query)
  {
    if (req.query.hasOwnProperty(prop))
    {
      queryParams.push({"param": prop, "value": req.query[prop]});
      console.log(prop, req.query[prop]);
    }
  }

  var bodyParams = [""];

  for (var prop in req.body)
  {
    if (req.body.hasOwnProperty(prop))
    {
      bodyParams.push({"param": prop, "value": req.body[prop]});
      console.log(prop, req.body[prop]);
    }
  }

  res.render('index', { queryParams: JSON.stringify(queryParams), bodyParams: JSON.stringify(bodyParams), title: 'Express',request:req});
});

router.post('/', function(req, res, next)
{
  req.accepts('application/json');

  var queryParams = [];

  for (var prop in req.query)
  {
    if (req.query.hasOwnProperty(prop))
    {
      queryParams.push({"param": prop, "value": req.query[prop]});
      console.log(prop, req.query[prop]);
    }
  }

  var bodyParams = [];

  for (var prop in req.body)
  {
    if (req.body.hasOwnProperty(prop))
    {
      bodyParams.push({"param": prop, "value": req.body[prop]});
      console.log(prop, req.body[prop]);
    }
  }

  res.render('index', { queryParams: JSON.stringify(queryParams), bodyParams: JSON.stringify(bodyParams), title: 'Express',request:req});

});

module.exports = router;
