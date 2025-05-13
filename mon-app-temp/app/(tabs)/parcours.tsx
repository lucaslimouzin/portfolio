import React from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ParcoursScreen = () => {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* Section Expériences */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/800/400' }} 
            style={styles.sectionImage} 
          />
        </View>
        
        <View style={styles.titleContainer}>
          <ThemedText style={styles.sectionTitle}>Expériences</ThemedText>
        </View>
        
        <ThemedView style={styles.listContainer}>
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Développeur Full Stack - TechInnovate</ThemedText>
              <ThemedText style={styles.listItemDate}>2020 - Présent</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Développement d'applications web et mobiles, utilisation de React, React Native et Node.js
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Développeur Front-end - WebSolutions</ThemedText>
              <ThemedText style={styles.listItemDate}>2018 - 2020</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Création d'interfaces utilisateur réactives et optimisation des performances
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Stage Développeur - StartupVision</ThemedText>
              <ThemedText style={styles.listItemDate}>2017 - 2018</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Développement de fonctionnalités pour une application de gestion de projets
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        
        {/* Section Scolarité */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/800/400?random=2' }} 
            style={styles.sectionImage} 
          />
        </View>
        
        <View style={styles.titleContainer}>
          <ThemedText style={styles.sectionTitle}>Scolarité</ThemedText>
        </View>
        
        <ThemedView style={styles.listContainer}>
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Master en Développement Informatique</ThemedText>
              <ThemedText style={styles.listItemDate}>2015 - 2017</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Université de Technologie - Spécialisation en développement web et mobile
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Licence en Informatique</ThemedText>
              <ThemedText style={styles.listItemDate}>2012 - 2015</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Université des Sciences - Option développement logiciel
              </ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={styles.listItem}>
            <ThemedText style={styles.listItemBullet}>•</ThemedText>
            <ThemedView style={styles.listItemContent}>
              <ThemedText style={styles.listItemTitle}>Baccalauréat Scientifique</ThemedText>
              <ThemedText style={styles.listItemDate}>2012</ThemedText>
              <ThemedText style={styles.listItemDescription}>
                Lycée International - Option Mathématiques
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    marginVertical: 20,
  },
  titleContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 30,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  listItemBullet: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
  listItemContent: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemDate: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  listItemDescription: {
    fontSize: 16,
  },
});

export default ParcoursScreen; 