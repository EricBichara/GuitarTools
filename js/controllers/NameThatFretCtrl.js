/**
 * Created by ericbichara on Oct/09/14.
 */
guitarToolsApp.controller('NameThatFretCtrl', function($scope){
    $scope.stringList = ['High E', 'B', 'G', 'D', 'A', 'Low E'];
    $scope.fretList = [];
    $scope.keyList = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


    $scope.selectedString = "";
    $scope.selectedFret = "";

    $scope.options = [];

    $scope.answer = "";
    $scope.result = "";

    $scope.createFretList = function(){
        var array = [];

        for(var i = 0; i<24; i++){
            array.push(i);
        }

        $scope.fretList = array;
    };

    $scope.createOptions = function(){

    };

    var shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    $scope.randomize = function(){
        $scope.result = "";
        $scope.selectedString = $scope.stringList[Math.floor(Math.random() * $scope.stringList.length)];
        $scope.selectedFret = $scope.fretList[Math.floor(Math.random() * $scope.fretList.length)];

        //figure out answer
        var string = $scope.selectedString;
        if(string === 'High E' || string === 'Low E'){
            string = 'E';
        }

        var fret = $scope.selectedFret;
        if($scope.selectedFret > 11){
            fret = $scope.selectedFret - 12;
        }

        var fretIndex = $scope.keyList.indexOf(string);
        $scope.answer = $scope.keyList[fretIndex + fret];

        //create options
        var options = [];

        options.push($scope.answer);
        while(options.length < 4){
            var key = $scope.keyList[Math.floor(Math.random() * $scope.keyList.length)];
            if(options.indexOf(key) === -1){
                options.push(key);
            }
        }

        $scope.options = shuffle(options);
    };

    $scope.checkOption = function(option){
        if(option === $scope.answer){
            $scope.result = "YOU THE MAN!!!!!";
        }else{
            $scope.result = "YOU SUCK BALLS!!!!!";
        }
    };

    $scope.createFretList();
    $scope.randomize();
});