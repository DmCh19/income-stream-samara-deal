
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Заявка успешно отправлена!', {
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setName('');
      setPhone('');
      setEmail('');
      setLoading(false);
    }, 1500);
  };

  return (
    <div id="contact" className="bg-investment-navy text-white py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Хотите узнать больше?</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Оставьте заявку, чтобы назначить экскурсию, получить презентацию объекта или задать любые вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white opacity-90">Имя</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white bg-opacity-10 border-0 text-white placeholder:text-white placeholder:opacity-60 focus:ring-investment-gold focus:ring-2"
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white opacity-90">Телефон</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white bg-opacity-10 border-0 text-white placeholder:text-white placeholder:opacity-60 focus:ring-investment-gold focus:ring-2"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white opacity-90">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white bg-opacity-10 border-0 text-white placeholder:text-white placeholder:opacity-60 focus:ring-investment-gold focus:ring-2"
                  placeholder="example@mail.ru"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="cta-button-secondary w-full"
              >
                {loading ? 'Отправка...' : 'Оставить заявку'}
              </Button>
              
              <p className="text-sm opacity-70 text-center">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Бесплатная консультация</h3>
                <p className="opacity-80">
                  Ответим на все ваши вопросы по телефону или при личной встрече
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Экскурсия на объект</h3>
                <p className="opacity-80">
                  Покажем помещения, познакомим с арендаторами и ответим на вопросы
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Полная презентация</h3>
                <p className="opacity-80">
                  Отправим детальную презентацию с финансовыми показателями и документами
                </p>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <p className="font-semibold flex items-center gap-2 mb-3">
                <ArrowRight className="h-5 w-5 text-investment-gold" />
                Быстрый старт
              </p>
              <p className="opacity-80">
                От первого контакта до получения дохода — всего 7 дней. 
                Мы позаботимся обо всех юридических и организационных вопросах.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 section-container">
        <p className="text-center opacity-70 text-sm">
          © 2025 Пассивный доход от Дмитрия и Ивана. Все права защищены.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
