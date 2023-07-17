import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button, ImageBackground, Image } from 'react-native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const navigateToTaskDirectory = () => {
    navigation.navigate('TaskDirectory');
  };

  return (
    <ImageBackground
      source={require('../assets/Fondo.jpg')} // Ruta de tu imagen de fondo
      style={styles.container}
    >
    <View style={styles.container}>
      {/* ...contenido de tu pantalla de inicio (dashboard)... */}
      <TouchableOpacity onPress={navigateToTaskDirectory} style={styles.imageContainer}>
        <Image source={require('../assets/AreasVerdes.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      imageContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
      },
      image: {
        width: 200,
        height: 150,
  },
});

export default DashboardScreen
