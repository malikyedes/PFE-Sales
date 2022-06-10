import { LightningElement, wire,track } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import CONTACT_NAME from "@salesforce/schema/User.Contact.Name";
import stagename from "@salesforce/schema/User.Contact.Opportunity_Stage__c";
import salutation from "@salesforce/schema/User.Contact.Salutation";
import USER_ID from "@salesforce/user/Id";


export default class Pathclient extends LightningElement {
@track qualification=false;
@track analyse=false;
@track proposition=false;
@track decision=false;
@track nego=false;




  @wire(getRecord, { recordId: USER_ID, fields: [CONTACT_NAME,stagename,salutation] })
  user;

  get stagename() {
    return getFieldValue(this.user.data, stagename);
  }
  
  get Contactname(){
    return getFieldValue(this.user.data, CONTACT_NAME);
  }
  get salutation(){
    return getFieldValue(this.user.data, salutation);
  }





renderedCallback() {
  console.log(getFieldValue(this.user.data, stagename));

  if (getFieldValue(this.user.data, stagename) =="Qualification") {
    this.qualification=true ;

  }
  else if (getFieldValue(this.user.data, stagename)=="Analyse Documents") {
    this.analyse=true ;

  }

  else if (getFieldValue(this.user.data, stagename)=="Proposition") {
    this.proposition=true ;

  }

  else if (getFieldValue(this.user.data, stagename)=="Décision") {
    this.decision=true ;

  }

  else if (getFieldValue(this.user.data, stagename)=="Négotiation/Review") {
    this.nego=true ;

  }
  



}









}
