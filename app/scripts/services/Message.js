(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        return array;
      },

      send: function (newMessage, roomname, time, usrname) {
        messages.$add({content: newMessage, roomId: roomname, sentAt: time, username: usrname}).then(function(ref) {
          var id = ref.key;
          console.log("added new message with id " + id);
          messages.$indexFor(id); // returns location in the array
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
