(function() {
    function iconverter() {
        return function(online) {
            if(online == true){
              return "ion-checkmark-circled";
            } else {
              return "ion-close-circled";
            }
        };
    }

    angular
        .module('blocChat')
        .filter('iconverter', iconverter);
})();
