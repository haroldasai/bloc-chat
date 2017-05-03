(function() {
    function proomUserFilter(Room, $cookies) {
        return function(userObj) {
          var currentRoomId = $cookies.get('currentRoomId');
          var inRoomUsers = Room.privateUserArray(currentRoomId);

            if(online == true){
              return "ion-checkmark-circled";
            } else {
              return "ion-close-circled";
            }
        };
    }

    angular
        .module('blocChat')
        .filter('proomUserFilter', ['Room', '$cookies', proomUserFilter]);
})();
