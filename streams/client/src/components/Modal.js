import React from 'react'
import ReactDOM from 'react-dom'


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">

      {/* O Stop propagation evita o bubuling de eventos. caso voce clique em algum componente filho, ele vai achar essa função e parar a propagação. */}
      {/* Lembrando sempre que todo o evento possui automaticamente um objeto e que é o EVENTO do componente */}
      <div onClick={(e) => e.stopPropagation()} className="ui standart modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,

    document.querySelector('#modal')
  )
}

export default Modal