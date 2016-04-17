var angular = require('angular');
var app = angular.module('UserApp', []);

const baseUserRoute = 'http://api.github.com/users';
const currUser = 'lexm';
const userRoute = baseUserRoute + '/' + currUser;

require('./userController')(app, userRoute);
require('./followerController')(app, userRoute);
require('./followingController')(app, userRoute);
require('./repoController')(app, userRoute);
