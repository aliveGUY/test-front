import { createRoot } from 'react-dom/client'

const SimpleReactComponent = ({ index }) => {
  return (
    <>
      <slot name="item">Default name</slot>
      <a href={`element/${index}`} style={{ marginLeft: '16px' }}>Manage</a>
      <hr />
    </>
  )
}


class ListItem extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const mountPoint = document.createElement('li')
    this.shadowRoot.appendChild(mountPoint)

    const id = this.getAttribute('id')

    const root = createRoot(mountPoint)
    root.render(<SimpleReactComponent index={id} />)
  }
}

customElements.define('list-item', ListItem)
