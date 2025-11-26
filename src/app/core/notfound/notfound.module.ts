import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Notfound } from './notfound';

const routes: Routes = [
  { path: '', component: Notfound }
];

@NgModule({
  declarations: [Notfound],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotfoundModule { }
