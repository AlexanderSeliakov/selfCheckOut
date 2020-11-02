import React from 'react'
import {Link} from 'react-router-dom';

import './Button.css'

export default props => {

  if (props.href) {
    return (
      <a href={props.href} className={`Button Button-${props.action || 'default'}`} style={props.style}>
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`Button Button-${props.action || 'default'}`}
        style={props.style}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`Button Button-${props.action || 'default'} ${props.d && 'f'}`}
      type={props.type}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.children}
    </button>
  );

}
