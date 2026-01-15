import baliImg from "@/assets/destinations/bali.jpg";
import santoriniImg from "@/assets/destinations/santorini.jpg";
import maldivesImg from "@/assets/destinations/maldives.jpg";
import swissAlpsImg from "@/assets/destinations/swiss-alps.jpg";

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    location: "Indonesia",
    description: "Tropical paradise with stunning beaches",
    duration: "7 Days",
    price: 899,
    image: baliImg,
  },
  {
    id: "santorini",
    name: "Santorini",
    location: "Greece",
    description: "Iconic white-washed villages and sunsets",
    duration: "6 Days",
    price: 1299,
    image: santoriniImg,
  },
  {
    id: "maldives",
    name: "Maldives",
    location: "",
    description: "Luxury overwater bungalows and crystal waters",
    duration: "5 Days",
    price: 1899,
    image: maldivesImg,
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    location: "",
    description: "Majestic mountains and alpine adventures",
    duration: "8 Days",
    price: 2199,
    image: swissAlpsImg,
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "flight-change",
    icon: "RotateCw",
    title: "Flight Change Assistance",
    description: "Get expert help to modify your flight bookings and find the best alternatives for your needs.",
  },
  {
    id: "cancellation-refund",
    icon: "DollarSign",
    title: "Flight Cancellation Refund Guidance",
    description: "Navigate cancellation policies and maximize your refunds with our dedicated support team.",
  },
  {
    id: "urgent-support",
    icon: "AlertCircle",
    title: "Urgent Travel Support",
    description: "24/7 emergency assistance for travel disruptions, delays, and unexpected situations.",
  },
  {
    id: "travel-enquiries",
    icon: "HelpCircle",
    title: "Clientele Travel Enquiries",
    description: "Personalized consultation for all your travel questions and custom trip planning.",
  },
];
