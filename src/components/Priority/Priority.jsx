import React from 'react'
import './Priority.css'
export default function Priority(props) {
  return (
    <div className='priority-elements' data-aos="fade-up" data-aos-duration="30000">
        <div>
          <div className='icon-priority'>
              {props.iconPriority}
          </div>
        </div>
        <div className="priority-text">
            <h3>{props.priorityTitle}</h3>
            <p>{props.priorityText}</p>
        </div>
    </div>
  )
}
