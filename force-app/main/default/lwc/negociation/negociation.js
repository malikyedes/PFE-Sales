import { LightningElement, wire, track, api } from 'lwc';
import getnegoetails from "@salesforce/apex/negociation.getnegoetails";
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
import getContactId from "@salesforce/apex/GetcontactId.getContactId";
import UsId from '@salesforce/user/Id';

import getnegoetail from "@salesforce/apex/negociation.getnegoetail";
import updateNego from "@salesforce/apex/negociation.updatenego";
import updataccept from "@salesforce/apex/updatenegoaccept.updatenegoaccept";


export default class Negociation extends LightningElement {

@track ContactId="";
 userId = UsId;

@track bShowModal = false;
@track error;
@track modal=false ; 
@track Buttontrue=true;
@track Buttonaccept=true;
@track text= false;
tentative=0 ; 
@track negociation ;
@api NewNego ={};
@api nego ={};
@api departmentRecoredId ;
@api negaccept={};





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

@wire(getnegoetails, {ContactId : '$ContactId'} )
Allnego; 

connectedCallback() {
    
    this.tentative= this.Allnego.data[0].Tentative__c ;
    if (this.Allnego.data[0].Proposition_accept__c== true ) 
    {
       this.text=true;
    
    }

    if (this.tentative > 3 || this.Allnego.data[0].Proposition_accept__c== true ) 
    {
       this.Buttonaccept=false;
        this.Buttontrue=false;
    
    }
    }


modalaccept(){
    updataccept ({ negoId: this.Allnego.data[0].Id })
    .then(result => {
        this.nego = this.Allnego.data[0];



        console.log('test', this.nego)
        console.log('aaaaaaa', this.nego.Id)

        console.log('aaaaaa', this.nego.Proposition_accept__c)

    

          

        console.log('test1', result[0])
        
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: ' Vous avez accepté notre proposition nous allons vous contacter prochainement ..!',
                variant: 'success',
            })
        ) 


        
  });


}




handlemodal(){
console.log(this.Allnego.data[0].Id)
    getnegoetail ({ negoId: this.Allnego.data[0].Id })
    .then(result => {
        this.nego = this.Allnego.data[0];

        console.log('test', this.nego)
        console.log('test', this.nego.Id)

        this.NewNego.Id = this.nego.Id;


        console.log('test1', result[0])
        
        console.log('hahah',this.NewNego.Id) ;  

        
  });

  
    this.bShowModal = true;


}


closeModal() {
    this.bShowModal = false;
    this.modal=false ; 
}

handleTaux(event) {
    this.NewNego.taux_client__c = event.target.value;
  }


  handledureeEdit(event) {
    this.NewNego.duree_client__c = event.target.value;
    }




  submitDetailsEdit() {
     console.log('hi', this.NewNego.taux_client__c)
     console.log('hi', this.NewNego.duree_client__c)
        updateNego({ neg: this.NewNego })
            .then(result  => {
                this.departmentRecoredId = result.Id;
                window.console.log('departmentRecoredId##Vijay2 ' + this.departmentRecoredId);  
                console.log('success' + result);

                console.log('tested',this.nego);
                this.NewNego = {}
                console.log('teste',this.NewNego);
                this.bShowModal = false;
                this.modal = false ; 
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: ' Votre proposition est envoyé avec succés..!',
                        variant: 'success',
                    }),
                );
               
                
                
            });
    }












handleSubmit(event){
    event.preventDefault();
    this.template.querySelector('lightning-record-edit-form').submit(event.detail.fields);
    this.bShowModal = false;
    this.modal = false ; 
    this.dispatchEvent(new ShowToastEvent({
        title: 'Success!!',
        message:'Proposition émis avec succés',
        variant: 'success'
    }),);
}

handleSuccess() {
    return refreshApex(this.wiredContactsResult);
}













}