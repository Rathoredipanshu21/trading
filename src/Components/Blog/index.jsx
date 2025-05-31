import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css'; // Import the CSS file

const data = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Equity Investment',
    description: 'Equity investment involves purchasing shares of a company, giving investors partial ownership. This is a popular way to build wealth as stock prices appreciate over time. Investing in equities can provide substantial returns, but it also carries risks due to market fluctuations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Stock Market Trading',
    description: 'Stock trading involves buying and selling stocks in the market with the aim of making profits. Traders can engage in intraday trading, short-term investments, or long-term holdings. Successful trading requires knowledge of market trends, stock analysis, and risk management strategies.'
  },
  {
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Health Insurance Policies',
    description: 'Health insurance provides financial protection against medical expenses. Policies cover hospitalization, surgeries, and critical illnesses, reducing the financial burden of medical emergencies. Choosing the right policy ensures you and your family receive quality healthcare without financial stress'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: 'Life Insurance Plans',
    description: 'Life insurance is designed to provide financial security to your family in case of your untimely demise. There are various plans such as term life insurance, whole life insurance, and endowment plans. Life insurance also serves as a tool for long-term savings and investment.'
  },
  {
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdXJhbmNlfGVufDB8fDB8fHww',
    title: ' Personal & Business Loans',
    description: 'Loans help individuals and businesses meet financial needs, such as buying a home, funding education, or expanding a business. Different types of loans include personal loans, home loans, business loans, and vehicle loans. Understanding interest rates and repayment terms is crucial before taking a loan.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Wealth Management',
    description: 'Wealth management is a financial advisory service that helps individuals manage their assets and investments efficiently. It includes investment planning, tax management, retirement planning, and estate planning. A wealth manager provides tailored financial strategies to help clients achieve their financial goals.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664908512996-498c7f395e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Mutual Fund Management',
    description: 'Mutual funds pool money from multiple investors to invest in diversified portfolios, including equities, bonds, and other securities. Professional fund managers handle investments to maximize returns. Mutual funds are an excellent option for those who want market exposure without directly trading stocks.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Digital Gold Investment',
    description: 'Digital gold allows investors to buy and own gold in electronic form without physically storing it. This modern investment method is secure and provides liquidity, making it a great alternative to physical gold. Investors can buy or sell digital gold through online platforms at real-time market prices.'
  },
  {
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Finance Management',
    description: 'Finance management involves planning, organizing, directing, and controlling financial activities such as procurement and utilization of funds.'
  },
  

];

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <div className="services-offer" style={{ background: "#E8F5E9" }}>
  <h1 style={{ textAlign: "center", textTransform: "uppercase", paddingTop: "10px" }}>
    Services We Offer
  </h1>
  <p style={{textAlign:'center',width:'60%',margin:'2px auto'}}>Secure your financial future with expert investment strategies! From stock trading and equity investments to life insurance and digital gold, we offer tailored solutions for wealth growth, risk management, and financial stability. Start investing today for a brighter tomorrow!</p>
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