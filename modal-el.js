const modalElTemplate = document.createElement('template')
modalElTemplate.innerHTML = /* HTML */`
<style>
:host {
  display: none;
}
:host([open]) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.15);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000000;
}
div {
  width: 50%;
  width: max-content;
  height: 50%;
  height: max-content;
  padding: 0.5rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem 0.125rem rgba(0,0,0,0.15);
}
</style>
<div>
  <slot name="content">
    <h1>Hello Modal</h1>
  </slot>
</div>
`
class ModalEl extends HTMLElement {
  static get is() {
    return 'modal-el'
  }
  close() {
    this.removeAttribute('open')
  }
  open() {
    this.setAttribute('open', true)
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(modalElTemplate.content.cloneNode(true))
    
  }
  handleClick(e) {
    if(e.path[0] !== this) return
    this.close()
  }
  connectedCallback() {
    this.handleClick = this.handleClick.bind(this)
    this.addEventListener('click', this.handleClick)
  }
}
window.customElements.define(ModalEl.is, ModalEl)