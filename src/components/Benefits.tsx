
import React from 'react';
import { 
  ShieldCheck, 
  BarChart4, 
  FileText, 
  Clock, 
  Coffee
} from 'lucide-react';

const Benefits = () => {
  return (
    <div className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Почему это безопасно и удобно</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Инвестиция с минимальными рисками и полностью делегированным управлением
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="investment-card flex flex-col h-full">
            <div className="bg-investment-navy bg-opacity-5 p-3 rounded-full w-fit mb-4">
              <ShieldCheck className="h-6 w-6 text-investment-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-investment-navy">Гарантии надёжности</h3>
            <ul className="space-y-3 text-gray-600 flex-grow">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Все арендаторы внесли <span className="font-medium">обеспечительный платёж</span></p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Арендаторы вложили собственные средства в ремонт</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Стабильный спрос и проходимость в локации</p>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="investment-card flex flex-col h-full">
            <div className="bg-investment-navy bg-opacity-5 p-3 rounded-full w-fit mb-4">
              <FileText className="h-6 w-6 text-investment-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-investment-navy">Полное юридическое сопровождение</h3>
            <ul className="space-y-3 text-gray-600 flex-grow">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Готовые договоры с арендаторами</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Выписка из ЕГРН и скрины платежей</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Переоформление на ваше ИП или ООО</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="font-medium">Оплата только после переоформления договоров</p>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="investment-card flex flex-col h-full">
            <div className="bg-investment-navy bg-opacity-5 p-3 rounded-full w-fit mb-4">
              <Coffee className="h-6 w-6 text-investment-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-investment-navy">Автоматизированное управление</h3>
            <ul className="space-y-3 text-gray-600 flex-grow">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Все процессы настроены и автоматизированы</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Готовые таблицы для расчёта коммуналки</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Выставление счетов — 1 раз в месяц</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Арендаторы сами обслуживают помещения</p>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="investment-card flex flex-col h-full">
            <div className="bg-investment-navy bg-opacity-5 p-3 rounded-full w-fit mb-4">
              <Clock className="h-6 w-6 text-investment-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-investment-navy">Быстрая сделка</h3>
            <div className="flex-grow">
              <div className="relative border-l-2 border-dashed border-gray-300 ml-3 pl-6 py-2">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 bg-white border-2 border-investment-navy rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-investment-navy">
                  1
                </div>
                <p className="font-medium">Экскурсия на объект</p>
              </div>
              <div className="relative border-l-2 border-dashed border-gray-300 ml-3 pl-6 py-2">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 bg-white border-2 border-investment-navy rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-investment-navy">
                  2
                </div>
                <p className="font-medium">Согласование условий</p>
              </div>
              <div className="relative border-l-2 border-dashed border-gray-300 ml-3 pl-6 py-2">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 bg-white border-2 border-investment-navy rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-investment-navy">
                  3
                </div>
                <p className="font-medium">Переоформление договоров</p>
              </div>
              <div className="relative border-l-2 border-dashed border-gray-300 ml-3 pl-6 py-2">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 bg-white border-2 border-investment-navy rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-investment-navy">
                  4
                </div>
                <p className="font-medium">Передача денег</p>
              </div>
              <div className="relative ml-3 pl-6 py-2">
                <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 bg-white border-2 border-investment-gold rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold text-investment-gold">
                  5
                </div>
                <p className="font-medium">Получение объекта в управление</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Весь процесс занимает до 7 дней
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="investment-card flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="bg-investment-navy bg-opacity-5 p-3 rounded-full w-fit mb-4">
              <BarChart4 className="h-6 w-6 text-investment-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-investment-navy">Бонусы для покупателя</h3>
            <ul className="space-y-3 text-gray-600 flex-grow">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Сопровождение после сделки и помощь в процессе</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Все таблицы и документы для управления</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Контакты проверенного юриста</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <p>Обучающие материалы по созданию подобных объектов</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
