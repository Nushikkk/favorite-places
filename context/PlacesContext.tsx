import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Place {
  id: string;
  name: string;
}

interface PlacesContextType {
  places: Place[];
  addPlace: (name: string) => void;
}

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

interface PlacesProviderProps {
  children: ReactNode;
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [places, setPlaces] = useState<Place[]>([
    { id: '1', name: 'Central Park, NY' },
    { id: '2', name: 'Eiffel Tower, Paris' },
  ]);

  const addPlace = (name: string) => {
    const newPlace: Place = { id: Date.now().toString(), name };
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  return (
    <PlacesContext.Provider value={{ places, addPlace }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error('usePlaces must be used within a PlacesProvider');
  }
  return context;
};
