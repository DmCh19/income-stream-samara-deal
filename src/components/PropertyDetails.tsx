
import React from 'react';
import { Building, MapPin, ArrowRight } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div id="property-details" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Объект в деталях</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-investment-lightGray rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-investment-gold" />
                <h3 className="text-xl font-semibold">Расположение</h3>
              </div>
              <p className="font-medium text-lg mb-2">г. Самара, улица Победы</p>
              <p className="text-gray-600">1 этаж, высокий пешеходный трафик</p>
              
              <div className="mt-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0da11d18-870f-4bc6-a0a1-edb33f3f526e.png" 
                  alt="Вид на помещение с улицы Победы" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div className="bg-investment-lightGray rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building className="text-investment-gold" />
                <h3 className="text-xl font-semibold">Характеристики</h3>
              </div>
              <p className="mb-4">
                <span className="font-medium">Общая площадь:</span> 134 м²
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Wildberries</p>
                  <p className="text-gray-600">62.8 м²</p>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-investment-navy rounded-full" style={{ width: '47%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="font-medium">Пивной магазин</p>
                  <p className="text-gray-600">29 м²</p>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-investment-gold rounded-full" style={{ width: '22%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="font-medium">Кофейня</p>
                  <p className="text-gray-600">38 м²</p>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-investment-navy rounded-full opacity-70" style={{ width: '28%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="font-medium">Постамат Яндекс.Маркет</p>
                  <p className="text-gray-600">2 м²</p>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-investment-gold rounded-full" style={{ width: '3%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="investment-card">
            <h3 className="text-2xl font-semibold mb-6 text-investment-navy">Все помещения сданы надёжным арендаторам</h3>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Wildberries</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">62.8 м²</span>
                </div>
                <p className="text-gray-600">Сделали капитальный ремонт за свой счёт, заинтересованы в долгосрочном сотрудничестве</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Пивной магазин</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">29 м²</span>
                </div>
                <p className="text-gray-600">Ранее снимал всё помещение, хорошо знает локацию, стабильный спрос</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Кофейня</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">38 м²</span>
                </div>
                <p className="text-gray-600">Вложила в ремонт около 500 000 ₽, планирует работать долгосрочно</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Постамат Яндекс.Маркет</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">2 м²</span>
                </div>
                <p className="text-gray-600">Привлекает дополнительный поток клиентов к объекту</p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/6bdeb402-c9dd-4d89-89c3-daa88503dcb9.png" 
                  alt="Вход в помещение с улицы Победы" 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-blue-50 p-2 text-sm text-blue-800">
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/></svg>
                      <span>2 входа</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/><path d="m13 2 7 7"/></svg>
                      <span>Свободная планировка</span>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="flex items-center justify-center">
                <a 
                  href="#financial-breakdown" 
                  className="flex items-center gap-2 text-investment-navy font-medium hover:text-investment-gold transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('financial-breakdown')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Подробнее о финансах <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
