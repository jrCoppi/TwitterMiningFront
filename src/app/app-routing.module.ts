import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "", redirectTo: "/home-page", pathMatch: "full" },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
