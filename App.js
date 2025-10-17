import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1604011237320-8e0506614fdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsdXJyZWQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' }} // simple blurred bg
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.card}>
        {/* Top Banner */}
        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.q5UXq0iQxCxfvPe7VYN3uQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3' }} // school logo or placeholder
            style={styles.logo}
          />
          <Text style={styles.title}>Varsity college</Text>
        </View>

        {/* Profile Image */}
        <Image
          source={require('./assets/eldo.jpg')} // replace with your image
          style={styles.profileImage}
        />

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Eldies Tshiseke</Text>
          <Text style={styles.info}>Student No: ST10468232</Text>
          <Text style={styles.info}>Qualification: Mobile Application</Text>
          <Text style={styles.info}>Age: 21</Text>
          <Text style={styles.bio}>
            Creative designer passionate about building beautiful digital experiences.
          </Text>
        </View>

        {/* Barcode Area */}
        <View style={styles.barcodeSection}>
          <Image
            source={{ uri: 'https://i.imgur.com/4C4yq8P.png' }} // sample barcode
            style={styles.barcode}
          />
          <Text style={styles.studentId}>MAST5112</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 340,
    alignItems: 'center',
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    
  },
  
  banner: {
    backgroundColor: '#002B5B',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    color: '#e1d5d5ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#002B5B',
    marginTop: 15,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002B5B',
  },
  info: {
    fontSize: 15,
    color: '#333',
    marginTop: 2,
  },
  bio: {
    fontSize: 13,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  barcodeSection: {
    alignItems: 'center',
    marginTop: 15,
  },
  barcode: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
  },
  studentId: {
    fontSize: 14,
    marginTop: 5,
    letterSpacing: 2,
    color: '#333',
  },
});