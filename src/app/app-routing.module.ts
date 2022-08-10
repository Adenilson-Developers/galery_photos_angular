import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { photoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SingUpComponent } from './home/singup/singup.component';

const routes: Routes = [
  {
    path: '', component: SignInComponent, canActivate: [AuthGuard]
  },

  {
    path: 'singup', component: SingUpComponent
  },

  {
    path: 'user/:userName', component: PhotoListComponent,

    resolve: {
      photos: photoListResolver
    }
  },
  {path: 'p/add', component: PhotoFormComponent },
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
