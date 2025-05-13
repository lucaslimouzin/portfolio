import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const WelcomeMessage = () => {
  return (
    <ThemedView style={styles.container}>
      <Image 
        source={{ uri: 'https://picsum.photos/200' }} 
        style={styles.profileImage} 
      />
      <ThemedText style={styles.name}>Limouzin Lucas</ThemedText>
      <ThemedView style={styles.bioContainer}>
        <ThemedText style={styles.bioText}>
          Développeur passionné par les technologies web et mobile, spécialisé en React Native.
          Avec plus de 5 ans d'expérience dans le développement d'applications, j'aime relever de nouveaux défis
          et partager mes connaissances avec la communauté. En dehors du code, j'apprécie la randonnée,
          la photographie et les jeux de société.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioContainer: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  bioText: {
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default WelcomeMessage;