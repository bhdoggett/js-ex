var UsersModule = function () {
  var users = [];

  var addUser = function (user) {
    users.push(user);
  };

  var listUsers = function () {
    for (var i = 0; i < users.length; i += 1) {
      console.log(users[i].get("name"));
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

var UserModule = function (name, email) {
  var attributes = {
    name: name,
    email: email || null,
  };

  var getAttribute = function (attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
    console.log({attributes:attribute});
  };

  var setAttribute = function (attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    get: getAttribute,
    set: setAttribute,
  };
};

var learnToCodeRDU = UsersModule();

var aaron = UserModule("Aaron", "aaron@projectshift.com");
var sean = UserModule("Sean", "sean@projectshift.io");

learnToCodeRDU.addUser(aaron);
learnToCodeRDU.listUsers();

var triangleJavaScript = UsersModule();

var stacey = UserModule("Stacey", "stace@codeforfun.com");
var jimbo = UserModule("Jimbo", "jimbo@gmail.com");

triangleJavaScript.addUser(stacey);
triangleJavaScript.addUser(jimbo);


var parsity = UsersModule();
var ben = UserModule('Ben', 'bdoggett@gmail.com')
parsity.addUser(ben);
parsity.listUsers();
ben.set('height', "6 feet 1 inch");
ben.get('height');