module.exports = (app, userRoute) => {
  app.controller('FollowingController', ['$http', function($http) {
    this.followingData = {};
    this.getFollowingData = function() {
      $http.get(userRoute + '/' + 'following')
      .then((res) => {
        this.followingData = res.data;
        console.log('followingData', this.followingData);
      });
    }
  }]);
}
