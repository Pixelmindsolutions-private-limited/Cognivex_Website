import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaCloud,
  FaRobot,
  FaTools,
  FaCode,
  FaShoppingCart,
} from "react-icons/fa";

const iconMap = {
  mobile: {
    Icon: FaMobileAlt,
    color: "text-blue-500",
  },
  laptop: {
    Icon: FaLaptopCode,
    color: "text-purple-500",
  },
  marketing: {
    Icon: FaBullhorn,
    color: "text-orange-500",
  },
  design: {
    Icon: FaPaintBrush,
    color: "text-pink-500",
  },
  cloud: {
    Icon: FaCloud,
    color: "text-cyan-500",
  },
  ai: {
    Icon: FaRobot,
    color: "text-emerald-500",
  },
  maintenance: {
    Icon: FaTools,
    color: "text-indigo-500",
  },
  software: {
    Icon: FaCode,
    color: "text-violet-500",
  },
  ecommerce: {
    Icon: FaShoppingCart,
    color: "text-amber-500",
  },
};

export default function ServiceIcon({ name, className = "" }) {
  const config = iconMap[name] || {
    Icon: FaLaptopCode,
    color: "text-violet-500",
  };

  const { Icon, color } = config;

  return <Icon className={`${color} ${className}`} />;
}