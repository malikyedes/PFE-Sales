import { LightningElement, api, wire } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
import Type_Credit__c_FIELD from "@salesforce/schema/Opportunity.Type_cr_dit__c";
import Montant_Credit__c_FIELD from "@salesforce/schema/Opportunity.Montant_Cr_dit__c";
import Duree_Credit__c_FIELD from "@salesforce/schema/Opportunity.Dur_e__c";
function att(name){
    if (name=='Durée Crédit') {
        return 'ans'
    }
    else if (name=='Montant Crédit'){
        return 'Dinar Tunisien'
    }
    else {
        return ''
    }
}

export default class oppDetails extends LightningElement {
  @api recordId;
  @wire(getRecord, {
    recordId: '$recordId',
    fields: [
        Montant_Credit__c_FIELD,
        Type_Credit__c_FIELD,
        Duree_Credit__c_FIELD,
    ]
  })
  contactRecord;

  @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
  contactObjectInfo;
  get contactFields() {
    let contactFieldsArray = [],
    key = 0;
    if (this.contactRecord.data && this.contactObjectInfo.data) {

      for (let field in this.contactRecord.data.fields) {
        if (
          Object.prototype.hasOwnProperty.call(
            this.contactRecord.data.fields,
            field
          )
        ) {
          console.log(field);
          console.log(this.contactObjectInfo.data.fields[field].label);
          contactFieldsArray.push({
            key: key++,
            apiName: field,
            label: this.contactObjectInfo.data.fields[field].label,
            value: this.contactRecord.data.fields[field].value,
            attributs : att(this.contactObjectInfo.data.fields[field].label) 
          });
        }
      }
    }
    return contactFieldsArray;
  }
}