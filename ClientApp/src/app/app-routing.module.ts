import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListingPageComponent } from './Pages/project-listing-page/project-listing-page.component';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { ProjectDetailsFromUrlResolver } from './costumClasses/projectDetailsFromUrlResolver';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ProjectListingPageComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent, resolve: { projectsDetails: ProjectDetailsFromUrlResolver } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
