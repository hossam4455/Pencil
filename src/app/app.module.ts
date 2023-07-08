import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeOneComponent } from './iframe-one/iframe-one.component';
import { IframeTwoComponent } from './iframe-two/iframe-two.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IframeOneComponent,
    IframeTwoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxChessBoardModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
