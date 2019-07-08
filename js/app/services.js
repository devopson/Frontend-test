angular.module("marvelModule")
    .factory("marvelService", function ($http) {
        var _getAll = function () {
            return $http.get("http://localhost:51263/api/Pessoa/Listar");
        };

        return {
            getAll: _getAll
        };
    });