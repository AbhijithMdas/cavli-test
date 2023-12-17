// src/components/ChipsetSection.js
import React, { useState } from 'react';
import { chipsetData } from '../productData';

const ChipsetSection = (props) => {
  const [filters, setFilters] = useState({ region: '', esim: '', formFactor: '' });

  const filteredChipsets = chipsetData.filter(chipset => {
    return (
      (filters.region === '' || chipset.region === filters.region) &&
      (filters.esim === '' || String(chipset.esimCompatible) === filters.esim) &&
      (filters.formFactor === '' || chipset.formFactor === filters.formFactor)
    );
  });

  return (
    <div className="chipset-section">
      <h2>Chipset Section</h2>
      <div className="filter-container">
        <div>
          <label>Region:</label>
          <select value={filters.region} onChange={(e) => setFilters({ ...filters, region: e.target.value })}>
            <option value="">Select Region</option>
            <option value="APAC">APAC</option>
        <option value="NAM">NAM</option>
        <option value="SAM">SAM</option>
        <option value="EU">EU</option>
        <option value="GLOBAL">GLOBAL</option>
          </select>
        </div>
        <div>
          <label>eSIM Compatible:</label>
          <select value={filters.esim} onChange={(e) => setFilters({ ...filters, esim: e.target.value })}>
            <option value="">Select eSIM Compatibility</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>Form Factor:</label>
          <select value={filters.formFactor} onChange={(e) => setFilters({ ...filters, formFactor: e.target.value })}>
            <option value="">Select Form Factor</option>
            <option value="M.2">M.2</option>
        <option value="minPIC">minPIC</option>
        <option value="LGA">LGA</option>
        <option value="MiniPCI">MiniPCI</option>
          </select>
        </div>
      </div>

      <div className="chipset-list">
        {filteredChipsets.map((chipset) => (
          <div key={chipset.id} className="chipset-item">
            <h3>{chipset.name}</h3>
            <p>
              {chipset.region}, {chipset.formFactor}
            </p>
            <button
              onClick={() =>
                props.addToCart(
                  chipset.id,
                  chipset.name,
                  chipset.name,
                  chipset.region,
                  chipset.esimCompatible,
                  chipset.formFactor,
                  chipset.photo
                )
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsetSection;
