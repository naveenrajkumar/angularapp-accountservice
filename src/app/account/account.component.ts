import { Component } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
    selector: 'app-account',
    templateUrl: './account.template.html'
})
export class AccountComponent
{
  public accounts: Account[] = [];
  public accountsObservable: Observable<Account[]>;

  constructor(private dataService: DataStorageService){
      this.accountsObservable = this.dataService.fetchAccounts();
  }
}