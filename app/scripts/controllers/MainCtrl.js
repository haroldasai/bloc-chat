(function() {
    function MainCtrl(Room, $uibModal) {
        this.chatRoomArray = Room.all;
        this.animationsEnabled = true;

        this.openNewRoomModal = function(){
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);

})();
