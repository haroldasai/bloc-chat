(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        return array;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
