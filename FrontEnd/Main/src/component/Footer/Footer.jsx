// The FOOTER of UbuntuFlow wweb application

import React, { useState } from 'react';

// The main App component containing the footer
const App = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // In a real application, you would handle the subscription logic here,
    // like sending the email to a server.
    alert(`Subscribing with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="ubuntuflow-footer-container">
      <style jsx="true">{`
        .ubuntuflow-footer-container {
          background-color: #f7e7e9;
          font-family: 'Playfair Display', serif; /* Use a serif font for a classic look */
          color: #333;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Subscription section styling */
        .subscription-section {
          margin-bottom: 2rem;
          max-width: 400px;
          width: 100%;
        }

        .subscription-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-decoration: underline;
        }

        .subscription-form {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .email-input {
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          flex-grow: 1;
          min-width: 200px;
        }

        .subscribe-button {
          background-color: #000;
          color: #fff;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .subscribe-button:hover {
          background-color: #333;
        }

        /* Contact and address section styling */
        .contact-section {
          margin-bottom: 2rem;
          text-align: left;
          max-width: 600px;
          width: 100%;
        }

        .contact-section p {
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }
        
        .contact-section strong {
          font-size: 1.2rem;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        
        .contact-section .contact-info {
            font-size: 1rem;
        }
        
        /* Divider line */
        .divider {
          width: 100%;
          max-width: 600px;
          border: 0;
          height: 1px;
          background-color: #333;
          margin: 2rem 0;
        }

        /* Social media section styling */
        .social-media-section {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .social-media-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #333;
          text-decoration: none;
          font-size: 1.2rem;
        }
        
        .social-media-item svg {
          width: 24px;
          height: 24px;
        }
      `}</style>
      
      <div className="subscription-section">
        <h3>Want to know what we are up to ?</h3>
        <div className="subscription-form">
          <input
            type="email"
            placeholder="Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          <button onClick={handleSubscribe} className="subscribe-button">
            Subscribe
          </button>
        </div>
      </div>
      
      <div className="contact-section">
        <p>
          <strong>ADDRESS :</strong> Gauteng, Johannesbrug, University of Johannesburg(APK)
        </p>
        <p>
          <strong>CONTACT:</strong> <span className="contact-info">support@ubuntu-flow.com | +27824822611</span>
        </p>
      </div>
      
      <hr className="divider" />
      
      <div className="social-media-section">
        <a href="#" className="social-media-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9904 1.9961H7.01C4.808 1.9961 3.0194 3.7847 3.0194 5.9867V16.0124C3.0194 18.2144 4.808 19.9981 7.01 19.9981H16.9904C19.1924 19.9981 20.981 18.2144 20.981 16.0124V5.9867C20.981 3.7847 19.1924 1.9961 16.9904 1.9961ZM18.9904 16.0124C18.9904 17.1169 18.1009 18.0064 16.9904 18.0064H7.01C5.8995 18.0064 5.01 17.1169 5.01 16.0124V5.9867C5.01 4.8762 5.8995 3.9961 7.01 3.9961H16.9904C18.1009 3.9961 18.9904 4.8762 18.9904 5.9867V16.0124Z" fill="currentColor"/>
                <path d="M12.0002 8.0051C9.7982 8.0051 7.9997 9.7937 7.9997 12.0001C7.9997 14.2021 9.7982 15.9907 12.0002 15.9907C14.2022 15.9907 15.9907 14.2021 15.9907 12.0001C15.9907 9.7937 14.2022 8.0051 12.0002 8.0051ZM12.0002 14.0041C10.8957 14.0041 10.0062 13.1146 10.0062 12.0001C10.0062 10.8856 10.8957 10.0001 12.0002 10.0001C13.1147 10.0001 14.0042 10.8856 14.0042 12.0001C14.0042 13.1146 13.1147 14.0041 12.0002 14.0041Z" fill="currentColor"/>
                <path d="M17.0003 5.0001C16.4474 5.0001 16.0002 4.5529 16.0002 4.0001C16.0002 3.4473 16.4474 3.0001 17.0003 3.0001C17.5531 3.0001 18.0003 3.4473 18.0003 4.0001C18.0003 4.5529 17.5531 5.0001 17.0003 5.0001Z" fill="currentColor"/>
            </svg>
          Facebook
        </a>
        <a href="#" className="social-media-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0002 2C6.4862 2 2 6.4862 2 12.0002C2 17.5142 6.4862 22.0002 12.0002 22.0002C17.5142 22.0002 22.0002 17.5142 22.0002 12.0002C22.0002 6.4862 17.5142 2 12.0002 2ZM17.0002 9.0002C17.0002 9.2762 16.7762 9.5002 16.5002 9.5002H8.5002C8.2242 9.5002 8.0002 9.2762 8.0002 9.0002V8.0002C8.0002 7.7242 8.2242 7.5002 8.5002 7.5002H16.5002C16.7762 7.5002 17.0002 7.7242 17.0002 8.0002V9.0002ZM17.0002 13.0002C17.0002 13.2762 16.7762 13.5002 16.5002 13.5002H8.5002C8.2242 13.5002 8.0002 13.2762 8.0002 13.0002V12.0002C8.0002 11.7242 8.2242 11.5002 8.5002 11.5002H16.5002C16.7762 11.5002 17.0002 11.7242 17.0002 12.0002V13.0002ZM17.0002 17.0002C17.0002 17.2762 16.7762 17.5002 16.5002 17.5002H8.5002C8.2242 17.5002 8.0002 17.2762 8.0002 17.0002V16.0002C8.0002 15.7242 8.2242 15.5002 8.5002 15.5002H16.5002C16.7762 15.5002 17.0002 15.7242 17.0002 16.0002V17.0002Z" fill="currentColor"/>
            </svg>
          Instagram
        </a>
        <a href="#" className="social-media-item">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.941 6.0094C20.219 6.3079 19.467 6.4952 18.7045 6.5746C19.5395 6.0821 20.1805 5.292 20.4855 4.3414C19.7045 4.8119 18.847 5.143 17.9485 5.311C17.2045 4.5422 16.166 4.0722 15.0195 4.0722C12.7535 4.0722 10.916 5.9221 10.916 8.2042C10.916 8.5303 10.9575 8.8504 11.0285 9.1627C8.1635 9.0204 5.568 7.5518 3.821 5.3499C3.521 5.8606 3.344 6.4526 3.344 7.0768C3.344 8.5303 4.098 9.7901 5.241 10.5133C4.568 10.4965 3.918 10.3182 3.3395 10.0152C3.3395 10.0298 3.3395 10.0445 3.3395 10.0592C3.3395 12.0628 4.7435 13.7196 6.6435 14.0934C6.2745 14.1953 5.8825 14.2492 5.4805 14.2492C5.201 14.2492 4.935 14.2238 4.673 14.1729C5.1955 15.8297 6.741 17.0655 8.5995 17.0984C7.1555 18.2323 5.294 18.8953 3.3105 18.8953C2.969 18.8953 2.6285 18.8785 2.296 18.8385C4.2475 20.0883 6.5405 20.8035 9.0065 20.8035C15.0145 20.8035 18.3755 15.8569 18.3755 11.5173C18.3755 11.3653 18.3705 11.2158 18.3615 11.0664C19.0115 10.6093 19.6015 10.0683 20.1265 9.4678C19.5315 9.7212 18.8895 9.8829 18.2245 9.9572C18.9195 9.5445 19.4615 8.872 19.7215 8.0829C19.0885 8.4615 18.397 8.7297 17.6745 8.8688C17.0505 8.2104 16.2725 7.7818 15.3975 7.6258" fill="currentColor"/>
            </svg>
          Twitter
        </a>
      </div>
    </div>
  );
};

export default App;