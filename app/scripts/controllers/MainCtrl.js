(function() {
    function MainCtrl(Room, Message, $uibModal, $cookies) {
        this.chatRoomArray = Room.all;
        this.animationsEnabled = true;
        this.currentRoomTitle = "";
        this.currentRoomId = "";
        this.currentUser = $cookies.get('blocChatCurrentUser');

        this.openNewRoomModal = function(){
          var modalInstance = $uibModal.open({
              animation: this.animationsEnabled,
              templateUrl: '/templates/new_room_modal.html',
              controller: 'RoomModalCtrl',
              controllerAs: 'roommodal'
          });
        };

        this.setCurrentRoom = function(name, id) {
          this.currentRoomTitle = name;
          this.currentRoomId = id;
          this.messageArray = Message.getByRoomId(id);
        };

        this.sendMessage = function() {
          var currentTime = "1:00pm";
          Message.send(this.message, this.currentRoomId, currentTime, this.currentUser);
          this.message = "";
        }

    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);

})();
