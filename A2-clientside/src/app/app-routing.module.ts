import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SearchFundraisersComponent } from "./search-fundraisers/search-fundraisers.component";
import { FundraiserComponent } from "./fundraiser/fundraiser.component";
import { DonateComponent } from "./donate/donate.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search-fundraisers',
    component: SearchFundraisersComponent
  },
  {
    path: 'fundraiser/:fundraiserId',
    component: FundraiserComponent
  },
  {
    path: 'donate/:fundraiserId',
    component: DonateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
