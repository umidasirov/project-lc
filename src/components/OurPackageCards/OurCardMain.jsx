import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurPackage from "./OurPackage";
export default function OurCardMain(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className="cards-main">
        {props.data.map((e) => (
          <OurPackage
            urlImg={e.urlImg}
            courses={e.courses}
            coursesDescription={e.coursesDescription}
            cost={e.cost}
            originalCost={e.originalCost}
          />
        ))}
    </div>
  );
}
