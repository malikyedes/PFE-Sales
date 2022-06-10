import { LightningElement, api, wire } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";

export default class Decision extends LightningElement {
    @api recordId;
    
    @wire(getRecord, {
    recordId: '$recordId',
    fields: [
        'Opportunity.approved__c'
    ]
  })
    Opportunity;
  get name() {
    return this.Opportunity.data.fields.approved__c.value;
}
}
  

