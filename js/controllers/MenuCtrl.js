/**
 * Created by ericbichara on Oct/09/14.
 */
guitarToolsApp.controller('MenuCtrl', function($scope, $location){
    $scope.goToLearnFretboard = function(){
      $location.path('/');
    };

    $scope.goToNameThatFret = function(){
        $location.path('/nameThatFret');
    };

    $scope.goToMetronome = function(){
        $location.path('/metronome');
    }
});