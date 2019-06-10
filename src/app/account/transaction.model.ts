export class Transaction {
    public id: number;
    public currency: string;
    public amount: number;
    public transactionDate: Date;
    public narrative: string;
    public transactionType: string;
    private accountNumber: number;

    constructor(id: number, currency: string, amount: number, transactionDate: Date,narrative: string, transactionType: string,accountNumber: number){
        this.accountNumber = accountNumber;
        this.currency = currency;
        this.transactionDate = transactionDate;
        this.narrative = narrative;
        this.accountNumber = accountNumber;
        this.transactionType = this.transactionType;
        this.amount = amount;
    }
}