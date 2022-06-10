import { LightningElement,api,wire, track } from 'lwc';
import { getRecord } from "lightning/uiRecordApi"
const fieldsArray = [
    "Contact.Name",
    "Contact.MailingStreet",
    "Contact.MailingCity",
    "Contact.MailingState",
    "Contact.MailingPostalCode",
    "Contact.MailingCountry",
];
export default class MapLwc extends LightningElement {
    @api recordId;
    @track mapMarkers = [];
    contactName
    MailingStreet
    MailingCity
    MailingState
    MailingCountry
    MailingPostalCode
    @wire(getRecord,{recordId:"$recordId", fields: fieldsArray})
    wiredRecord({error,data}){
        if(data){
            JSON.stringify("data from contact by wire : ",data);
            this.MailingStreet = data.fields.MailingStreet.value;
            this.MailingCity = data.fields.MailingCity.value;
            this.MailingState = data.fields.MailingState.value;
            this.MailingCountry = data.fields.MailingCountry.value;
            this.MailingPostalCode = data.fields.MailingPostalCode.value;
            this.contactName = data.fields.Name.value;

            const marker = {
                location:{
                    Street : this.MailingStreet ? this.MailingStreet : '',
                    City : this.MailingCity ? this.MailingCity : '',
                    State : this.MailingState ? this.MailingState : '',
                    Street : this.MailingCountry ? this.MailingCountry : '',
                },
                title: this.contactName ? this.contactName : ""
            };
            this.mapMarkers = [marker];
            this.error = undefined;
        }else if(error){
            this.mapMarkers = undefined;
            this.error =error;
        }

    }
}