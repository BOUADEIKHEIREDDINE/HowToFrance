'use client';

import { useState } from 'react';

const BASE_COSTS = {
  paris: 1200,
  lyon: 950,
  other: 850,
};

export default function BudgetEstimator() {
  const [city, setCity] = useState<'paris' | 'lyon' | 'other'>('paris');
  const [rent, setRent] = useState(700);
  const [food, setFood] = useState(250);
  const [transport, setTransport] = useState(75);

  const estimatedTotal = rent + food + transport + (city === 'paris' ? 150 : city === 'lyon' ? 80 : 50);

  return (
    <div className="max-w-xl border rounded-xl bg-white p-5 space-y-4 text-sm">
      <p className="text-gray-700">
        Rough monthly budget estimate for a student in France. This is just an
        approximation to help you plan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value as 'paris' | 'lyon' | 'other')}
            className="w-full border rounded-md px-2 py-1.5"
          >
            <option value="paris">Paris / Île-de-France</option>
            <option value="lyon">Lyon / big city</option>
            <option value="other">Other city</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Rent (€)</label>
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(Number(e.target.value) || 0)}
            className="w-full border rounded-md px-2 py-1.5"
            min={0}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Food (€)</label>
          <input
            type="number"
            value={food}
            onChange={(e) => setFood(Number(e.target.value) || 0)}
            className="w-full border rounded-md px-2 py-1.5"
            min={0}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">Transport (€)</label>
          <input
            type="number"
            value={transport}
            onChange={(e) => setTransport(Number(e.target.value) || 0)}
            className="w-full border rounded-md px-2 py-1.5"
            min={0}
          />
        </div>
      </div>

      <div className="pt-2 border-t mt-2">
        <p className="text-xs text-gray-500 mb-1">
          Reference baseline for this city:{' '}
          <span className="font-semibold">
            ~{BASE_COSTS[city]} € / month
          </span>
        </p>
        <p className="text-base font-semibold">
          Your estimated budget: <span className="text-primary">{estimatedTotal} € / month</span>
        </p>
      </div>
    </div>
  );
}
