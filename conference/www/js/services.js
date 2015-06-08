angular.module('services', ['ngResource'])

.factory('Recipe', function ($resource) {
    return $resource('http://localhost:5000/recipes/:recipeId');
});
