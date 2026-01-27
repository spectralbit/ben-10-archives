import { useState, useRef, useEffect } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterOption {
  value: string;
  label: string;
}

interface SearchFilterProps {
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: {
    key: string;
    label: string;
    options: FilterOption[];
    value: string;
    onChange: (value: string) => void;
  }[];
  resultCount?: number;
}

export const SearchFilter = ({
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  filters = [],
  resultCount
}: SearchFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasActiveFilters = filters.some(f => f.value !== 'all');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearFilters = () => {
    filters.forEach(f => f.onChange('all'));
    onSearchChange('');
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
            size={20} 
          />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border/50 rounded-lg font-exo text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
          />
          {searchValue && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {filters.length > 0 && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-exo text-sm font-medium border transition-all ${
              showFilters || hasActiveFilters
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                : 'bg-card border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
            }`}
          >
            <Filter size={18} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs">
                {filters.filter(f => f.value !== 'all').length}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Filter Dropdowns */}
      <AnimatePresence>
        {showFilters && filters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div 
              ref={dropdownRef}
              className="flex flex-wrap gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-lg"
            >
              {filters.map((filter) => (
                <div key={filter.key} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.key ? null : filter.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-exo text-sm border transition-all ${
                      filter.value !== 'all'
                        ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                        : 'bg-muted/50 border-border text-foreground hover:border-primary/50 hover:bg-muted'
                    }`}
                  >
                    <span className="text-muted-foreground">{filter.label}:</span>
                    <span className="font-semibold">
                      {filter.options.find(o => o.value === filter.value)?.label || 'All'}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${openDropdown === filter.key ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === filter.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 min-w-[200px] bg-popover border border-border rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-sm"
                      >
                        <div className="p-1">
                          {filter.options.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                filter.onChange(option.value);
                                setOpenDropdown(null);
                              }}
                              className={`w-full px-4 py-2.5 text-left font-exo text-sm rounded-lg transition-all ${
                                filter.value === option.value
                                  ? 'bg-primary text-primary-foreground font-medium'
                                  : 'text-foreground hover:bg-muted'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-destructive hover:bg-destructive/10 font-exo text-sm font-medium rounded-lg transition-all"
                >
                  <X size={16} />
                  <span>Clear all</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      {resultCount !== undefined && (
        <p className="text-sm text-muted-foreground font-exo">
          Showing <span className="text-primary font-semibold">{resultCount}</span> result{resultCount !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
};