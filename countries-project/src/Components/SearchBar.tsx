import React from 'react';
import './SearchBar.css';

interface ControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  regionFilter: string;
  setRegionFilter: (val: string) => void;
}

export default function SearchBar({ searchQuery,
  setSearchQuery,
  regionFilter,
  setRegionFilter
}: ControlsProps) {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    
  return (
    <div className="controls-container">
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
    <div className="filter-wrapper">
        <select 
          value={regionFilter} 
          onChange={(e) => setRegionFilter(e.target.value)}
          className="region-select"
        >
          <option value="">Filter by Region</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
</div>
  );
}