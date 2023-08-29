import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'caesarCipher',component: CaesarCipherComponent, children: []},
  { path: '',component: HomeComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
