import { View, Text, FlatList, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { usePlaces } from '../context/PlacesContext';

export default function HomeScreen() {
  const { places } = usePlaces();
  const router = useRouter();

  const navigateToAddPlace = () => {
    router.push('/add-place');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favorite Places</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.placeItem}>{item.name}</Text>}
        ListEmptyComponent={<Text style={styles.emptyText}>No places added yet!</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToAddPlace}>
        <Text style={styles.buttonText}>Add New Place</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  placeItem: {
    fontSize: 18,
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    color: '#555',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
