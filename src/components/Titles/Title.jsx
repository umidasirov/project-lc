import "./Title.css"
export default function Title(props) {
  return (
    <div className='title-main container-all'>
        <p>{props.title}</p>
        <h1 className='title-description'>{props.titleOf} <span className='blue'>{props.titleOfmore}</span></h1>
        <div className="items">{props.components}</div>
    </div>
  )
}