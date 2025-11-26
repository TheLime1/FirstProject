import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './core/home/home';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';
import { SuggestionDetails } from './core/suggestion-details/suggestion-details';
import { Notfound } from './core/notfound/notfound';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'listSuggestion', component: ListSuggestion },
  { path: 'listSuggestion/:id', component: SuggestionDetails },
  { path: '**', component: Notfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
