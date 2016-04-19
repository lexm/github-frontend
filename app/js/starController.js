module.exports = (app, userRoute) => {
  app.controller('StarController', ['$http', function($http) {
    this.starData = {};
    this.getStarData = function() {
      $http.get(userRoute + '/' + 'starred')
      .then((res) => {
        this.starData = res.data;
        console.log('starData', this.starData);
      });
    }
  }]);
}
