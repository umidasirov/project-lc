import Button from "../../other/Button";
import "./Partners.css";
export default function Title(props) {
  return (
    <div className="pert-title" data-aos="fade-up" data-aos-duration="3000">
      <div
        className="partners container-all"
      >
        <h2>
          Learn with our <span className="blue">partners</span>
        </h2>
        <div className="brands">
          {props.brands.map((brand, index) => (
            <img key={index} src={brand.brand} alt="brand" />
          ))}
        </div>
      </div>
      <div className="explorer">
          <Button title="Explore" link='/explorer' />
          <span>Learn with 200+ world-class institutions and educators</span>
        </div>
    </div>
  );
}
