/**
 * Created by ericbichara on Oct/08/14.
 */
guitarToolsApp.controller('LearnFretboardCtrl', function($scope){

    $scope.keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    $scope.strings = ['High E', 'B', 'G', 'D', 'A', 'Low E'];
    $scope.modes = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];

    $scope.selectedKey = $scope.keys[0];
    $scope.selectedString = $scope.strings[0];
    $scope.selectedMode = $scope.modes[0];

    $scope.randomize = function(){
        $scope.selectedKey = $scope.keys[Math.floor(Math.random() * $scope.keys.length)];
        $scope.selectedString = $scope.strings[Math.floor(Math.random() * $scope.strings.length)];
        $scope.selectedMode = $scope.modes[Math.floor(Math.random() * $scope.modes.length)];
    }

});