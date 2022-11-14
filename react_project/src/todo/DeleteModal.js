import React from 'react'
import './TodoStyle.css';

const DeleteModal = props => {

    const onCancel = () => {
        props.onCancel();
    }

    const onConfirm = () => {
        props.onConfirm();
    }

    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={onCancel}>Cancel</button>
            <button className='btn' onClick={onConfirm}>Delete</button>
        </div>
    );
}

export default DeleteModal;