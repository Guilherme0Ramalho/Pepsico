import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const integrationImages = [
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
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

    const section = document.getElementById('integration');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrationImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrationImages.length) % integrationImages.length);
  };

  return (
    <section id="integration" className="py-20 bg-gradient-to-tr from-teal-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Mini Integração</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bem-vindos à família Pepsico! Nosso processo de integração foi desenvolvido 
            para garantir que cada novo membro se sinta acolhido e preparado para fazer a diferença.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          {/* Image carousel */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-teal-200 to-blue-200">
              <div className="relative h-80 md:h-96">
                <img
                  src={integrationImages[currentSlide]}
                  alt={`Integração ${currentSlide + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20"></div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {integrationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-teal-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Acolhimento Personalizado</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cada novo colaborador recebe um acompanhamento personalizado durante 
                seus primeiros dias, com mentores dedicados e um plano de integração 
                estruturado.
              </p>
              <div className="flex items-center space-x-2 text-teal-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="font-medium">Suporte contínuo</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-teal-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cultura Pepsico</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conhecer nossa missão, valores e cultura é fundamental para o sucesso. 
                Proporcionamos uma imersão completa no universo Pepsico desde o primeiro dia.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Valores em prática</span>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <a href="https://www.pepsico.com.br/quem-somos/missao-e-visao">Saiba mais</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;