import "./project.css"
import { motion } from "framer-motion";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
// import {rado} from './Project/Proyects/Hero'
import rado from './rado.png'
// animation for framer motion
const project = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: 1,
            ease: "easeOut"
        }
    }
}

export default function Project() {



    

    return (
        <>
        <motion.div
          
            variants={project}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="project"
            id="project"
        >
            <div className="image">
                <a href="https://github.com/svarunnair/project-35" target="_blank" rel="noopener noreferrer">
                    <motion.img
                        whileHover={{ scale: 1.4 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 120
                        }}
                        src="http://cdn.luxuo.com/2010/09/zara-online-store.jpg" alt="Project"
                    />
                </a>
            </div>

            <div className="text">
                <h3><a href="https://zara-clone-web.netlify.app/" target="_blank" rel="noopener noreferrer">Zara-Clone - Website</a>  </h3>
                <h3><a href="https://zara-clone-web.netlify.app/" target="_blank" rel="noopener noreferrer">View Website</a>  </h3>
                <h3> <a href="https://github.com/svarunnair/project-35" target="_blank" rel="noopener noreferrer" >
                       
                        <SiGithub/>    Code
                   
                      
                    </a></h3>
                <h5><strong>HTML-JavaScript-Css</strong></h5>
                
                <p>Zara Clone is the project I did during the second unit, it was the main project for the same unit and I have used JavaScript, HTML, and CSS to complete the project. I did the project myself and the project is entirely functional.</p>
            </div>
        </motion.div>
         <motion.div
          
         variants={project}
         viewport={{ once: true }}
         initial="hidden"
         whileInView="visible"
         className="project"
         id="project"
     >
         <div className="image">
             <a href="https://github.com/svarunnair/Project33" target="_blank" rel="noopener noreferrer">
                 <motion.img
                     whileHover={{ scale: 1.4 }}
                     transition={{
                         type: "spring",
                         damping: 25,
                         stiffness: 120
                     }}
                     src={rado} alt="Project"
                 />
             </a>
         </div>

         <div className="text">
             <h3> <a  href="https://rado-clone-web.netlify.app/" target="_blank" rel="noopener noreferrer" >Rado-clone - Website</a> </h3>
             <h3> <a  href="https://rado-clone-web.netlify.app/" target="_blank" rel="noopener noreferrer" >View Website</a> </h3>
             <h3> <a href="https://github.com/svarunnair/Project33" target="_blank" rel="noopener noreferrer" >
                       
                       <SiGithub/>    Code
                  
                     
                   </a></h3>
             <h5><strong>HTML-JavaScript-Css</strong></h5>
             <p>Rado Clone is the project I did during the third unit, it was the main project for the same unit and I have used JavaScript, HTML, and CSS to complete the project. I did the project myself and the project is entirely functional.</p>
         </div>
     </motion.div>
      {/* <motion.div
          
      variants={project}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className="project"
      id="project"
  >
      <div className="image">
          <a href="https://github.com/Divya3419/Ideakart-clone" target="_blank" rel="noopener noreferrer">
              <motion.img
                  whileHover={{ scale: 1.4 }}
                  transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 120
                  }}
                  src="https://s3.eu-west-3.amazonaws.com/xranks/ideakart.com-a3b6bb01df67a4a0f8c445db3ef714430ca218fdc1975c0d704dd69d3f822581.jpg" alt="Project"
              />
          </a>
      </div>

      <div className="text">
          <h3><a href="https://stupendous-cajeta-bbcb82.netlify.app/" target="_blank" rel="noopener noreferrer">IdealKart - Website</a></h3>
          <h3><a href="https://stupendous-cajeta-bbcb82.netlify.app/" target="_blank" rel="noopener noreferrer">View Website</a></h3>
          <h3> <a href="https://github.com/Divya3419/Ideakart-clone" target="_blank" rel="noopener noreferrer" >
                       
                       <SiGithub/>    Code
                  
                     
                   </a></h3>
          <h5><strong>React - Css</strong></h5>
          <p>Ideakart is the project I did during the fourth unit, it was the main project for the same unit and I have used React, HTML, and CSS to complete the project. A team of 5 members did it and the project is entirely functional.</p>
      </div>
  </motion.div> */}
  </>
    )
}