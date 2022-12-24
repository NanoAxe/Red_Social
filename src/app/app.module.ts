import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TestFilesComponent } from './test-files/test-files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogingRegistroModule } from './loging-registro/loging-registro.module';
import { ChatModule } from './chat/chat.module';


@NgModule({
  declarations: [
    AppComponent,
    TestFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LogingRegistroModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
