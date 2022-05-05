import { LightningElement,track,api } from 'lwc';
import uId from '@salesforce/user/Id';
const Trans_URL = 'https://transaction-salesforce-api.herokuapp.com/api/transaction/find/';

export default class Transaction extends LightningElement {
    datedebut;
    datefin ; 
    transaction = {};
    @api transactions = "";
    datedeb ; 
    datefin ; 
    userId = uId;


    updatedatedeb(event) {
        this.datedeb = event.target.value;
    }
    updatedatefin(event) {
        this.datefin = event.target.value;
    }


    get transactionPopulated() {
        return this.transaction && this.transaction.id;
    }

    get transURL() {
        return 'https://transaction-salesforce-api.herokuapp.com/api/transaction/find/' + this.userId + '/2022-04-21/20220-4-22/SCHEDULED';
    }

    getGithubStats() {
        this.transaction = {} ; 

        console.log(this.userId);
        console.log('https://transaction-salesforce-api.herokuapp.com/api/transaction/find/' + this.userId +'/'+this.datedeb +'/'+this.datefin +'/SCHEDULED');


        if(this.datedeb&&this.datefin) {
            fetch('https://transaction-salesforce-api.herokuapp.com/api/transaction/find/' + this.userId +'/'+this.datedeb +'/'+this.datefin +'/SCHEDULED' , { method:"GET" , headers:{ Accept : "application/json" }} )
            .then(response => {
                console.log(response);
                if(response.ok) {
                    return response.json();
                } else {
                    throw Error(response);
                }
            })
            .then(transinfo => {
                console.log(transinfo);
                console.log(transinfo.amount);          
                this.transactions=transinfo;
                console.log("transactions");
                console.log(this.transactions);
                console.log("transactioneeet");

                
                   this.transaction = { 
                    id: transinfo[0].id,
                    sfid:transinfo[0].sfid,
                    description: transinfo[0].decription,
                    amount: transinfo[0].amount,
                    status: transinfo[0].status,
                    date: transinfo[0].date,
                    fromAccount: transinfo[0].fromAccount,
                    toAccount: transinfo[0].toAccount,
                };
                console.log(this.transaction) ;
                console.log(this.transaction.id) ;
                console.log(this.transaction.amount) ;


            })
            .catch(error => console.log(error))
            

        }
         
        
    }








}