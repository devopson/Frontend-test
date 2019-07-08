angular.module("marvelModule")
    .controller("marvelController", function ($scope, $http, marvelService) {
        $scope.titulo = "Lista de personagens Marvel";

        var getPersonagens = function () {
            var publickey = '5d2707ee7cf225daeb109e0e2f4333c7';
            var ts = '1';
            var hash = '9d5c5c873655678d744af05dbaa0a601';
            var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
            var limit = 20;
            var url = baseUrl + '?limit=' + limit + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
            $http.get(url).then(function (result) {
                console.log(result.data.data.results);
                $scope.personagens = result.data.data.results;
            });
        }

        $scope.Detalhes = function(personagm){
            $('#modal1').openModal();
            $scope.Personagem = angular.copy(personagm);
        }

        var init = function () {
            getPersonagens()
        };

        init();
    })