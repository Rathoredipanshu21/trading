import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './learn.css'; // Import the CSS file

const data = [
  {
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    video: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  {
    video: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
    title: 'Investment Strategies',
    description: 'Learn about effective investment strategies to grow your wealth and secure your financial future.'
  },
  {
    video: 'https://www.youtube.com/embed/9bZkp7q19f0',
    title: 'Retirement Planning',
    description: 'Understand the importance of retirement planning and how to prepare for a comfortable retirement.'
  },
  {
    video: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
    title: 'Tax Management',
    description: 'Explore tips and strategies for effective tax management and compliance.'
  },{
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    video: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  {
    video: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
    title: 'Investment Strategies',
    description: 'Learn about effective investment strategies to grow your wealth and secure your financial future.'
  },
  {
    video: 'https://www.youtube.com/embed/9bZkp7q19f0',
    title: 'Retirement Planning',
    description: 'Understand the importance of retirement planning and how to prepare for a comfortable retirement.'
  },
  {
    video: 'https://www.youtube.com/embed/ZZ5LpwO-An4',
    title: 'Tax Management',
    description: 'Explore tips and strategies for effective tax management and compliance.'
  }
];

const Learn = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="hero-section">
        <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhcm58ZW58MHx8MHx8fDA%3D" alt="Financial or Insurance" />
       
      </div>
      <div className="grid-container">
        {data.map((item, index) => (
          <div key={index} className="grid-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <iframe 
              width="100%" 
              height="200" 
              src={item.video} 
              title={item.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;


