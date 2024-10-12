import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SearchFundraisersComponent } from "./search-fundraisers/search-fundraisers.component";
import { FundraiserComponent } from "./fundraiser/fundraiser.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
