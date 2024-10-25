import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


const routes: Routes = [
  {
    path: '',
    component: StopwatchComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
