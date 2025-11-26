import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';
import { SuggestionDetails } from './core/suggestion-details/suggestion-details';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ListSuggestion,
    SuggestionDetails,
    Home,
    Notfound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
