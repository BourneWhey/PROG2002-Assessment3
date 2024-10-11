import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { SearchFundraisersComponent } from './search-fundraisers/search-fundraisers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FundraiserComponent,
    SearchFundraisersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
