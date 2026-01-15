import { RotateCw, DollarSign, AlertCircle, HelpCircle } from "lucide-react";
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

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
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
    location: "Maldives",
    description: "Luxury overwater bungalows and crystal waters",
    duration: "5 Days",
    price: 1899,
    image: maldivesImg,
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    location: "Switzerland",
    description: "Majestic mountains and alpine adventures",
    duration: "8 Days",
    price: 2199,
    image: swissAlpsImg,
  },
];

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

const iconMap: Record<string, any> = {
  RotateCw,
  DollarSign,
  AlertCircle,
  HelpCircle,
};

const Services = () => {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive travel support to ensure your journey is smooth and worry-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;