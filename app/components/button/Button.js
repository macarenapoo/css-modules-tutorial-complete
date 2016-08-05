import React from 'react'
import styles from './Button.css'
import cx from 'classnames'

const Button = ({text, color}) => {

  const buttonClass = cx({
    [styles.default] : true,
    [styles.blue] : color === "blue",
    [styles.green] : color === "green"
  });

  return (
    <div className={ buttonClass }>{ text }</div>
  )
}

export default Button
