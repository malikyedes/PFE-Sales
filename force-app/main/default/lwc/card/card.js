import { LightningElement,api,track,wire } from 'lwc';
import img  from '@salesforce/resourceUrl/logopng' ;
import { NavigationMixin } from 'lightning/navigation';
import getContactId from "@salesforce/apex/GetcontactId.getContactId";
import UsId from '@salesforce/user/Id';
import getContacts from "@salesforce/apex/GetcontactId.getContacts";

export default class Card extends LightningElement {

    imageslogan = img ;
    @track ContactId="";
    userId = UsId;
    @wire(getContactId, {userId : '$userId'})loggedinid({error,data}) {

        if (data) {
            
            this.ContactId = data;
            console.log("1");
    
            console.log(data);
            console.log(this.ContactId);

            
        } else if (error) {
    
            this.error = error;
    
            console.log("erreur1")
    
            console.log(JSON.stringify(error));
    
        }
    
    
    
    }


    @wire(getContacts, {ContactId : '$ContactId'} )
    Con;

        








}