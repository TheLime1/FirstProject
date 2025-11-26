import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  standalone: false,
  templateUrl: './list-suggestion.html',
  styleUrl: './list-suggestion.css',
})
export class ListSuggestion {
  favoriteSuggestions: Suggestion[] = [];
  likedSuggestionIds: Set<number> = new Set();
  searchTerm: string = '';
  filteredSuggestions: Suggestion[] = [];
  
  suggestions: Suggestion[] = [
    {
    id: 1,
    title: 'Organiser une journée team building',
    description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
    category: 'Événements',
    date: new Date('2025-01-20'),
    status: 'acceptee',
    likes: 0
    },
    {
    id: 2,
    title: 'Améliorer le système de réservation',
    description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
    category: 'Technologie',
    date: new Date('2025-01-15'),
    status: 'refusee',
    likes: 0
    },
    {
    id: 3,
    title: 'Créer un système de récompenses',
    description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
    category: 'Ressources Humaines',
    date: new Date('2025-01-25'),
    status: 'refusee',
    likes: 0
    },
    {
    id: 4,
    title: 'Moderniser l\'interface utilisateur',
    description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
    category: 'Technologie',
    date: new Date('2025-01-30'),
    status: 'en_attente',
    likes: 0
    },
    {
    id: 5,
    title: 'Formation à la sécurité informatique',
    description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
    category: 'Formation',
    date: new Date('2025-02-05'),
    status: 'acceptee',
    likes: 0
    }];

  constructor() {
    this.filteredSuggestions = [...this.suggestions];
  }

  toggleLike(suggestion: Suggestion) {
    if (this.isLiked(suggestion)) {
      // Unlike: decrement likes and remove from liked set
      if (suggestion.likes > 0) {
        suggestion.likes--;
      }
      this.likedSuggestionIds.delete(suggestion.id);
    } else {
      // Like: increment likes and add to liked set
      suggestion.likes++;
      this.likedSuggestionIds.add(suggestion.id);
    }
  }

  isLiked(suggestion: Suggestion): boolean {
    return this.likedSuggestionIds.has(suggestion.id);
  }

  addToFavorites(suggestion: Suggestion) {
    if (!this.isInFavorites(suggestion)) {
      this.favoriteSuggestions.push(suggestion);
    }
  }

  removeFromFavorites(suggestion: Suggestion) {
    this.favoriteSuggestions = this.favoriteSuggestions.filter(fav => fav.id !== suggestion.id);
  }

  isInFavorites(suggestion: Suggestion): boolean {
    return this.favoriteSuggestions.some(fav => fav.id === suggestion.id);
  }

  filterSuggestions() {
    if (!this.searchTerm.trim()) {
      this.filteredSuggestions = [...this.suggestions];
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();
    this.filteredSuggestions = this.suggestions.filter(suggestion => 
      suggestion.title.toLowerCase().includes(term) ||
      suggestion.category.toLowerCase().includes(term)
    );
  }

  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      'acceptee': 'Acceptée',
      'refusee': 'Refusée',
      'en_attente': 'En attente'
    };
    return statusLabels[status] || status;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
