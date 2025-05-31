import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "aos/dist/aos.css";
import AOS from "aos";
import './IndustryLeadership.css';
import { FaChartLine, FaShieldAlt, FaMoneyCheckAlt, FaChartPie, FaTasks, FaCoins, FaHeartbeat, FaBalanceScale } from "react-icons/fa";
import tradingv from '../Assets/tradingv.png';

const IndustryLeadership = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const bootstrap = require("bootstrap");
    new bootstrap.ScrollSpy(document.body, {
      target: "#navbar-example2",
      rootMargin: "0px 0px -40%",
      smoothScroll: true,
    });
  }, []);

  return (
    <div className="bg-custom">
      <div className="industry-leadership-left" data-aos="fade-right">
        <img src={tradingv} alt="Trading Visual" />
      </div>

      <div className="scrollspy-container bg-light p-4 mt-5 rounded shadow" tabIndex="0" data-aos="fade-left">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading1" className="text-primary">
            <FaChartLine className="icon-style" /> Trading
          </h4>
        </div>
        <p>Trade with us and connect with trusted vendors effortlessly. As a reliable broker, we bridge the gap between trading companies and clients, ensuring seamless transactions. With our referral system, clients are linked to nearby trusted representatives who can discuss deals face-to-face, providing transparency and trust. We help you understand market trends and make informed decisions. Our network of multiple companies ensures that you get the best opportunities. Whether you're a client looking for a reliable trading partner or a company seeking new customers, we bring both together for smooth, profitable trade. Trust us for efficient, secure, and growth-driven business connections.</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading2" className="text-primary">
            <FaShieldAlt className="icon-style" /> Insurances
          </h4>
        </div>
        <p>Secure your future with our trusted insurance services. We offer comprehensive coverage, including health, life, and more, ensuring your peace of mind. As a reliable broker, we connect you with the best insurance providers, helping you find tailored policies that suit your needs. With our referral system, you get direct access to nearby trusted agents who can guide you through the process, answer your queries, and ensure transparency. Protect yourself and your loved ones with the right insurance plan. Whether it's health security or life coverage, we make insurance simple, reliable, and accessible. Trust us for your financial safety.</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading3" className="text-primary">
            <FaMoneyCheckAlt className="icon-style" /> Loans
          </h4>
        </div>
        <p>Get hassle-free loans with us at an efficient commission. We connect you with trusted lenders, ensuring quick approvals and transparent processes. Whether you need a personal loan, business loan, or any other financial assistance, we provide the best options tailored to your needs. Our referral system links you to nearby trusted agents who guide you through the process, making it smooth and secure. With flexible terms and competitive rates, we help you achieve your financial goals without stress. Trust us for reliable loan solutions and seamless transactions. Your financial growth starts here—apply today and get the support you need!</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading4" className="text-primary">
            <FaChartPie className="icon-style" /> Stock Market
          </h4>
        </div>
        <p>Invest smartly with our trusted stock market services. We act as a reliable bridge between traders and clients, helping you navigate the market with confidence. Our referral system connects you with nearby trusted professionals who provide insights and real-time guidance. Whether you're a beginner or an experienced investor, we ensure you get the right opportunities to grow your wealth. Stay ahead with expert advice, market analysis, and seamless transactions. Trust us to make your stock trading journey smooth, transparent, and profitable. Join us today and take your investments to the next level with confidence and reliability!</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading5" className="text-primary">
            <FaTasks className="icon-style" /> Planned Management
          </h4>
        </div>
        <p>Achieve success with our expert planned management services. We help businesses and individuals organize, strategize, and execute their goals efficiently. From financial planning to business operations, our structured approach ensures smooth and effective management. Through our referral system, we connect you with nearby trusted professionals who provide hands-on guidance and support. Whether you need resource allocation, risk assessment, or long-term strategy development, we streamline the process for maximum efficiency. Trust us to optimize your operations, enhance productivity, and drive growth. With our planned management solutions, success is not just a goal—it’s a well-executed plan. Let’s build your future today!</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h4 id="scrollspyHeading6" className="text-primary">
            <FaCoins className="icon-style" /> Digital Gold Investment
          </h4>
        </div>
        <p>Invest in digital gold with confidence through our trusted platform. We connect you with reputable trading companies, ensuring secure and seamless transactions. Digital gold offers a smart, hassle-free way to invest in precious metals without physical storage concerns. With our referral system, you gain access to nearby trusted professionals who provide expert guidance on market trends and investment strategies. Enjoy transparency, flexibility, and real-time trading opportunities. Whether you're a beginner or an experienced investor, we help you make informed decisions for long-term wealth growth. Start your digital gold investment today and secure your financial future with ease and trust!</p>
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}></div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h4 id="scrollspyHeading5" className="text-primary">
          <FaTasks className="icon-style" /> Planned Management
        </h4>
        </div>
        <p>Achieve success with our expert planned management services. We help businesses and individuals organize, strategize, and execute their goals efficiently. From financial planning to business operations, our structured approach ensures smooth and effective management. Through our referral system, we connect you with nearby trusted professionals who provide hands-on guidance and support. Whether you need resource allocation, risk assessment, or long-term strategy development, we streamline the process for maximum efficiency. Trust us to optimize your operations, enhance productivity, and drive growth. With our planned management solutions, success is not just a goal—it’s a well-executed plan. Let’s build your future today!</p>
        

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h4 id="scrollspyHeading6" className="text-primary">
          <FaCoins className="icon-style" /> Digital Gold Investment
        </h4>
        </div>
        <p>Invest in digital gold with confidence through our trusted platform. We connect you with reputable trading companies, ensuring secure and seamless transactions. Digital gold offers a smart, hassle-free way to invest in precious metals without physical storage concerns. With our referral system, you gain access to nearby trusted professionals who provide expert guidance on market trends and investment strategies. Enjoy transparency, flexibility, and real-time trading opportunities. Whether you're a beginner or an experienced investor, we help you make informed decisions for long-term wealth growth. Start your digital gold investment today and secure your financial future with ease and trust!</p>
        

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h4 id="scrollspyHeading7" className="text-primary">
          <FaHeartbeat className="icon-style" /> Health Policy
        </h4>
        </div>
        <p>Protect yourself and your loved ones with our comprehensive health policy plans. We connect you with trusted insurance providers, offering coverage for medical emergencies, hospitalizations, and long-term care. Our referral system ensures you get access to nearby trusted professionals who guide you in choosing the best policy tailored to your needs. With affordable premiums, cashless hospital networks, and seamless claim processes, we make health insurance simple and stress-free. Secure your future, reduce financial burdens, and ensure quality healthcare when you need it most. Trust us to provide the best health policy solutions for a safe and worry-free life!</p>
        

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h4 id="scrollspyHeading8" className="text-primary">
          <FaBalanceScale className="icon-style" /> Equity
        </h4>
        </div>
        <p>Maximize your wealth with our trusted equity investment services. We connect you with reputable trading companies, helping you invest in stocks and shares with confidence. Our referral system links you to nearby trusted professionals who provide expert market insights and guidance. Whether you're a beginner or an experienced investor, we ensure seamless transactions, transparent processes, and profitable opportunities. Stay ahead with real-time market analysis and strategic investment plans. Trust us to simplify your equity investments, minimize risks, and maximize returns. Start investing today and take control of your financial future with expert support and smart decisions!</p>
      </div>

    </div>
  );
};

export default IndustryLeadership;
