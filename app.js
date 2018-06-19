// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider,$locationProvider) {
   $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days',{
        
        templateUrl: 'pages/forecast.htm',
        controller:'forecastController'
    })
    
});

// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Mumbai";
    
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);


//class

/*.bg-primary{
    
    color: lightYellow ;
  background-color: red;
}*/


weatherApp.controller('forecastController', ['$scope', '$http','$resource', '$routeParams', 'cityService',function($scope, $http ,$resource, $routeParams, cityService) {

$scope.city = cityService.city;
    
$scope.appid='2545013a1ab52309ce200c095ae5acc0';
    
$scope.days=$routeParams.days || '1';

    $http
    
    ({
        method:'GET',
        url:'http://api.openweathermap.org/data/2.5/forecast?q='+$scope.city+'&mode=json&APPID='+$scope.appid+'&cnt='+$scope.days
    }).then(function(response){
        console.log(response.data)
        $scope.weatherApi=response.data;
        
    },function(Error){
        alert(data);
            console.log('Error: ' + response.data);
    });
     
    
   $scope.convertToFahrenheit = function(degK){
        
        return Math.round((1.8 * (degK -273))+ 32);
        
        
    }
   
   //  $scope.formattedDate =   $filter('date')($scope.currDate, "dd-MM-yyyy");
     //$scope.convertToDate=function (dt){
       
      // return Date(weatherApi.dt);
 //   }
    
    }]);
    /*
        
        .success(function(data) {
           
            
        })
        .error(function(data) {
            
        });
    
    */
    
    /*
      $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&mode=json&APPID='+$scope.appid)
        .success(function(data) {
           
            console.log(data)
        })
        .error(function(data) {
            alert(data);
            console.log('Error: ' + data);
        });
     }]);
*/
     /*  $http.get('api/url-api').then(successCallback, errorCallback);

function successCallback(response){
    //success code
}
function errorCallback(error){
    //error code
}
    
    */




  /*  
$http.get('http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&appid=2545013a1ab52309ce200c095ae5acc0')
    .success(function(result){
    $scope.rules=result;
})
    .error(function(data,status){
    console.log(data);
});
  
 */  
    

    



/*
weatherApp.controller('forecastController', ['$scope', '$http','$resource', '$routeParams', 'cityService','$sce',function($scope, $http,$resource, $routeParams, cityService,$sce) {
    
    $scope.city = cityService.city;
    
    $scope.weatherAPI = $sce.trustAsResourceUrl("http://api.openweathermap.org/data/2.5/weather",{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }} );
  //$scope.weatherResult=$sce.valueOf($scope.weatherAPI);
    
       $scope.weatherFinal= $scope.weatherAPI.get ({q: $scope.city,appid:'2545013a1ab52309ce200c095ae5acc0'});
          console.log($scope.weatherFinal);
    }]);

*/




  
weatherApp.directive('weatherReport', function(){
    return{
         
        restrict: 'EACM',
        templateUrl:'C:/xampp/tomcat/webapps/ROOT/directives/weatherReport.htm',
        replace:true
        
                     }
    
});
























/*weatherApp.controller('forecastController', ['$scope', 'cityService','$resource', '$sce', function($scope, cityService, $resource, $sce) {
    
    $scope.city = cityService.city;
   // $scope.weatherAPI= $sce.trustAsResourceUrl('http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&appid=2545013a1ab52309ce200c095ae5acc0');
    //,{ callback:"JSON_CALLBACK"}, {get:{method:"JSONP" }});
    
      //  k:"JSON_CALLBACK"}, {get:{method:"JSONP" }});
    
   // $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/weather",{ callback:"JSON_CALLBACK"}, {get:{method:"JSONP" }});
   //$scope.appids='2545013a1ab52309ce200c095ae5acc0';
    
    
   // ?q=Mumbai,in&appid=2545013a1ab52309ce200c095ae5acc0
    //$sce.trustAsResourceUrl('http://api.openweathermap.org/data/2.5/weather');
                                             
 // $scope.weatherResult= $scope.weatherAPI.get({q:$scope.city,appid:$scope.appids});
                                             
   // console.log($scope.weatherAPI);
  // var result= console.log($sce.valueOf($scope.weatherAPI));    
    
     console.log(JSON.stringify($sce.valueOf($scope.weatherAPI)));
    
   
   $scope.weatherAPI= function($scope,$resource)
       {
       get.$resource('http://api.openweathermap.org/data/2.5/weather?id:1275339&appid=2545013a1ab52309ce200c095ae5acc0')
    query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data) {
            console.log(angular.fromJson(data));
        }
            }
       }
})];
    
                
  function weatherurl(){
        loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Mumbai,in&appid=2545013a1ab52309ce200c095ae5acc0",gotData,'jsonp');
    }
    
   function gotData(data){
       
       console.log(data);
   }
}]);*/