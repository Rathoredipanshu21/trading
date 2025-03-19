import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css'; // Import the CSS file

const data = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664908512996-498c7f395e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Health Insurance',
    description: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured.'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Life Insurance',
    description: 'Life insurance is a contract between an insurer and a policyholder in which the insurer guarantees payment of a death benefit to named beneficiaries.'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },

];

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="hero-section">
        <img src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-screensaver_52683-33640.jpg?t=st=1742327121~exp=1742330721~hmac=0bb91d26876087f8f438f58be17af3426da80e94a4444477db250f94c8deb373&w=1380" alt="Financial or Insurance" />
        <div className="hero-content">
          <h1>Financial and Insurance Insights</h1>
          <p>Stay updated with the latest trends and insights in the financial and insurance sectors.</p>
        </div>
      </div>
      <div className="grid-container">
        {data.map((item, index) => (
          <div key={index} className="grid-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;