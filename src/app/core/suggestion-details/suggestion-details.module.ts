import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionDetails } from './suggestion-details';

const routes: Routes = [
  { path: '', component: SuggestionDetails }
];

@NgModule({
  declarations: [SuggestionDetails],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SuggestionDetailsModule { }
