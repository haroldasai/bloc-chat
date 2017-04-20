(function() {
    function MainCtrl(Room) {
        this.chatRoomArray = Room.all;
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', MainCtrl]);
})();
