import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { usePlaces } from '../context/PlacesContext';

export default function AddPlaceScreen() {
  const [place, setPlace] = useState<string>('');
  const { addPlace } = usePlaces();
  const router = useRouter();

  const handleAddPlace = () => {
    if (place.trim()) {
      addPlace(place);
      Alert.alert('Success', `${place} has been added!`);
      setPlace('');
      router.back();
    } else {
      Alert.alert('Error', 'Please enter a valid place name');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Place</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter place name"
        placeholderTextColor="#999"
        value={place}
        onChangeText={setPlace}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPlace}>
        <Text style={styles.buttonText}>Add Place</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#555',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
