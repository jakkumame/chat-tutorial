import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate } from '@angular/fire/compat/auth-guard';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, } from '@angular/fire/compat/auth-guard';


const redirectLoggedIn = () => redirectLoggedInTo(['/']);
const redirectUnauthorized = () => redirectUnauthorizedTo(['/auth/signin']);


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule),
      ...canActivate(redirectUnauthorized)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
      ...canActivate(redirectLoggedIn)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
