/**
 * Created by ericbichara on Oct/12/14.
 */
guitarToolsApp.controller('MetronomeCtrl', function($scope, $window, $http){
    $scope.speed = 0;
    var context;
    var sourceNode;

    $scope.init = function(){
        try{
            $window.AudioContext = window.AudioContext || $window.webkitAudioContext;
            context = new AudioContext();

            $http.get('files/CLAVE.WAV',{
                responseType: 'arraybuffer'
                }).then(
                    function(result){
                        sourceNode = context.createBufferSource();
                        sourceNode.connect(context.destination);
                        context.decodeAudioData(result.data, function(buffer){
                            sourceNode.buffer = buffer;
                            sourceNode.start();
                        });

                    },
                    function(error){
                        console.log("error");
                    });
        }catch(e){
            console.log("error: " + e);
        }
    };

    $scope.up = function(){
        console.log("yeah baby");
    };

    $scope.up = function(){

    };

    $scope.up = function(){

    };

    $scope.up = function(){

    };

    $scope.init();
});