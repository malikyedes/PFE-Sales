import { LightningElement, wire, track, api } from 'lwc';
import getdetails from "@salesforce/apex/FinanceAccountController.getdetails";
import UsId from '@salesforce/user/Id';
import getContactId from "@salesforce/apex/GetcontactId.getContactId";

export default class Balance extends LightningElement {
    @track ContactId="";
    userId = UsId;

    @wire(getContactId, {userId : '$userId'})loggedinid({error,data}) {

        if (data) {
            
            this.ContactId = data;
            console.log("1");
    
            console.log(data);
    
            
        } else if (error) {
    
            this.error = error;
    
            console.log("erreur1")
    
            console.log(JSON.stringify(error));
    
        }
    }


    @wire(getdetails, {ContactId : '$ContactId'} )
All; 

renderedCallback() {
console.log(this.All.data)



}
    
    
    



}