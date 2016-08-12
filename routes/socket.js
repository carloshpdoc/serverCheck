module.exports = function(socket){
  socket.emit('init',{
    name:'check ours servers'
  });
};
