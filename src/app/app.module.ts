import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './account/data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TransactionComponent } from './account/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TransactionComponent,
    HeaderComponent ],
  imports: [
    BrowserModule, HttpClientModule ,AppRoutingModule],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
