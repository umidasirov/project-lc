import ViewButton from "../other/ViewButton/ViewButton"
import "./OurInstructor.css"
export default function OurInstructor(props) {
  return (
    <div class="our-instructor">
        <img src={props.img} alt="" />
        <div className="instructors-info">
            <div className="name hover-blue">{props.name}</div>
            <div className="instructor-item">
                <span className="students-instructor">{props.students}</span> Students
                <span className="students-instructor"> {props.course}</span> Course
            </div>
        </div>
            <ViewButton title="View Portfolio" link={props.link}/>
    </div>

  )
}