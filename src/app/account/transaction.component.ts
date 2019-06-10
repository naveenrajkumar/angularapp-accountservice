import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from '../../../node_modules/rxjs';
import { Transaction } from './transaction.model';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-account-transactions',
    templateUrl: './transactions.template.html'
})
export class TransactionComponent implements OnInit
{
  public accounts: Transaction[] = [];
  public transactionsObservable: Observable<Transaction[]>;
//   private dataService: DataStorageService;
  private accountNumber : number;

  constructor(private dataService: DataStorageService, private route:ActivatedRoute, private router: Router){
    //   this.transactionsObservable = this.dataService.fetchTransactions(136056165);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.accountNumber = +params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
        this.transactionsObservable = this.dataService.fetchTransactions(this.accountNumber);
     });

    // this.transactionsObservable = this.dataService.fetchTransactions(136056165);
  }

}