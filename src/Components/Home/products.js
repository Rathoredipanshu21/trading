import { faHome, faBriefcase, faCar, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "Loan for Home",
    description: "Get a hassle-free home loan at low interest rates.",
    icon: faHome,
    link: "/home-loan",
    bgColor: "#a8e6cf",
  },
  {
    id: 2,
    title: "Business Growth",
    description: "Expand your business with our flexible loan options.",
    icon: faBriefcase,
    link: "/business-loan",
    bgColor: "#dcedc1",
  },
  {
    id: 3,
    title: "Car Loan",
    description: "Drive your dream car with easy EMI options.",
    icon: faCar,
    link: "/car-loan",
    bgColor: "#ffd3b6",
  },
  {
    id: 4,
    title: "Education Loan",
    description: "Fund your higher education with our affordable loans.",
    icon: faGraduationCap,
    link: "/education-loan",
    bgColor: "#ffaaa5",
  },
];

export default products;
