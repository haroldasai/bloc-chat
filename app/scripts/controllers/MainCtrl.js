(function() {
    function MainCtrl(Room, Message, $uibModal) {
        this.chatRoomArray = Room.all;
        this.animationsEnabled = true;
        this.currentRoomTitle = "";
        this.currentRoomId = "";

        this.openNewRoomModal = function(){
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        this.setCurrentRoom = function(name, id) {
            this.currentRoomTitle = name;
            this.currentRoomId = id;
            this.messageArray = Message.getByRoomId(id);
        };





    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);

})();
