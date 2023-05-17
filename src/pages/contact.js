export default function Contact() {
  return (
    <>
      <style jsx>{`
      .contact-container {
        padding: 2rem 0 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        }

        @media screen and (max-width: 768px) {
        .contact-container {
            width: 100%;
        }
        }

        .contact-container h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        }

        .contact-container p {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
        text-align: center;
        }

        .contact-container {
          margin: 2rem;
        }
        
        .contact-container h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .contact-container p {
          margin-bottom: 1.5rem;
        }
        
        .nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          text-decoration: none;
          background-color: #F28705;
          color: #1D1E20;
        }
        
        .nav-btn:hover {
          background-color: #DADADB;
        }
      `}
      </style>  
      <div className="contact-container">
        <h2>Get In Touch With Me</h2>
        <p>If you are interested in collaborating, have any inquiries, or simply want to get in touch, I am readily available. Feel free to reach out, and I will promptly respond.</p>
        <a href="mailto:silvano.n92@gmail.com" className="nav-btn">
          <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
          Say Hello via Email
        </a>
        <a href="tel:0789766337" className="nav-btn">
          <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
          Call Me at 0789676337
        </a>
      </div>
    </>
  );
}
