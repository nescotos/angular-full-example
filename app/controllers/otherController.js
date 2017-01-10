app.controller('otherCtrl', function(AppFactory) {
    var vm = this;
    AppFactory.getRequest().then(function(data) {
        vm.data = data.data;
    });
    vm.showAlert = function() {
        alert(vm.textInput);
    }
    vm.doPost = function() {
        AppFactory.doPost({param1: 'Hola', param2: 7, param3: [{array1 : 1, array2 : Date.now()}]}).then(function(data){
          console.log(data);
        })
    }
})
