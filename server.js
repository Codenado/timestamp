var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.send("Please enter a date parameter to be converted.")
})

app.get('/:time', function (req, res) {
  var number = parseInt(req.params.time)
  if (req.params.time == number){
    console.log('help')
    var date = new Date(number)
  }else{
    var date = new Date(req.params.time)
  }
  var time = {}
  if ( date.getTime() ){
    time = {
      natual: date.toDateString(),
      unix: date.getTime()
    }
  }else{
    time = {
      natual: null,
      unix: null
    }
}

res.send(time)
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
