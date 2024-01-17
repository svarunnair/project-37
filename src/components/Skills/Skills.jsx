import "./skills.css";
// import Button from "../Button/Button";
// import { SiMinutemailer } from "react-icons/si";
// import { motion } from "framer-motion";
// import LaptopAnimation from "../LaptopAnimation/LaptopAnimation";
import SkillBar from 'react-skillbars';

const skills = [

  {type: "Javascript", level: 95},
  {type: "Css", level: 95},
  {type: "HTML", level: 95},
  {type: "React", level: 95},
  {type: "Native", level: 95},
  {type: "Type Script", level: 90},
  {type: "Redux", level: 95},
  {type: "Chakra Ui", level: 90},
  
  
];

const colors = {
  bar: 'grey',
  title: {
    text: 'red',
    background: 'white',
    

  },
 
}

const projectsTitle = {
   
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .8,
            duration: 1,
           
        }
    }
    
}


// const title = {
//     hidden: {
//         scale: 1.2
//     },
//     visible: {
//         scale: 1,
//         transition: {
//             duration: 1,
//             ease: "easeOut"
//         }
//     }
// }

// const text = {
//     hidden: {
//         opacity: 0,
//         y: -10
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//             ease: "easeOut"
//         }
//     }
// }

export default function Skills() {
    return (
        <section id="skills" className="hero-section">
          
            <h2 className="skillText"
                    variants={projectsTitle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                   Skills
                </h2>
            <div className="skillBar">
            <SkillBar skills={skills} height="40px" colors={colors} />
            </div>
        </section>
     
    )
}