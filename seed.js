var db = require("./models");

var quotesList =[
{
"quote": "You can do anything, but not everything.",
"author":"-David Allen"
},
{
"quote": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
"author":"—Antoine de Saint-Exupery"
},
{
"quote": "The richest man is not he who has the most, but he who needs the least.",
"author":"—Unknown"
},
{
"quote": "You miss 100 percent of the shots you never take.",
"author":"—Wayne Gretzky"
},
{
"quote": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
"author":"—Ambrose Redmoon"
},
{
"quote": "You must be the change you wish to see in the world.",
"author":"—Gandhi"
},
{
"quote": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
"author":"—Lin-Chi"
},
{
"quote": "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
"author":"—A.A. Milne"
}
];

db.Quote.remove({}, function(err, quotes){

  db.Quote.create(quotesList, function(err, quotes){
    if (err) { return console.log('ERROR', err); }
    console.log("all quotes:", quotes);
    console.log("created", quotes.length, "quotes");
    process.exit();
  });

});