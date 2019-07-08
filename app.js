angular.
    module('app', ['angular-md5'])
    .controller('heroListCtrl',
        function ($scope, $http, md5) {
            $scope.pukey = ''; //INFORM HERE THE PUBLIC API KEY
            $scope.prkey = ''; //INFORM HERE THE PRIVATE API KEY
            $scope.ts = new Date().getTime();
            $scope.hash = md5.createHash(`${$scope.ts}${$scope.prkey}${$scope.pukey}`);
            $scope.url = `http://gateway.marvel.com/v1/public/characters?limit=50&ts=${$scope.ts}&apikey=${$scope.pukey}&hash=${$scope.hash}`;
            $scope.years = [
                '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010',
                '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000',
                '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',
                '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980',
                '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970',
                '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960',
                '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950',
                '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940'
            ];
            $scope.dateFilter = function (hero) {
                if ($scope.yearF !== undefined && $scope.yearF !== null) {
                    let date1 = new Date(`${$scope.yearF}-01-01T00:00:00-0400`).getTime();
                    let date2 = new Date(`${$scope.yearF}-12-31T23:59:59-0400`).getTime();
                    let compD = new Date(hero.modified).getTime();                        
                    return ( compD >= date1 && compD <= date2 );	
                } else {
                    return true;
                }
            }

            $http.get($scope.url).then(function(response){
                $scope.resp = response.data;
            });
    });
