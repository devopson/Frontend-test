/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, $http, $sce, $scope) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;

  self.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  debugger

  $sce.trustAsResourceUrl();

  function httpGet(name)
  {
    var apikey = 'ba6408b22147ebd90a9d8c61664d8c29';
    var ts = '1';
    var hash = '9a9abe9920e07b6fc647a85a4b55d01a';
    var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    var limit = 20;
    var url = baseUrl + '?limit=' + limit + '&ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
    
    if(name != undefined && name != null && name != "")
    {
      url += "&name=" + name;
    }
    
    $http.get(url).then(function (result) {

      self.users = [ ];
      console.log(result.data.data.results);

      result.data.data.results.forEach(element => {
        var obj = {
          'name': element.name,
          'avatar': element.thumbnail.path + "." + element.thumbnail.extension,
          'content': 'Data modificação: ' + element.modified
        }
        self.users.push(obj);
      });

      self.selected = self.users[0];
    });
}


  httpGet();

  self.filterName = function(name){
    httpGet(name)
  }

  // Load all registered users

  // UsersDataService
  //       .loadAllUsers()
  //       .then( function( users ) {
  //         self.users    = [].concat(users);
  //         self.selected = users[0];
  //       });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default [ 'UsersDataService', '$mdSidenav', '$http', '$sce', '$scope', AppController ];
