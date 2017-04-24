(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.statusBar = "This name will appear when you send messages";
        this.setUsername = function() {
            if(this.username){
              $cookies.put('blocChatCurrentUser', this.username);
              $uibModalInstance.dismiss('cancel');
            } else {
              alert("Username should not be empty!");
            }
        };
    };

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();
