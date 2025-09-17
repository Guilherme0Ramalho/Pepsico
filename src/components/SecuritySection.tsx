import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const securityImages = [
    './src/asses/luvas.png',
    './src/asses/bota.png',
    './src/asses/auriculR.png',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('security');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % securityImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + securityImages.length) % securityImages.length);
  };

  return (
    <section id="security" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Segurança</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Na Pepsico Brasil Itaquera, a segurança é nossa prioridade máxima. 
            Implementamos protocolos rigorosos para garantir um ambiente de trabalho seguro para todos.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={securityImages[currentSlide]}
                alt={`Segurança ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {securityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700 font-medium">
              Equipamentos de proteção, treinamentos constantes e protocolos de segurança rigorosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;