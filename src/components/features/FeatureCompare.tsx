import React from 'react';
import { Check, Music, Mic2 } from 'lucide-react';

export const FeatureCompare: React.FC = () => {
  const artistFeatures = [
    'Cadastro de shows com equipe',
    'Gestão de músicos contratados',
    'Cadastro de venues/locais',
    'Simulador de Nota Fiscal',
    'Divisão automática de custos',
  ];

  const musicianFeatures = [
    'Lista automática de artistas parceiros',
    'Total ganho por artista',
    'Dashboard focado em cachês recebidos',
    'Visualização de shows onde participou',
    'Relatório por artista',
  ];

  const sharedFeatures = [
    'Controle de Locomoção',
    'Despesas Adicionais',
    'Relatórios Financeiros',
    'Calendário e Agenda',
    'Notificações Push',
    'Configurações de Privacidade',
    'Programa de Indicação',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1E082B] mb-4">
            Artista ou Músico?
          </h2>
          <p className="text-lg text-[#6B7280]">
            O SouArtista se adapta ao seu perfil com funcionalidades específicas
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Artist Column */}
          <div className="relative p-8 bg-white rounded-3xl border-2 border-[#B96FFF]/20 shadow-xl shadow-[#B96FFF]/5">
            <div className="absolute -top-5 left-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#B96FFF] rounded-full text-white font-semibold shadow-lg shadow-[#B96FFF]/30">
                <Mic2 className="w-5 h-5" />
                Modo Artista
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-[#6B7280] mb-6">
                <strong className="text-[#1E082B]">Para quem é:</strong> Você é líder de banda, produtor ou artista solo que contrata músicos
              </p>
              
              <h4 className="font-semibold text-[#1E082B] mb-4">Funcionalidades exclusivas:</h4>
              <ul className="space-y-3">
                {artistFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#B96FFF]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#B96FFF]" />
                    </div>
                    <span className="text-[#4B5563]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Musician Column */}
          <div className="relative p-8 bg-white rounded-3xl border-2 border-green-500/20 shadow-xl shadow-green-500/5">
            <div className="absolute -top-5 left-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500 rounded-full text-white font-semibold shadow-lg shadow-green-500/30">
                <Music className="w-5 h-5" />
                Modo Músico
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-[#6B7280] mb-6">
                <strong className="text-[#1E082B]">Para quem é:</strong> Você é músico freelancer que toca com vários artistas
              </p>
              
              <h4 className="font-semibold text-[#1E082B] mb-4">Funcionalidades exclusivas:</h4>
              <ul className="space-y-3">
                {musicianFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-[#4B5563]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Shared Features */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display font-semibold text-xl text-[#1E082B]">
              Funcionalidades compartilhadas
            </h3>
            <p className="text-[#6B7280]">Disponíveis em ambos os modos</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {sharedFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-[#4B5563]"
              >
                <Check className="w-4 h-4 text-[#B96FFF]" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
