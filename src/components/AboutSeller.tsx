
import React from 'react';
import { Medal, Building } from 'lucide-react';

const AboutSeller = () => {
  return (
    <div className="bg-investment-lightGray py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Кто я?</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Меня зовут <span className="font-semibold">Дмитрий</span>, я не риелтор, а предприниматель.
              </p>
              <p>
                За последние месяцы я собрал 2 объекта, которые приносят мне пассивный доход. 
                Моя цель — создать 1 000 000 ₽ пассивного дохода в месяц.
              </p>
              <p>
                Сейчас я продаю объекты в Самаре, чтобы масштабироваться в Москве.
                У меня есть партнёр Иван, мы командные игроки, работаем над этим проектом 
                системно и профессионально.
              </p>
              <p className="font-medium">
                Если вам интересно не просто вложение, а участие в таких проектах как инвестор — напишите!
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Medal className="text-investment-gold" />
                <h3 className="text-xl font-semibold">Второй объект тоже в продаже</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-4 items-start">
                  <Building className="h-8 w-8 text-investment-navy flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Ул. Ленинградская, 207 м²</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">Сданы под магазин одежды и ПВЗ Wildberries</p>
                      <p className="font-semibold">Чистая прибыль: <span className="text-investment-profit">39 000 ₽/мес</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Часто задаваемые вопросы</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Почему вы продаёте доходный объект?</h4>
                <p className="text-gray-600">
                  Я расширяю бизнес и планирую масштабироваться в Москву. 
                  Для этого требуются дополнительные инвестиции, поэтому я продаю 
                  некоторые из своих объектов в Самаре.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Сколько времени нужно на управление?</h4>
                <p className="text-gray-600">
                  1-2 часа в месяц. Арендаторы самостоятельно обслуживают помещения, 
                  а все расчеты автоматизированы через специальные таблицы, 
                  которые я передам вместе с объектом.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Что будет, если арендатор съедет?</h4>
                <p className="text-gray-600">
                  Все арендаторы оставили обеспечительные платежи, которые 
                  покрывают возможные убытки. Кроме того, у нас есть база 
                  постоянных клиентов, и мы поможем быстро найти нового арендатора, 
                  если это потребуется.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Могу ли я увидеть финансовые документы?</h4>
                <p className="text-gray-600">
                  Конечно! При личной встрече я предоставлю все документы: 
                  договора, выписки, платежки и историю арендных платежей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
