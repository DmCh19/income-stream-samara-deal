import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="bg-investment-navy text-white min-h-[80vh] flex items-center relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-investment-gold bg-opacity-20 text-investment-gold font-semibold text-sm mb-4">
              Инвестиционная возможность
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Готовый бизнес с пассивным доходом
            </h1>
            <p className="text-xl opacity-90">
              Получайте стабильный доход <span className="highlight">уже завтра</span> — объект с арендаторами, 
              договорами и управлением «под ключ»
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToContact} className="cta-button">
                Оставить заявку
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10" onClick={() => document.getElementById('property-details')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Узнать детали
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-center pb-4 border-b border-white border-opacity-20">
                <div>
                  <p className="text-sm opacity-80">Чистый доход в месяц</p>
                  <p className="text-3xl font-bold text-amber-500">41 900 ₽</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Окупаемость</p>
                  <p className="text-2xl font-bold">12 месяцев</p>
                </div>
              </div>
              <div className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-investment-gold"></div>
                    <p>3 действующих бизнеса</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-investment-gold"></div>
                    <p>Полное юридическое сопровождение</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-investment-gold"></div>
                    <p>Обеспечительные платежи в подарок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-10 w-10 opacity-60" />
      </div>
    </div>;
};
export default Hero;