import React from 'react';
import ReactDom from 'react-dom';
import './Sidedrawer.css';

function Sidedrawer(props) {
    const content =  <aside className='side-drawer'>
        {props.children}
    </aside>;
    return ReactDom.createPortal(content, document.getElementById('drawer-hook'));
}

export default Sidedrawer;
