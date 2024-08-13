import React from 'react'

const Box = (props) => {
  return (
    <>
      <div className={`box ${props.result}`}>
        <div>{props.title}</div>
        <div className="img-box">
          <img className="image" src={props.item && props.item.url} />      
        </div>
        <div>{props.item && props.item.name}</div>
        <div className='result'>
          {props.result}
        </div>
      </div>
    </>
  )
}

export default Box;
