import React from 'react';

const SuccessModal = ({ onClose }) => {
    return (
        <div className='modal'>
            <div>
                <button onClick={onClose}>
                    X
                </button>
                <p>Success!</p>
            </div>
        </div>
    );
};

export default SuccessModal;
