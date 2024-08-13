import React, {useEffect} from 'react'

const Box = (props) => {

  const img = () => {
    if(props.item !== undefined) {
      return (
        <img src={props.item && props.item.url} alt={props.item?.name}/>
      )
    }
  }

  useEffect(() => {
    img()
  }, [props]);

  return (
    <>
      <div className={`box ${props.result}`}>
        <div>{props.title}</div>
        <div className="img-box">
          {img()}
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
