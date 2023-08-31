import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'caesarCipher',component: CaesarCipherComponent,children: [],
    data:{
      title:'シーザー暗号（カエサル式暗号/シフト暗号） エンコーダー/デコーダー',
      description:'シーザー暗号（カエサル式暗号/シフト暗号）をエンコード/デコード',
      twittercard:'summary',
      twittersite:'@daigo',
      twitterimage:'../assets/WC.png',
    }
  },
  { path: '',component: HomeComponent, children: [],
  data:{
    title:'With Crypto 暗号紹介/エンコード・デコード',
    description:'暗号の紹介/暗号のエンコーダー・デコーダー',
    twittercard:'summary',
    twittersite:'@daigo',
    twitterimage:'../assets/WC.png',
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
