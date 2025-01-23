import { Link } from "react-router-dom"
import "./category.css"
export default function Category(props) {
  return (
    <div className='container-all categories-main'>
        {props.data.map((item, index) =>(
            <Link to={item.link}><div className="categories">{item.title}</div></Link>
        ))}
    </div>
  )
}