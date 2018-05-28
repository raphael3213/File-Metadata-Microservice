
var express = require('express');
var app = express();
var multer=require('multer');

var upload=multer({dest:"upload/"})

app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload",upload.single('file'),function(req,res,next)
         {
  res.json(req.file);
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
