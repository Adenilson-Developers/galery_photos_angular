import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { photoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'user/:userName', component: PhotoListComponent,

    resolve: {
      photos: photoListResolver
    }
  },
  {path: 'p/add', 
    component: PhotoFormComponent,
    canActivate: [AuthGuard]
  },

  {path: 'p/:photoId', 
    component: PhotoDetailsComponent
  },


  {
    path: 'Not-found', component: NotFoundComponent 
  },

  {
    path: '**', redirectTo: 'Not-found' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
