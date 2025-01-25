import { Link } from "react-router-dom"
import "./viewButton.css"
export default function ViewButton(props) {
  return (
    <Link to={props.link}>
        <button className='view-button'>
            {props.title}
        </button>
    </Link>
    )
}