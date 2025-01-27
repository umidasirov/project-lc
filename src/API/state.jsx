import { Links } from "react-router-dom"
import HomePage from "../components/Pages/HomePage"

const base = {
    priorityData: [{
          iconPriority: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697"
                stroke="#098CE9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          ),
          priorityTitle: "Short courses",
          priorityText:
            "Acquire new abilities at your own pace with our flexible online courses.",
        },
        {
          iconPriority: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697"
                stroke="#098CE9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          ),
          priorityTitle: "Short courses",
          priorityText:
            "Acquire new abilities at your own pace with our flexible online courses.",
        },
        {
          iconPriority: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 28H1.33334V10.6667M30.6667 16V10.6667M30.6667 10.6667V2.66669H1.33334V10.6667M30.6667 10.6667H1.33334M5.33334 6.66669H5.46668M9.33334 6.66669H9.46668M13.3333 6.66669H13.4667M18.6667 20.9697L23.3333 22.6667L28 20.9697M18.6667 20.9697L16 20L23.3333 16L30.6667 20L28 20.9697M18.6667 20.9697V25.3334L23.3333 28L28 25.3334V20.9697"
                stroke="#098CE9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          ),
          priorityTitle: "Short courses",
          priorityText:"Acquire new abilities at your own pace with our flexible online courses.",}
    ],
    partnersData:[
        {
          brand:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-05.png",
        },
        {
          brand:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-01.png",
        },
        {
          brand:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-02.png",
        },
        {
          brand:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-03.png",
        },
        {
          brand:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/07/partner-04.png",
        },
    ],
    courses: [
        {
          description: "Introduction LearnPress – LMS plugin",
          cost: "free",
          for: "Beginner",
          nStudents: 320,
          lessons: 15,
          category: "Health",
          img: "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png",
        },
        {
          description: "Introduction LearnPress – LMS plugin",
          cost: "free",
          for: "Beginner",
          nStudents: 320,
          lessons: 15,
          category: "IT",
          img: "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/11/create-an-lms-website-with-learnpress-4-666x450.png",
        },
        {
          description: "Introduction LearnPress – LMS plugin",
          cost: "free",
          for: "Beginner",
          nStudents: 320,
          lessons: 15,
          category: "IT",
          img: "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png",
        },
        {
          description: "Introduction LearnPress – LMS plugin",
          cost: 12,
          for: "Beginner",
          nStudents: 320,
          lessons: 15,
          category: "IT",
          img: "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2022/12/Introduction-learnpress-lms-plugin-4-666x450.png",
        },
    ],
    categories: [
        {
          title: "IT",
          link: "/it",
        },
        {
          title: "Design",
          link: "/design",
        },
        {
          title: "Developer",
          link: "/developer",
        },
        {
          title: "Health",
          link: "/health",
        },
        {
          title: "Business",
          link: "/business",
        },
        {
          title: "Marketing",
          link: "/marketing",
        },
        {
          title: "Photography",
          link: "/photography",
        },
        {
          title: "Teaching Online",
          link: "/teaching-online",
        },
        {
          title: "Technology",
          link: "/technology",
        },
    ],
    packages: [
        {
          urlImg:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/package-02.jpg",
          courses: "3 Courses Included",
          coursesDescription: "Master Your Mindset: Unleashing the Power Within",
          originalCost: 105,
          cost: 103,
        },
        {
          urlImg:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/package-04.jpg",
          courses: "4 Courses Included",
          coursesDescription:
            "From Zero to Hero: The Ultimate Entrepreneurial Blueprint",
          originalCost: 184,
          cost: 147,
        },
        {
          urlImg:
            "https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/package-03.jpg",
          courses: "5 Courses Included",
          coursesDescription:
            "Holistic Wellness: Nourish Your Body, Mind, and Soul",
          originalCost: 235,
          cost: 255,
        },
    ],
    AccordionList: [
        {
          title: "Learn at your own pace",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Learn from the best professionals",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Share knowledge and ideas",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Connect with a global creative community",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ],
    reslt: [
        {
          number: 58.6,
          percent: false,
          about: "Student enrolled",
          color: "green",
        },
        {
          number: 38.6,
          percent: false,
          about: "Class completed",
          color: "blue",
        },
        {
          number: 98.9,
          percent: true,
          about: "Satisfaction rate",
          color: "yelow",
        },
        {
          number: 236,
          percent: false,
          about: "Top instructors",
          color: "pink",
        },
    ],
    instructors: [
        {
          name:"Ambar Allison",
          img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/co-instructor-03.jpg",
          students:3,
          course:1,
          link:"/instructors/drake-taylor"
        },
        {
          name:"Drake Taylor",
          img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/co-instructor-06.jpg",
          students:3,
          course:1,
          link:"/instructors/drake-taylor"
        },
        {
          name:"Baldric Maris",
          img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/co-instructor-02.jpg",
          students:3,
          course:1,
          link:"/instructors/drake-taylor"
        },
        {
          name:"Bernice Bernard",
          img:"https://eduma.thimpress.com/demo-online-learning/wp-content/uploads/sites/104/2024/10/co-instructor-01.jpg",
          students:44,
          course:3,
          link:"/instructors/drake-taylor"
        },
    ],
    Links:[
      {
        title:"About Us",
        link:"/about-us"
      },
      {
        title:"About Us",
        link:"/about-us"
      },
      {
        title:"About Us",
        link:"/about-us"
      },
      {
        title:"About Us",
        link:"/about-us"
      },
      {
        title:"About Us",
        link:"/about-us"
      },
      {
        title:"About Us",
        link:"/about-us"
      },
    ]
}
export default base