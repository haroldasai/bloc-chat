(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        // Modal configuration object properties
        animation: true,
        templateUrl: '/templates/new_user_modal.html',
        controller: 'UserModalCtrl',
        controllerAs: 'usermodal'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
