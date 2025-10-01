import React from 'react';
import { Youtube, Facebook, Instagram,  Mail, Phone, MapPin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@PepsiCoBrasil', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Facebook, href: 'https://www.facebook.com/PepsiCoBrasil', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/pepsico_br/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: 'https://x.com/pepsicobrasil', label: 'Twitter', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="ml-3 text-white font-semibold text-xl">Pepsico Brasil</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Criando mais sorrisos a cada gole e a cada mordida. 
              A Pepsico Brasil Itaquera é referência em qualidade, 
              inovação e responsabilidade social.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-teal-500/20 p-2 rounded-lg group-hover:bg-teal-500/30 transition-colors duration-300">
                  <MapPin size={18} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">Endereço</p>
                  <p className="text-white/60 text-sm">Itaquera, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">Telefone</p>
                  <p className="text-white/60 text-sm">(11) 1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">Email</p>
                  <p className="text-white/60 text-sm">contato@pepsico.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Pepsico Brasil Itaquera. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;