import "./hero.css";
// import Button from "../Button/Button";
// import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import LaptopAnimation from "../LaptopAnimation/LaptopAnimation";
import image from "./varun.jpg.jpg"
const title = {
    hidden: {
        scale: 1.2
    },
    visible: {
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

const text = {
    hidden: {
        opacity: 0,
        y: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="fluid-container">
                <div className="image">
                    <LaptopAnimation />
                </div>

                <div className="text">
                    <div className="title">
                        <motion.h2
                            variants={text}
                            initial="hidden"
                            animate="visible"
                        >
                            Front-End Developer
                        </motion.h2>

                        <motion.h1
                            variants={title}
                            initial="hidden"
                            animate="visible"
                            
                        >
                           VARUN S NAIR
                        </motion.h1>
                        <motion.img className="img"
                        
                        whileHover={{ scale: 1.08 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 120
                        }}
                        src={image} alt="avtar"
                    />
                        <div className="image">


                    <h2 className="aboutText"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    id="about"
                >
                   About
                </h2>
                <a href="a" >

               




                    
                </a>
            </div>
                        <h4 className="text4"
                            
                            initial="hidden"
                            animate="visible">
Gaming and computers have always fascinated me since my childhood. Then I learned about Photoshop Premium Pro and other editing software, and I have also tried a few editing.

When I joined Mechanical Engineering I was more interested in learning AutoCAD, and Solid Edge and have used them to modify items. I grew more inquisitive to know more about that.

Then I realized that I'm more interested in computer software and I feel like I'm a quick learner.<br/>

During lockdown time I came to know about Masai School and I have joined Masai School.<br/>
I do have one and half years of experience in Reliance General Insurance as Technical Supporter<br/>

Besides coding I also love Driving, playing cricket, and Reading.<br/>

Toolkits: Html, CSS, JavaScript, React, Node Js, GIt/Github, MS Office.
                        </h4>

              
                    </div>


                    <div className="call-to-action">
                        {/* <Button
                            link="mailto:arunrajshanker6@gmail.com"
                            text="Contact"
                            type="btn-color"
                            icon={<SiMinutemailer />}
                        /> */}

                    </div>
                </div>
            </div>
        </section>

    )
}