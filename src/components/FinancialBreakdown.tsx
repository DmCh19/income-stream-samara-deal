
import React from 'react';
import { Wallet, TrendingUp, Calendar } from 'lucide-react';

const FinancialBreakdown = () => {
  return (
    <div id="financial-breakdown" className="bg-investment-lightGray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Финансовый расчёт</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Стабильный пассивный доход от первого месяца владения с прогнозируемым ростом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="investment-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-investment-gold bg-opacity-20 p-2 rounded-full">
                  <Wallet className="h-6 w-6 text-investment-gold" />
                </div>
                <h3 className="text-2xl font-semibold">Ежемесячный доход</h3>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Общая прибыль (за вычетом всех расходов)</p>
                  <p className="text-2xl font-bold profit-text">41 900 ₽/мес</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-600">Обеспечительные платежи (передаются вам)</p>
                  <p className="font-semibold">70 000 ₽</p>
                </div>
                <p className="text-sm text-gray-500">
                  * Обеспечительные платежи — это дополнительная гарантия от арендаторов
                </p>
              </div>
            </div>

            <div className="investment-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-investment-gold bg-opacity-20 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-investment-gold" />
                </div>
                <h3 className="text-2xl font-semibold">Цена объекта</h3>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-investment-navy mb-2">571 800 ₽</p>
                <p className="text-gray-600 text-center">
                  (41 900 ₽ × 12 месяцев + 70 000 ₽ обеспечительных платежей)
                </p>
                <p className="text-center italic mt-4">
                  По факту, вы платите только за первый год дохода — 
                  все последующие годы идут вам в прибыль
                </p>
              </div>
            </div>
          </div>

          <div className="investment-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-investment-gold bg-opacity-20 p-2 rounded-full">
                <Calendar className="h-6 w-6 text-investment-gold" />
              </div>
              <h3 className="text-2xl font-semibold">Прогноз на 4 года</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="profit-table">
                <thead>
                  <tr>
                    <th>Год</th>
                    <th>Доход в месяц</th>
                    <th>Доход в год</th>
                    <th>Суммарный доход</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>41 900 ₽</td>
                    <td>502 800 ₽</td>
                    <td>502 800 ₽</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>46 090 ₽</td>
                    <td>553 080 ₽</td>
                    <td>1 055 880 ₽</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>50 699 ₽</td>
                    <td>608 388 ₽</td>
                    <td>1 664 268 ₽</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>55 769 ₽</td>
                    <td>669 228 ₽</td>
                    <td>2 333 496 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-center font-semibold">
                Ваша чистая прибыль за 4 года: <span className="text-investment-profit">≈ 2 224 000 ₽</span>
              </p>
              <p className="text-center text-sm text-gray-600 mt-1">
                С учетом ежегодного роста арендных ставок минимум на 10%
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                * Расчет представлен для ознакомления. Точные цифры могут незначительно отличаться и 
                будут зафиксированы в документах при сделке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialBreakdown;
