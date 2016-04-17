module.exports = (app, userRoute) => {
  app.controller('FollowerController', ['$http', function($http) {
    this.getFollowerData = function() {
      $http.get(userRoute + '/' + 'following')
      .then((res) => {
        this.followerData = res.data;
        console.log('followerData', this.followerData);
      });
    }
  }]);
}
