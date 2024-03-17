import React from 'react'

const ErrorModal = ({ onClose }) => {
  return (
    <div className='modal'>
    <div>
        <button onClick={onClose}>
            X
        </button>
        <p>Please make a selection.</p>
    </div>
</div>  )
}

export default ErrorModal