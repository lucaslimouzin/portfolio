import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  demoLink: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pokéroguelike',
    image: 'https://picsum.photos/800/400?random=10',
    description: 'Jeu de combat Pokémon inspiré des jeux roguelike. Choisissez votre Pokémon, combattez pour progresser, collectez de l\'or et améliorez vos statistiques.',
    demoLink: 'https://lucaslimouzin.github.io/pokeroguelike/',
    repoLink: 'https://github.com/lucaslimouzin/pokeroguelike'
  },
  {
    id: 2,
    title: 'Réseau Social de Voyage',
    image: 'https://picsum.photos/800/400?random=11',
    description: 'Plateforme de partage d\'expériences de voyage avec fonctionnalités de géolocalisation, albums photos et recommandations personnalisées basées sur les intérêts de l\'utilisateur.',
    demoLink: 'https://lucaslimouzin.github.io/pokeroguelike/',
    repoLink: 'https://github.com/lucaslimouzin/pokeroguelike'
  },
  {
    id: 3,
    title: 'Dashboard Analytique',
    image: 'https://picsum.photos/800/400?random=12',
    description: 'Interface de visualisation de données avec graphiques interactifs, tableaux de bord personnalisables et rapports en temps réel pour le suivi des KPIs business.',
    demoLink: 'https://lucaslimouzin.github.io/pokeroguelike/',
    repoLink: 'https://github.com/lucaslimouzin/pokeroguelike'
  },
  {
    id: 4,
    title: 'Application de Fitness',
    image: 'https://picsum.photos/800/400?random=13',
    description: 'Application de suivi d\'entraînement avec plans personnalisés, analyse de progression et intégration avec des objets connectés pour un suivi complet de la santé et du fitness.',
    demoLink: 'https://lucaslimouzin.github.io/pokeroguelike/',
    repoLink: 'https://github.com/lucaslimouzin/pokeroguelike'
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <ThemedView style={styles.projectCard}>
      <Image 
        source={{ uri: project.image }} 
        style={styles.projectImage} 
      />
      <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
      <ThemedText style={styles.projectDescription}>{project.description}</ThemedText>
      
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL(project.demoLink)}
        >
          <ThemedText style={styles.buttonText}>Voir la démo</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={() => Linking.openURL(project.repoLink)}
        >
          <ThemedText style={styles.buttonText}>GitHub Repo</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const ProjetsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.headerTitle}>Mes Projets</ThemedText>
      
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  projectCard: {
    borderRadius: 10,
    marginBottom: 30,
    padding: 15,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProjetsScreen; 