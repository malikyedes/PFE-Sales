import { LightningElement } from 'lwc';
import insertRecord from '@salesforce/apex/LeadController.insertRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LeadCreationForm extends LightningElement {

    verifiedBool = true;
    captchaResponse
    
    handleUpdate( event ) {

        console.log( 'Updated value is ' + JSON.stringify( event.detail ) );
        this.verifiedBool = event.detail.value;

        if ( event.detail.response ) {

            console.log( 'Response is ' + event.detail.response );
            this.captchaResponse = event.detail.response;

        }

    }

    handleSubmit( event ) {

        let fields = event.detail.fields;
        fields = Object.assign( { 'sobjectType': 'Lead' }, fields );
        console.log( 'Fields are ' + JSON.stringify( fields ) );
       // console.log( 'Captcha Response is ' + JSON.stringify( this.captchaResponse ) );
        event.preventDefault();

        insertRecord( { record : fields } )
        .then( result => {

            this.isLoaded = false;
            window.console.log('result ===> '+result);
            this.strMessage = result;
            this.dispatchEvent(
                new ShowToastEvent( {
                    title: 'Lead Submission Result',
                    message: 'Lead ' + ( result.includes( 'Success' ) ? '' : 'not ' ) + 'Submitted Successfully',
                    variant: result.includes( 'Success' ) ? 'success' : 'error',
                    mode: 'sticky'
                } )
            );

        })
        .catch( error => {

            this.dispatchEvent(
                new ShowToastEvent( {
                    title: 'Error',
                    message: JSON.stringify( error ),
                    variant: 'error',
                    mode: 'sticky'
                } )
            );     

        } )

    }

}
