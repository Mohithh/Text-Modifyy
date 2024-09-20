import React from 'react'

function Alert(props) {
    const capatlize = (word)=>{
        const value = word.toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  return (
    props.alert &&
    <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatlize(props.alert.type)}</strong>: {props.alert.msg}
            
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      
    </div>
  )
}

export default Alert
