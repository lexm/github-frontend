module.exports = (app, userRoute) => {
  app.controller('RepoController', ['$http', function($http) {
    this.getRepoData = function() {
      $http.get(userRoute + '/' + 'repos')
      .then((res) => {
        this.repoData = res.data;
        console.log('repoData', this.repoData);
      });
    }
  }]);
}
