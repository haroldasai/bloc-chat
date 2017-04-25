(function() {
    function MainCtrl(Room, Message, $uibModal, $cookies, $scope) {
        var vim = this;
        this.chatRoomArray = Room.all;
        this.animationsEnabled = true;
        this.currentRoomTitle = "Select your chat room!";
        this.currentRoomId = "";
        this.currentUser = "";//$cookies.get('blocChatCurrentUser')"";

        if($cookies.get('blocChatCurrentUser')){
          this.currentUser = $cookies.get('blocChatCurrentUser');
        }

        $scope.$on('BOOM', function(events, args){
          console.log(args);
          console.log("coco");
          vim.currentUser = args;
        });

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
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', '$scope', MainCtrl]);

})();
