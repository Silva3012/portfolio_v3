import Skills from "@/components/Skills"
import Image from "next/image"
import Link from "next/link";

export default function About(){
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I am a full stack web developer with expertise in a wide range of technologies and programming languages.
            I possess strong skills in HTML, CSS, and JavaScript, which are essential for front-end development. 
            I am proficient in utilizing React, a popular front-end framework, to create dynamic and interactive user interfaces. 
            On the back-end, I have extensive experience with Node.js and some PHP, enabling me to handle server-side development effectively.
          </p>
          <p>
            In terms of databases, I am well-versed in working with MySQL and MongoDB, allowing me to manage complex data structures efficiently. 
            Additionally, I have experience developing and consuming RESTful APIs, facilitating seamless integration of various services. 
            As a full stack web developer, I possess the skills necessary to handle both the client-side and server-side aspects of web development, providing end-to-end solutions for web applications.
            I have also recently graduated from <Link href="https://www.hyperiondev.com/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              Hyperion Dev Bootcamp.
            </a>
          </Link>
          </p>
          <p>
            I am dedicated to staying updated with the latest advancements in the field and continually expanding my skill set to deliver high-quality and scalable web solutions. 
            My passion for full stack web development, combined with my expertise in various technologies, enables me to create robust and engaging web applications that meet the needs and expectations of clients and users.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/javascript_image.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
      <Skills />
    </div>
  )
}