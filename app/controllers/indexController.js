app.controller('indexCtrl', function(AppFactory){
  var vm = this;
  vm.message = 'Hello World from Angular Controller!';
  vm.tasks = AppFactory.getContacts();
  vm.showAlert = function(){
    alert(vm.textInput);
  }

  vm.addTask = function(){
    vm.tasks.push({taskDescription : vm.taskDescription, taskName : vm.newTask});
    vm.taskDescription = "";
    vm.newTask = "";
  }

  vm.saveData = function(){
    localStorage.setItem('data', JSON.stringify(vm.tasks));
  }
})
