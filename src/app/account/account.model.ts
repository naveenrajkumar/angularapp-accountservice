export class Account {
    public accountNumber: number;
    public accountName: string;
    public accountType: string;
    public accountCurrency: string;
    public availableBalance: number;

    constructor(accountNumber: number, accountName: string, accountType: string, accountCurrency: string,availableBalance: number){
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountType = accountType;
        this.accountCurrency = accountCurrency;
        this.availableBalance = availableBalance
    }
}