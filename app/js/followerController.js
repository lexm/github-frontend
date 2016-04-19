module.exports = (app, userRoute) => {
  app.controller('FollowerController', ['$http', function($http) {
    this.followersData = {};
    this.getFollowerData = function() {
      $http.get(userRoute + '/' + 'followers')
      .then((res) => {
        this.followerData = res.data;
        console.log('followerData', this.followerData);
      });
    }
  }]);
}
