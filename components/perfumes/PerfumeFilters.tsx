import React from 'react';

interface PerfumeFiltersProps {
  selectedGender: string;
  setSelectedGender: (g: string) => void;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  availableBrands: string[];
  selectedBrands: string[];
  setSelectedBrands: (b: string[]) => void;
  minPrice: number;
  maxPrice: number;
  setMinPrice: (n: number) => void;
  setMaxPrice: (n: number) => void;
  dataMinPrice: number;
  dataMaxPrice: number;
}

const genders = ['all', 'Hombre', 'Mujer', 'Unisex'];

export default function PerfumeFilters({
  selectedGender,
  setSelectedGender,
  searchTerm,
  setSearchTerm,
  availableBrands,
  selectedBrands,
  setSelectedBrands,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  dataMinPrice,
  dataMaxPrice,
}: PerfumeFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex gap-2">
        {genders.map(g => (
          <button
            key={g}
            className={`px-3 py-1 rounded ${selectedGender === g ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setSelectedGender(g as any)}
          >
            {g}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Buscar por nombre o marca"
        className="border px-3 py-2 rounded w-full"
      />
      <div>
        <label className="block mb-1 font-semibold">Marca:</label>
        <div className="flex flex-wrap gap-2">
          {availableBrands.map(brand => (
            <label key={brand} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={e => {
                  if (e.target.checked) setSelectedBrands([...selectedBrands, brand]);
                  else setSelectedBrands(selectedBrands.filter(b => b !== brand));
                }}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <label>Precio mínimo:</label>
        <input
          type="number"
          min={dataMinPrice * 1000}
          max={dataMaxPrice * 1000}
          value={minPrice}
          onChange={e => setMinPrice(Number(e.target.value))}
          className="border px-2 py-1 rounded w-24"
        />
        <label>Precio máximo:</label>
        <input
          type="number"
          min={dataMinPrice * 1000}
          max={dataMaxPrice * 1000}
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          className="border px-2 py-1 rounded w-24"
        />
      </div>
    </div>
  );
}
