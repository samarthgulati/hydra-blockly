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

var p = new SimplePeer({
  initiator: location.hash === '#transmitter',
  trickle: false
})

p.on('error', err => console.log('error', err))

p.on('signal', data => {
  console.log('hello', JSON.stringify(data))
  document.querySelector('#outgoing').textContent = JSON.stringify(data)
})

document.querySelector('form').addEventListener('submit', ev => {
  ev.preventDefault()
  p.signal(JSON.parse(document.querySelector('#incoming').value))
})

p.on('connect', () => {
  modal.close()
  console.log('CONNECT')
})

p.on('data', data => {
  showOverlay();
  updateURL(data);
  loadState(data);
})