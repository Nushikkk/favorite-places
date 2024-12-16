import React from 'react';
import { Stack } from 'expo-router';
import { PlacesProvider } from '@/context/PlacesContext';

const RootLayout = () => {
  return (
    <PlacesProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Favorite Places',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="add-place"
          options={{
            title: 'Add New Place',
            headerShown: true,
          }}
        />
      </Stack>
    </PlacesProvider>
  );
};

export default RootLayout;
