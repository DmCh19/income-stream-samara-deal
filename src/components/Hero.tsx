
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-300"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blue-300"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-400 bg-opacity-20 text-white font-semibold text-sm mb-4 border border-blue-300 border-opacity-30">
              Инвестиционная возможность
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Готовый бизнес с пассивным доходом
            </h1>
            <p className="text-xl opacity-90 text-gray-100">
              Получайте стабильный доход <span className="text-white font-semibold">уже завтра</span> — объект с арендаторами, 
              договорами и управлением «под ключ»
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToContact} className="cta-button bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700">
                Оставить заявку
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('property-details')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Узнать детали
              </Button>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-300 border-opacity-30">
              <div className="flex justify-between items-center pb-4 border-b border-white border-opacity-20">
                <div>
                  <p className="text-sm opacity-80">Чистый доход в месяц</p>
                  <p className="text-3xl font-bold text-white">41 900 ₽</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Окупаемость</p>
                  <p className="text-2xl font-bold">12 месяцев</p>
                </div>
              </div>
              <div className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                    <p>3 действующих бизнеса</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                    <p>Полное юридическое сопровождение</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                    <p>Обеспечительные платежи в подарок</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Property images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-blue-300 border-opacity-30">
                <AspectRatio ratio={16/10} className="bg-blue-800">
                  <img 
                    src="/lovable-uploads/0da11d18-870f-4bc6-a0a1-edb33f3f526e.png" 
                    alt="Вид на помещение с улицы Победы с высоким пешеходным трафиком" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="rounded-xl overflow-hidden border border-blue-300 border-opacity-30">
                <AspectRatio ratio={16/10} className="bg-blue-800">
                  <img 
                    src="/lovable-uploads/6bdeb402-c9dd-4d89-89c3-daa88503dcb9.png" 
                    alt="Вход в помещение с улицы Победы" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile images - shown only on small screens */}
        <div className="mt-8 md:hidden">
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-blue-300 border-opacity-30">
              <AspectRatio ratio={16/10} className="bg-blue-800">
                <img 
                  src="/lovable-uploads/0da11d18-870f-4bc6-a0a1-edb33f3f526e.png" 
                  alt="Вид на помещение с улицы Победы с высоким пешеходным трафиком" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="rounded-xl overflow-hidden border border-blue-300 border-opacity-30">
              <AspectRatio ratio={16/10} className="bg-blue-800">
                <img 
                  src="/lovable-uploads/6bdeb402-c9dd-4d89-89c3-daa88503dcb9.png" 
                  alt="Вход в помещение с улицы Победы" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-10 w-10 opacity-60" />
      </div>
    </div>
  );
};

export default Hero;
