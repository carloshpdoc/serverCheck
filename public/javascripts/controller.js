(function() {
  var Controller = function PostController(Socket){
    var vm = this;
    var data = [];

    vm.create = create;
    Socket.on('init', function(data){
      console.log(data);
    });
  };

  angular
        .module('post')
        .controller('PostController', Controller);
})();
