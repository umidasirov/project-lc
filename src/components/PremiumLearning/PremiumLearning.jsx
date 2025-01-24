import "./PremiumLearning.css";
import Accordion from "react-bootstrap/Accordion";
export default function PremiumLearning(props) {
  return (
    <div className="premium-learning container-all">
      <div
        className="premium-section"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <p className="main">PREMIUM LEARNING</p>
        <h1>
          State of the art e-Learning <span className="blue">Experience</span>
        </h1>
        {props.data.map((e) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={e.id}>
              <Accordion.Header>{e.title}</Accordion.Header>
              <Accordion.Body>{e.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
      <div
        className="premium-banner"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/home-img-2.png"
          alt=""
        />
      </div>
    </div>
  );
}
