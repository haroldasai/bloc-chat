(function() {
  function Room($firebaseArray) {
    var object = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    object.all = rooms;

    object.addNewRoom = function(roomName) {
        rooms.$add(roomName).then(function(ref) {
          var id = ref.key;
          console.log("added "+ roomName + " with id " + id);
          rooms.$indexFor(id); // returns location in the array
        });
    };


    return object;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
