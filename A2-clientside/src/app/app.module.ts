import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { SearchFundraisersComponent } from './search-fundraisers/search-fundraisers.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DonateComponent } from './donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FundraiserComponent,
    SearchFundraisersComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
