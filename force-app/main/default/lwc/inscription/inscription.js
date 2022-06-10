import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import leadFirstName from '@salesforce/schema/Lead.FirstName';
import leadLastName from '@salesforce/schema/Lead.LastName';
export default class inscription extends LightningElement {
    currentStep="1";
        handleSuccess( event ) {
        const toastEvent = new ShowToastEvent({
            title: 'Case Updated',
            message: 'Case Updated Successfully!!!',
            variant: 'success' 
        });
        this.dispatchEvent( toastEvent );
        }
   
    handleChange(event) {
        this.value = event.detail.value;
    }
    showcons(event){
        this.template.querySelector('div.consomation').classList.remove('slds-hide');
        this.template.querySelector('div.logement').classList.add('slds-hide');
        this.template.querySelector('div.voiture').classList.add('slds-hide');
        this.template.querySelector('button.btncons').classList.add('highlight');
        this.template.querySelector('button.btnvoiture').classList.remove('highlight');
        this.template.querySelector('button.btnlog').classList.remove('highlight');
        this.template.querySelector('div.bydefault').classList.add('slds-hide');
        this.template.querySelector('select.loantype').value="Consommation";
       
    }
    showvoiture(event){
        this.template.querySelector('div.voiture').classList.remove('slds-hide');
        this.template.querySelector('div.consomation').classList.add('slds-hide');
        this.template.querySelector('div.logement').classList.add('slds-hide');
        this.template.querySelector('button.btnvoiture').classList.add('highlight');
        this.template.querySelector('button.btncons').classList.remove('highlight');
        this.template.querySelector('button.btnlog').classList.remove('highlight');        
        this.template.querySelector('div.bydefault').classList.add('slds-hide');
        this.template.querySelector('select.loantype').value="Voiture";
    }

    showlog(event){
        this.template.querySelector('div.consomation').classList.add('slds-hide');
        this.template.querySelector('div.logement').classList.remove('slds-hide');
        this.template.querySelector('div.voiture').classList.add('slds-hide');
        this.template.querySelector('button.btnlog').classList.add('highlight');
        this.template.querySelector('button.btnvoiture').classList.remove('highlight');  
        this.template.querySelector('button.btncons').classList.remove('highlight');
        this.template.querySelector('div.bydefault').classList.add('slds-hide');
        this.template.querySelector('select.loantype').value="Immobilier";
    }

    goBackToStepOne() {
        this.currentStep = '1';
        this.template.querySelector('div.stepTwo').classList.add('slds-hide');
        this.template
            .querySelector('div.stepOne')
            .classList.remove('slds-hide');
    }
 

    goToStepTwo() {

        
        if(!this.template.querySelector('[name="first_name"]').value||!this.template.querySelector('[name="last_name"]').value
        ||!this.template.querySelector('[name="00N8d000006itT0"]').value||!this.template.querySelector('[name="00N8d00000AnA2K"]').value
        ||!this.template.querySelector('[name="email"]')
        ||!this.template.querySelector('[name="mobile"]').value||!this.template.querySelector('[name="city"]').value
        ||!this.template.querySelector('[name="state"]').value
        ) 
        
        
        {      
            const toastEvent = new ShowToastEvent({
                title: '',
                message: 'Veuillez remplir les champs requis',
                variant: 'error' 
            });
            this.dispatchEvent( toastEvent );        }
            
        else {

            const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email=this.template.querySelector('[name="email"]');
        let emailVal=email.value;
        if (emailVal.match(emailRegex) ){
             
            this.currentStep = '2';
            this.template.querySelector('div.stepOne').classList.add('slds-hide');
             this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');            
         }

         else {
            const toastEvent = new ShowToastEvent({
                title: '',
                message: 'Veuillez entrer une addresse E-Mail valide',
                variant: 'error' 
            });
            this.dispatchEvent( toastEvent );

         }
        
        }

        
       
        this.template.querySelector('[name="00N8d000006itSq"]').value;
        this.template.querySelector('[name="00N8d000006itSl"]').value;
        this.template.querySelector('[name="00N8d000006itSv"]').value;      
    }
    goBackToStepTwo() {
        this.currentStep = '2';

        this.template.querySelector('div.stepThree').classList.add('slds-hide');
        this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');
       
    }
    goToStepThree() {      
        if (!this.template.querySelector('[name="00N8d000006itSb"]').value || !this.template.querySelector('[name="00N8d00000An3gb"]').value ||
            !this.template.querySelector('[name="00N8d000006itOO"]').value || !this.template.querySelector('[name="00N8d000006itSg"]').value ||
             !this.template.querySelector('[name="00N8d000006jBq8"]').value  )
            {
                const toastEvent = new ShowToastEvent({
                    title: '',
                    message: 'Veuillez remplir les champs requis',
                    variant: 'error' 
                });
                this.dispatchEvent( toastEvent );
            }

        else{
                this.currentStep = '3';
                this.template.querySelector('div.stepTwo').classList.add('slds-hide');
                this.template
                    .querySelector('div.stepThree')
                    .classList.remove('slds-hide');
            }
    }
       
	    /*handleChangeValidation(event){
        let getFirstName = event.target.name;
        let getLstName = event.target.name;
        let getUserEmail = event.target.name;
        let getUserPhone = event.target.name;
        let getStatusActive = event.target.name;
        let getCityName = event.target.name;
   
   
        if(getFirstName === "first_name"){
            let firstName = this.template.querySelector('.first_name');
            let firstNameVal = firstName.value;
            if(!firstNameVal){
              firstName.setCustomValidity('Please Enter the First Name');
            }else{
              firstName.setCustomValidity('');
            }
            firstName.reportValidity();
        }
   
   
        
   
   
      }


    */
    
}