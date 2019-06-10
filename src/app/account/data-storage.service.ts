import { HttpClient } from '@angular/common/http'
import { mapToMapExpression } from '../../../node_modules/@angular/compiler/src/render3/util';
import { Injectable } from '../../../node_modules/@angular/core';
import { Transaction } from './transaction.model';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient) {}
    fetchAccounts(){
        return this.http.get<Account[]>('http://13.210.72.123:8080/accounts');              
    }
    fetchTransactions(id:number){
        return this.http.get<Transaction[]>('http://13.210.72.123:8080/account/'+id+'/transactions');              
    }
}