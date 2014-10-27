var app = angular.module('corsTester', []);

app.controller("CorsTesterCtrl", ['$scope', function($scope) {

    //Create objects:
    var requestParameters = {
        httpTypes: ['GET', 'POST', 'PUT'],
        selectedType: '',
        url: ''
    };
    var response = {
        data: '',
        setData: function (data) {
            this.data = data;
            $scope.$apply(); //To update view.
        }
    };

    //Init defaults:
    requestParameters.selectedType = requestParameters[0];
    requestParameters.url = 'http://localhost:64411/api/message/';
    response.data = '(Response)';

    //Bind to view:
    $scope.response = response;
    $scope.requestParameters = requestParameters;

    //Logic (work on objects):
    $scope.sendRequest = function () {
        var serviceUrl = requestParameters.url;
        var type = requestParameters.selectedType;

        //Uncomment to send data to server:
        //var data = {message:"Hej hopp"};

        $.ajax({
            type: type,
            url: serviceUrl //,
            //data: data
        }).done(function (responseData) {
            response.setData(responseData);
        }).error(function (jqXHR, textStatus, errorThrown) {
            response.setData(jqXHR.responseText || textStatus);
        });
    }
}]);