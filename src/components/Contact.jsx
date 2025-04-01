"use client";

import { useState, useEffect, useRef } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4, 
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-black text-white overflow-hidden"
      id="contact"
    >
      <div className="max-w-5xl mx-auto perspective-1500 transform-style-3d relative">
      
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-pulse-slow pointer-events-none"></div>

        <div className="text-center mb-12 animate-fade-in animation-delay-400 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up animation-delay-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto transform transition-all duration-500 hover:scale-150 hover:rotate-12 rounded-full glow-effect"></div>
          <p className="text-gray-300 max-w-2xl mx-auto animate-text-in animation-delay-800">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my social media channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transform rotate-x-6 rotate-y-4 translate-z-20 bg-gradient-to-br from-gray-950/90 to-black/95 p-10 rounded-2xl shadow-3xl border border-purple-500/30 relative z-10">
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-x-10 hover:rotate-y-10 animate-card-in animation-delay-800 border border-purple-600/20 glow-card">
            <h3 className="text-2xl font-bold mb-6 animate-slide-up animation-delay-1000 text-cyan-300 tracking-wide">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start animate-text-in animation-delay-1200">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3 glow-icon">✉️</span>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">dhanvin.vadlamudi269@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start animate-text-in animation-delay-1300">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3 glow-icon">📞</span>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-300">77*********</p>
                </div>
              </div>
              <div className="flex items-start animate-text-in animation-delay-1400">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3 glow-icon">📍</span>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">Hyderabad || Delhi</p>
                </div>
              </div>
            </div>
            <div className="mt-8 animate-text-in animation-delay-1500">
              <h4 className="font-medium mb-3 text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dhanvin1520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img src="/images/github-icon.png" alt="GitHub" className="h-6 w-6 inline-block glow-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanvin-vadlamudi-365614318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img src="/images/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6 inline-block glow-icon" />
                </a>
                <a
                  href="https://www.instagram.com/dhanvin_1520/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img src="/images/instagram-icon.png" alt="Instagram" className="h-6 w-6 inline-block glow-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-x-10 hover:rotate-y-10 animate-card-in animation-delay-900 border border-cyan-600/20 glow-card">
            <h3 className="text-2xl font-bold mb-6 animate-slide-up animation-delay-1100 text-purple-300 tracking-wide">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-text-in animation-delay-1200">
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="animate-text-in animation-delay-1300">
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="animate-text-in animation-delay-1400">
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors animate-text-in animation-delay-1500"
              >
                <span className="w-4 h-4 mr-2 inline-block glow-icon">✉️</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <style jsx>{`
        .perspective-1500 {
          perspective: 1500px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .translate-z-20 {
          transform: translateZ(20px);
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(147, 51, 234, 0.2);
        }

        .glow-effect {
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.7), 0 0 20px rgba(6, 182, 212, 0.5);
        }

        .glow-card {
          box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
        }

        .glow-icon {
          filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.5));
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s infinite ease-in-out;
        }

        /* Scope to #contact only: Hide elements before visibility */
        #contact:not(.is-visible) .animate-fade-in,
        #contact:not(.is-visible) .animate-slide-up,
        #contact:not(.is-visible) .animate-card-in,
        #contact:not(.is-visible) .animate-text-in {
          opacity: 0;
          animation: none;
        }

        /* Apply animations when #contact has 'is-visible' class, with forwards */
        #contact.is-visible .animate-fade-in {
          animation: fadeIn 2s ease-in forwards;
        }

        #contact.is-visible .animate-slide-up {
          animation: slideUp 1.5s ease-out forwards;
        }

        #contact.is-visible .animate-card-in {
          animation: cardIn 1.8s ease-out forwards;
        }

        #contact.is-visible .animate-text-in {
          animation: textIn 1.8s ease-out forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1100 {
          animation-delay: 1.1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-20deg) rotateY(10deg) translateZ(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0) rotateY(0) translateZ(0);
          }
        }

        @keyframes textIn {
          from {
            opacity: 0;
            transform: translateX(-40px) translateZ(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateZ(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;