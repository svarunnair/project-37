
import './projects.css';
import Project from "./Project/Project"

import { motion } from "framer-motion";

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


export default function Projects() {
  

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    variants={projectsTitle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    
                >
                    Projects
                </motion.h2>

                {
                    // <LoadingAnimation /> 
                        <div className="project-list">
                          <Project/>
                        </div>
                }
            </div>
        </section>
    )
}