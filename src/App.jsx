import { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import Contetn from "./components/mainContent/Contetn";
import Priority from "./components/Priority/Priority";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Partners from "./components/TitleBrands/Partners";
import Button from "./components/other/Button";
import Titles from "./components/Titles/Title";
import Courses from "./components/Courses/Courses";
import Category from "./components/CourseCategories/Category";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: false, // Анимация проигрывается только один раз
    });
  }, []);
  const priorityData = [
  {
    iconPriority: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697" stroke="#098CE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    priorityTitle: "Short courses",
    priorityText: "Acquire new abilities at your own pace with our flexible online courses."
  },
  {
    iconPriority: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697" stroke="#098CE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    priorityTitle: "Short courses",
    priorityText: "Acquire new abilities at your own pace with our flexible online courses."
  },
  {
    iconPriority: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697" stroke="#098CE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    priorityTitle: "Short courses",
    priorityText: "Acquire new abilities at your own pace with our flexible online courses."
  },
]
const partnersData = [
  {
    brand:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-05.png"
  },
  {
    brand:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-01.png"
  },
  {
    brand:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-02.png"
  },
  {
    brand:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-03.png"
  },
  {
    brand:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-04.png"
  }
]
const courses = [
  {
    description: "Introduction LearnPress – LMS plugin",
    cost:"free",
    for:"Beginner",
    nStudents:320,
    lessons:15,
    category:"Health",
    img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png"
  },
  {
    description: "Introduction LearnPress – LMS plugin",
    cost:"free",
    for:"Beginner",
    nStudents:320,
    lessons:15,
    category:"IT",
    img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/11/create-an-lms-website-with-learnpress-4-666x450.png"
  },
  {
    description: "Introduction LearnPress – LMS plugin",
    cost:"free",
    for:"Beginner",
    nStudents:320,
    lessons:15,
    category:"IT",
    img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png"
  },
  {
    description: "Introduction LearnPress – LMS plugin",
    cost:12,
    for:"Beginner",
    nStudents:320,
    lessons:15,
    category:"IT",
    img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png"
  },
]
const categories = [
  {
    title: "IT",
    link:"/it"
  },
  {
    title: "Design",
    link:"/design"
  },
  {
    title: "Developer",
    link:"/developer"
  },
  {
    title: "Health",
    link:"/health"
  },
  {
    title: "Business",
    link:"/business"
  },
  {
    title: "Marketing",
    link:"/marketing"
  },
  {
    title: "Photography",
    link:"/photography"
  },
  {
    title: "Teaching Online",
    link:"/teaching-online"
  },
  {
    title: "Technology",
    link:"/technology"
  },
]
  return (
    <BrowserRouter>
      <Nav />
      <Contetn />
      <div className="priority">
        <div className="container-all priority-title">
          {priorityData.map((item, index) => <Priority key={index} iconPriority={item.iconPriority} priorityTitle={item.priorityTitle} priorityText={item.priorityText} />)}
        </div>
      </div>
      <div className="partner">
        <Partners brands={partnersData}/>
      </div>
      <div className="courses">
        <Titles title='OUR COURSES' titleOf='Explore top' titleOfmore='courses' components={<Courses data={courses}/>}/>
      </div>
      <div className="courses-categories" data-aos="fade-up" data-aos-duration="30000">
        <Titles title='CHOOSE FROM ANY THESE' titleOf='Courses' titleOfmore='categories' components={<Category data={categories}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
