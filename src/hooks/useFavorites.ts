import { useState, useEffect, useCallback } from 'react';

export type FavoriteType = 'alien' | 'villain' | 'character';

interface Favorites {
  aliens: string[];
  villains: string[];
  characters: string[];
}

const STORAGE_KEY = 'ben10-favorites';

const getInitialFavorites = (): Favorites => {
  if (typeof window === 'undefined') {
    return { aliens: [], villains: [], characters: [] };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to parse favorites from localStorage', e);
  }
  return { aliens: [], villains: [], characters: [] };
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorites>(getInitialFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = useCallback((type: FavoriteType, id: string) => {
    setFavorites((prev) => {
      const key = type === 'alien' ? 'aliens' : type === 'villain' ? 'villains' : 'characters';
      const list = prev[key];
      const newList = list.includes(id)
        ? list.filter((item) => item !== id)
        : [...list, id];
      return { ...prev, [key]: newList };
    });
  }, []);

  const isFavorite = useCallback(
    (type: FavoriteType, id: string): boolean => {
      const key = type === 'alien' ? 'aliens' : type === 'villain' ? 'villains' : 'characters';
      return favorites[key].includes(id);
    },
    [favorites]
  );

  const getFavoriteCount = useCallback((): number => {
    return favorites.aliens.length + favorites.villains.length + favorites.characters.length;
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
  };
};
