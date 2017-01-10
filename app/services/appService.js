app.factory('AppFactory', function($http){

  console.log('MyFactory');

  var appFactory = {};

  appFactory.getRequest = function(){
    return $http.get('https://httpbin.org/get');
  }

  appFactory.getContacts = function(){
    return JSON.parse(localStorage.getItem('data')) || [];
  }

  appFactory.doPost = function(args){
    return $http.post('https://httpbin.org/post', args);
    //args MUST BE json object
  }

  return appFactory;

});
