(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal = this;

        modal.chatRoomArray = Room.all;
        modal.statusBar = "Enter a room name";

        modal.addData = function(){
            if(modal.inputData){
                Room.addNewRoom(modal.inputData);
                modal.cancel();
            } else {
                alert("Room name should not be empty.");
            }
        };

        modal.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };


    };

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
