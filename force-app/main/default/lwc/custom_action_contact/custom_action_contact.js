import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Field_doc from '@salesforce/schema/Contact.Documents_import__c';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import Opp from '@salesforce/schema/Opportunity.Id';
import Opp_c  from '@salesforce/schema/Contact.Id';

import Opp_contact from '@salesforce/schema/Opportunity.contact__c';
import updatestage from "@salesforce/apex/updateoppstage.updateoppstage";


export default class Custom_action_contact extends LightningElement {
    
        @api recordId;
    
        @api invoke() {
    
            console.log( "Inside Invoke Method" );
            console.log( "Record Id is " + this.recordId );
            const fieldsopp={} ;
            const fields = {};

            fields[ ID_FIELD.fieldApiName ] = this.recordId;
            fields[ Field_doc.fieldApiName] = true ;
    
            const recordInput = {fields};
    


            updateRecord( recordInput )
            .then( () => {

                updatestage ({ contactId: this.recordId })

                this.dispatchEvent(
                    new ShowToastEvent( {
                        title: 'Success',
                        message: 'Les documents sont présents et l opportunité passe au stage analyse des documents ',
                        variant: 'success'
                    } )
                );
            }).catch( error => {
                this.dispatchEvent(
                    new ShowToastEvent( {
                        title: 'Error updating ou chargement du record',
                        message: error.body.message,
                        variant: 'error'
                    } )
                );
            });
    
        }
    
    }
    

