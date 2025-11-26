import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  standalone: false,
  templateUrl: './suggestion-details.html',
  styleUrl: './suggestion-details.css',
})
export class SuggestionDetails implements OnInit {
  suggestion: Suggestion | undefined;
  suggestionId: number | null = null;

  // Mock data - same as in ListSuggestion component
  private suggestions: Suggestion[] = [
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
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'id avec le service ActivatedRoute
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.suggestionId = +idParam;
        this.suggestion = this.suggestions.find(s => s.id === this.suggestionId);
      }
    });
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

  goBackToList(): void {
    this.router.navigate(['/listSuggestion']);
  }
}

