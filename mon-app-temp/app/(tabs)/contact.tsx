import React from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:limouzin.lucas@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:0678678678');
  };

  const handleGithubPress = () => {
    Linking.openURL('https://github.com/lucaslimouzin');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contactez-moi</ThemedText>
      
      <ThemedView style={styles.contactCard}>
        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <ThemedView style={styles.iconContainer}>
            <Ionicons name="mail" size={32} color="#007AFF" />
          </ThemedView>
          <ThemedView style={styles.contactInfoContainer}>
            <ThemedText style={styles.contactLabel}>Email</ThemedText>
            <ThemedText style={styles.contactInfo}>limouzin.lucas@gmail.com</ThemedText>
          </ThemedView>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
          <ThemedView style={styles.iconContainer}>
            <Ionicons name="call" size={32} color="#34C759" />
          </ThemedView>
          <ThemedView style={styles.contactInfoContainer}>
            <ThemedText style={styles.contactLabel}>Téléphone</ThemedText>
            <ThemedText style={styles.contactInfo}>06 78 67 86 78</ThemedText>
          </ThemedView>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contactItem} onPress={handleGithubPress}>
          <ThemedView style={styles.iconContainer}>
            <Ionicons name="logo-github" size={32} color="#6e5494" />
          </ThemedView>
          <ThemedView style={styles.contactInfoContainer}>
            <ThemedText style={styles.contactLabel}>GitHub</ThemedText>
            <ThemedText style={styles.contactInfo}>github.com/lucaslimouzin</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          N'hésitez pas à me contacter pour discuter de vos projets !
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  contactCard: {
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactInfoContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default ContactScreen; 