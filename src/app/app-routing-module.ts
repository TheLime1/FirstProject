import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'listSuggestion', 
    loadChildren: () => import('./core/list-suggestion/list-suggestion.module').then(m => m.ListSuggestionModule) 
  },
  { 
    path: 'listSuggestion/:id', 
    loadChildren: () => import('./core/suggestion-details/suggestion-details.module').then(m => m.SuggestionDetailsModule) 
  },
  { 
    path: '**', 
    loadChildren: () => import('./core/notfound/notfound.module').then(m => m.NotfoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
