angular.module('QuotesApp')
  .controller('QuotesController', QuotesController);

QuotesController.$inject = ['$http'];
function QuotesController($http){
  var self = this;
  self.all = [];
  self.addQuote = addQuote;
  self.newQuote = {};
  self.getQuotes = getQuotes;
  // self.getQuestion = getQuestion;
  self.deleteQuote = deleteQuote;
  self.updateQuote = updateQuote;
  
  // GET - 
  function getQuotes(){
  console.log("get is hit- controller")
  $http
    console.log("get is hit- controller")
    .get('http://localhost:3000/quotes')
    .then(function(response){
      self.all = response.data;
    });
  }

  // ADD -- 
  function addQuote(){
    $http
      .post('http://localhost:3000/quotes', self.newQuote)
      .then(function (request){
        getQuotes();
      });
      self.newQuote ={};
  }

  // DELETE -- 
 function deleteQuote(quote){
   $http
     .delete('http://localhost:3000/quotes/' + quote._id)
     .then(function (res){
       var index = self.all.indexOf(quote);
       self.all.splice(index, 1);
       getQuestions();
     });
 }

 // UPDATE --
 function updateQuote(quote){
    console.log('update hit');
    $http
      .patch('http://localhost:3000/quotes/'+ quote._id, quote)
      .then(function (request){
        console.log('function hit');
        console.log(request);
        getQuestions();
      });
 }

}