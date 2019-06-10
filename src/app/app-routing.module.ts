import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AccountComponent } from './account/account.component'
import { TransactionComponent } from './account/transaction.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/accounts', pathMatch: 'full'},
    {path: 'accounts', component:AccountComponent},
    {path: 'accounts/:id', component:TransactionComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}