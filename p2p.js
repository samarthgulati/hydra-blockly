if(location.hash === '#transmitter') {
  document.body.classList.remove('receiver');
}
var modal = document.querySelector('modal-el');
document.querySelector('#handshake').addEventListener('click', e => {
  if(modal.hasAttribute('open')) {
    modal.removeAttribute('open');
  } else {
    modal.setAttribute('open', true);
  }
});

var p = new Peer({
  host: '//hydra-blockly-peer.glitch.me',
  port: 443,
	path: '/peerjs'
});
var conn;
// new SimplePeer({
//   initiator: location.hash === '#transmitter',
//   trickle: false
// })

p.on('open', function(id) {
  if(location.hash === '#transmitter') {
    document.querySelector('#outgoing').textContent = id;
  }
});

p.on('error', err => console.log('error', err))

p.on('signal', data => {
  console.log('hello', JSON.stringify(data))
  document.querySelector('#outgoing').textContent = JSON.stringify(data)
})

document.querySelector('form').addEventListener('submit', ev => {
  ev.preventDefault();
  conn = p.connect(document.querySelector('#incoming').value);
  conn.on('open', () => {
    modal.close();
    console.log('CONNECT');
  });
  conn.on('data', data => {
    showOverlay();
    updateURL(data);
    loadState(data);
  });
});

p.on('connection', function(c) {
  conn  = c;
  // uncomment to allow receiver to transmit
  // conn.on('data', data => {
  //   showOverlay();
  //   updateURL(data);
  //   loadState(data);
  // });
  modal.close();
  console.log('CONNECT');
});


