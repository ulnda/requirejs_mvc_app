require(['Models/User'], function(User){
     
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
     
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
});