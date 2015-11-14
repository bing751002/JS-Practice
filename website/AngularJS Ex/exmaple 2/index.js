<!-----
Source : http://curran.github.io/screencasts/introToAngular/exampleViewer/#/12

point:
1. ng-app= xxx,  xxx要和var xxx = angular.module 的xxx一樣

description: add some text in the input box and will shows on the below.

another feature is that the $watch will detect the changes of the lastName and send an evet message
-->



<html ng-app="nameApp">  
  <head>
    <meta charset="utf-8">
    <title>Angular.js Example</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js"></script>
    <script> 
    /**
    *  Module   
    *
    * Description
    */
    var nameApp = angular.module('nameApp', []);
    nameApp.controller('nameCtrl',function($scope){
     $scope.firstName = "hi";
     $scope.lastName = "GG"; 
     $scope.$watch('lastName', function(newvalue, oldvalue){
      console.log('value update');
     });
    }); </script>
  </head>   
  <body ng-controller= "nameCtrl">
    First name:<input ng-model="firstName" type="text"/>
    <br>  
 Last name:<input ng-model="lastName" type="text"/>
    <br>
    Hello {{firstName}} {{lastName}}
  </body>
</html>