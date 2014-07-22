define(['Views/AddView', 'Models/User'], function(AddView, User){
 
  function start(){
    AddView.render();
    AddView.bindEvents();
  }

  function addUser(userName) {
    var users = JSON.parse(localStorage.users);
    users.push(new User(userName));
    localStorage.users = JSON.stringify(users);
    require(['Controllers/ListController'], function(ListController){
      window.location.hash = '#list';
    });  	
  }
 
  return {
    start:start,
    addUser:addUser
  };
});