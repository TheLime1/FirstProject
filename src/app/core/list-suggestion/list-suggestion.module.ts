import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from './list-suggestion';

const routes: Routes = [
  { path: '', component: ListSuggestion }
];

@NgModule({
  declarations: [ListSuggestion],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ListSuggestionModule { }
