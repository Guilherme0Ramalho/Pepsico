import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const GuardiansSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const guardianImages = [
    './src/asses/guardião-segurança.png',
    './src/asses/guardião-gente.png',
    './src/asses/guardião-desempenho.png',
    './src/asses/guardião-qualidade.png',
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

    const section = document.getElementById('guardians');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guardianImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guardianImages.length) % guardianImages.length);
  };

  return (
    <section id="guardians" className="py-20 bg-gradient-to-bl from-slate-800 via-teal-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-teal-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Guardiões</h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nossos Guardiões são líderes dedicados que zelam pela qualidade, segurança e 
            excelência operacional em todas as áreas da Pepsico Brasil Itaquera.
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Compromisso com a Excelência</h3>
                <p className="text-white/80 leading-relaxed">
                  Os Guardiões da Pepsico são responsáveis por manter os mais altos padrões 
                  de qualidade e segurança em nossos processos produtivos, garantindo que 
                  cada produto reflita nossa missão de criar sorrisos.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Liderança Inspiradora</h3>
                <p className="text-white/80 leading-relaxed">
                  Cada Guardião é um exemplo de liderança, inspirando equipes e 
                  promovendo uma cultura de inovação, colaboração e crescimento contínuo.
                </p>
              </div>
              <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Guardiões</h3>
                <p className="text-white/80 leading-relaxed">
                ° Segurança - Os guardiões de segurança são reconhecidos pela touca vermelha. Eles fazem a ligação entre os colaboradores e o time responsavél por cuidar da segurança da empresa.
                </p>
                <br />
                  <p className="text-white/80 leading-relaxed">
                ° Qualidade - Os guardiões de Qualidade são reconhecidos pela touca verde. Eles fazem a ligação entre os colaboradores e o time responsavél por cuidar da qualidade dos produtos.
                </p>
                <br />
                  <p className="text-white/80 leading-relaxed">
                ° Gente - Os guardiões de Gente são reconhecidos pela touca amarela. Eles fazem a ligação entre os colaboradores e o time responsavél pela gestão de RH.
                </p>
                <br />
                  <p className="text-white/80 leading-relaxed">
                ° Desempenho - Os guardiões de Desempenho são reconhecidos pela touca azul. Eles são responsavéis por cuidar do desempenho do seu setor.
                </p>
              </div>
            </div>

            {/* Image carousel */}
            <div className="relative order-1 md:order-2">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={guardianImages[currentSlide]}
                    alt={`Guardião ${currentSlide + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-500/30 backdrop-blur-sm hover:bg-teal-500/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-500/30 backdrop-blur-sm hover:bg-teal-500/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {guardianImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-teal-400 scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardiansSection;