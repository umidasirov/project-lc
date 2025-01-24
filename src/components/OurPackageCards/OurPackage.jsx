import "./OurPackege.css";
export default function OurPackage(props) {
  return (
    <div class="card">
      <div class="card-header">
        <img src={props.urlImg} alt="" />
      </div>
      <div class="card-body">
        <p class="courses">{props.courses}</p>
        <p class="description">{props.coursesDescription}</p>
        <div class="costs-of-courses">
          <span class="original-cost">${props.originalCost}</span>{" "}
          <span className="cost">${props.cost}</span>
        </div>
      </div>
    </div>
  );
}
