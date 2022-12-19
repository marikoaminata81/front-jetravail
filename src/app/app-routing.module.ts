import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'ajout-region',
    loadChildren: () => import('./ajout-region/ajout-region.module').then( m => m.AjoutRegionPageModule)
  },
  {
    path: 'ajout-user',
    loadChildren: () => import('./ajout-user/ajout-user.module').then( m => m.AjoutUserPageModule)
  },
  {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },
  {
    path: 'liste-region',
    loadChildren: () => import('./liste-region/liste-region.module').then( m => m.ListeRegionPageModule)
  },
  {
    path: 'details-region',
    loadChildren: () => import('./details-region/details-region.module').then( m => m.DetailsRegionPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
