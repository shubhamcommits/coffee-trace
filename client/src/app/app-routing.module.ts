import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/modules/shared/guards/auth.guard';
import { NavigationGuard } from 'src/modules/shared/guards/navigation.guard';

const routes: Routes = [

  // MAIN OR DEFAULT ROUTE
  {
    path: '',
    redirectTo: 'home/login',
    pathMatch: 'full'
  },

  // 'home' ROUTE
  {
    path: 'home',
    loadChildren: () => import('src/modules/home/home.module')
      .then((module) => module.HomeModule),
    canActivate: [NavigationGuard],
  },

  // 'saas' ROUTE
  {
    path: 'saas',
    loadChildren: () => import('src/modules/saas/saas.module')
      .then((module) => module.SaasModule),
    canActivate: [AuthGuard],
  },

  // NOT FOUND ROUTE
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
