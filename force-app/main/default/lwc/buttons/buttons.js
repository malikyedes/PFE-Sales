import { LightningElement,api,track,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContactId from "@salesforce/apex/GetcontactId.getContactId";
import UsId from '@salesforce/user/Id';
import getContacts from "@salesforce/apex/GetcontactId.getContacts";


export default class Buttons extends NavigationMixin (LightningElement) {


    @api label;
    @track ContactId="";
    userId = UsId;
    @track Buttontrue=false;
    @track button1=true ;
    stage="";
   @track OppStage='';

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


    @wire(getContacts, {ContactId : '$ContactId'} )wireddata({error,data}) {

        if (data) {

            console.log(data[0].Opportunity_Stage__c)
            console.log("2");
            this.OppStage=(data[0].Opportunity_Stage__c);
            console.log(this.OppStage);
            console.log('ejjaw');
            if(this.OppStage  == 'Qualification') {

                console.log('ejjaw7');

              this.Buttontrue=true
              this.button1 = false ;

            }
            
        } 
        
        
        else if (error) {
    
            this.error = error;
    
            console.log("erreur1")
    
            console.log(JSON.stringify(error));
    
        }
    
    
    
    }




    renderedCallback(){
    }

    navigateupload() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"uploadfiles",
            }
        });


    }


    navigatetransaction() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"transaction",
            }
        });


    }

    /*navigatefile() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'list',
            }
        });


    }
    */


    navigatesuivi() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"suiviecrédit",
            }
        });


    }

    }