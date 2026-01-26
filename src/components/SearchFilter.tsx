import { useState } from 'react';
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

  const hasActiveFilters = filters.some(f => f.value !== 'all');

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
            className="w-full pl-12 pr-4 py-3 bg-card border border-border/50 rounded-lg font-exo text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
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
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-exo text-sm border transition-all ${
              showFilters || hasActiveFilters
                ? 'bg-primary/10 border-primary/50 text-primary'
                : 'bg-card border-border/50 text-muted-foreground hover:border-primary/30'
            }`}
          >
            <Filter size={18} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-primary" />
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
            <div className="flex flex-wrap gap-3 p-4 bg-card/50 rounded-lg border border-border/30">
              {filters.map((filter) => (
                <div key={filter.key} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === filter.key ? null : filter.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-exo text-sm border transition-all ${
                      filter.value !== 'all'
                        ? 'bg-primary/10 border-primary/50 text-primary'
                        : 'bg-muted/50 border-border/50 text-foreground hover:border-primary/30'
                    }`}
                  >
                    <span>{filter.label}:</span>
                    <span className="font-medium">
                      {filter.options.find(o => o.value === filter.value)?.label || 'All'}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${openDropdown === filter.key ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === filter.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 min-w-[180px] bg-popover border border-border rounded-lg shadow-xl z-50 overflow-hidden"
                      >
                        {filter.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              filter.onChange(option.value);
                              setOpenDropdown(null);
                            }}
                            className={`w-full px-4 py-2 text-left font-exo text-sm transition-colors ${
                              filter.value === option.value
                                ? 'bg-primary/20 text-primary'
                                : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2 text-muted-foreground hover:text-destructive font-exo text-sm transition-colors"
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
          Showing <span className="text-primary font-medium">{resultCount}</span> result{resultCount !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
};