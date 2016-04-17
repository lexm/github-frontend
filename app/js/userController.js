module.exports = (app, userRoute) => {

  app.controller('UserController', ['$http', function($http) {
    this.userData = {};
    this.followersData = {};
    this.followingData = {};
    this.getUserData = function() {
      $http.get(userRoute)
      .then((res) => {
        this.userData = res.data;
        this.avatarUrl = res.data.avatar_url;
        this.starredUrl = res.data.starred_url;
        $http.get(this.starredUrl)
        .then((strrdRes) => {
          thisUser.starredData = strrdRes.data;
        });
        this.followers = res.data.followers;
        this.followersUrl = res.data.followers_url;
        var thisUser = this;
        this.following = res.data.following;
        this.followingUrl = res.data.following_url;

        this.reposUrl = res.data.repos_url;
        $http.get(this.reposUrl)
        .then((reposRes) => {
          thisUser.reposData = reposRes.data;
          console.log(thisUser.reposData);
        });
        console.log(this.userData);
        console.log(this.avatarUrl);
        console.log(this.starredData);
        console.log(this.followers);
        console.log(this.following);
      },
      function(error) {
        console.error(error);
      });
    }
  }])
}
