import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { EncoderDecoderComponent } from './encoder-decoder/encoder-decoder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

// lazy load
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncoderDecoderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    CaesarCipherComponent,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    CaesarCipherComponent,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
