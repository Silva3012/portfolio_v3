import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

// Home/Hero section
export default function Home() {

  return (
    <div className="hero-container">
      <Image src='/images/Ntsika_img.png' className="profile-img" width={300} height={300} alt="Ntsika_img" />
      <div className="hero-text">
        <h1>Hey, I'm Ntsika 👋</h1>
        <p>
          I'm a Full Stack Web Developer based in Johannesburg, South Africa. I build websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/SilvaBeatzSA"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Silva3012"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ntsika-silvano-a66863106/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
