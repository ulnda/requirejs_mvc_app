define(function(){
     
  function render(parameters){
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
  }

  function bindEvents() {
  	document.getElementById('add').addEventListener('click', function(){
      var userName = document.getElementById('user-name').value;
      require(['Controllers/AddController'], function(AddController){
        AddController.addUser(userName);
      }); 
    }, false);
  }
     
  return {
    render:render,
    bindEvents:bindEvents
  };
});