import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
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
  );
}