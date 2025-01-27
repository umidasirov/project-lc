import { useEffect } from "react";
import Contetn from "../homepage-components/mainContent/Contetn";
import Priority from "../homepage-components/Priority/Priority";
import "aos/dist/aos.css";
import Partners from "../homepage-components/TitleBrands/Partners";
import Titles from "../homepage-components/Titles/Title";
import Courses from "../homepage-components/Courses/Courses";
import Category from "../homepage-components/CourseCategories/Category";
import OurCardMain from "../homepage-components/OurPackageCards/OurCardMain";
import PremiumLearning from "../homepage-components/PremiumLearning/PremiumLearning";
import Results from "../homepage-components/Results/Results";
import OurInstructor from "../homepage-components/Our-instructor/OurInstructor";
export default function HomePage({base}) {
  return (
    <div className="Homepage">
      <Contetn />
      <div className="priority">
        <div className="container-all priority-title">
          {base.priorityData.map((item, index) => (
            <Priority
              key={index}
              iconPriority={item.iconPriority}
              priorityTitle={item.priorityTitle}
              priorityText={item.priorityText}
            />
          ))}
        </div>
      </div>
      <div className="partner">
        <Partners brands={base.partnersData} />
      </div>
      <div className="courses">
        <Titles
          title="OUR COURSES"
          titleOf="Explore top"
          titleOfmore="courses"
          components={<Courses data={base.courses} />}
        />
      </div>
      <div
        className="courses-categories"
        data-aos="fade-up"
        data-aos-duration="30000"
      >
        <Titles
          title="CHOOSE FROM ANY THESE"
          titleOf="Courses"
          titleOfmore="categories"
          components={<Category data={base.categories} />}
        />
      </div>
      <div className="our-package" data-aos="fade-up" data-aos-duration="3000">
        <Titles
          title="OUR PACKAGE"
          titleOf="Explore top"
          titleOfmore="packages"
          components={<OurCardMain data={base.packages} />}
        />
      </div>
      <div className="premium-learning">
        <PremiumLearning data={base.AccordionList} />
      </div>
      <div
        className="result container-all"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {base.reslt.map((e) => (
          <Results
            color={e.color}
            number={e.number}
            percent={e.percent}
            description={e.about}
          />
        ))}
      </div>
      <div
        className="our-instructor-title"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Titles
          components={base.instructors.map((e) => (
            <OurInstructor
              name={e.name}
              students={e.students}
              course={e.course}
              link={e.link}
              img={e.img}
            />
          ))}
          title="OUR INSTRUCTOR"
          titleOf="Professional"
          titleOfmore=" instructors"
        />
      </div>
    </div>
  );
}