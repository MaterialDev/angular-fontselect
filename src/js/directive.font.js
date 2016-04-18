/* global NAME_FONTSSERVICE */
fontselectModule.directive('jdFont', [NAME_FONTSSERVICE, function(fontsService) {
  return {
    scope: {
      font: '=',
      current: '='
    },
    templateUrl: 'font.html',
    restrict: 'E',
    replace: true,
    controller: ['$scope', '$rootScope', function($scope, $rootScope) {
      fontsService.load($scope.font);

      $scope.onFontClick = function($event, font){
        if($event.target.tagName === "LABEL") {
          $rootScope.$emit('jdFontselect:jdFont:click', font);
        }
      };
    }]
  };
}]);
