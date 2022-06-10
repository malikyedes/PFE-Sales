import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ID_FIELD  from '@salesforce/schema/Opportunity.Id';
import OppStage from '@salesforce/schema/Opportunity.StageName';

export default class Updatestageaction extends LightningElement {
        
            @api recordId;
        
            @api invoke() {
        
                console.log( "Inside Invoke Method" );
                console.log( "Record Id is " + this.recordId );
                console.log( "aaaaa " );

                const fields = {};
    

                if( OppStage.fieldApiName == 'Qualification' ) {
                    this.fields[ ID_FIELD.fieldApiName ] = this.recordId;

                    this.fields[ OppStage.fieldApiName ] =='Analyse Documents';
                    const recordInput = {fields};
        
    
    
                    updateRecord( recordInput )
                    .then( () => {
            
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
                
                else if( OppStage.fieldApiName == 'Analyse Documents' ) {
                    this.fields[ ID_FIELD.fieldApiName ] = this.recordId;

                    this.fields[ OppStage.fieldApiName ] =='Proposition';

                    const recordInput = {fields};
        
    
    
                    updateRecord( recordInput )
                    .then( () => {
            
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

                else if( OppStage.fieldApiName == 'Proposition' ) {
                    this.fields[ ID_FIELD.fieldApiName ] = this.recordId;

                    this.fields[ OppStage.fieldApiName ] =='Décision ';
                    const recordInput = {fields};
        
    
    
                    updateRecord( recordInput )
                    .then( () => {
            
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

                else if( OppStage.fieldApiName == 'Décision' ) {
                    this.fields[ ID_FIELD.fieldApiName ] = this.recordId;

                    this.fields[ OppStage.fieldApiName ] =='Negotiation/Review ';
                    const recordInput = {fields};
        
    
    
                    updateRecord( recordInput )
                    .then( () => {
            
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

                console.log( fields[ OppStage.fieldApiName ])






        
               
        
            }
        
        }
        
    
    




