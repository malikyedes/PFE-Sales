import { LightningElement, track } from 'lwc';  
import saveRecord from '@salesforce/apex/LoanController.saveLoan';  
import { NavigationMixin } from 'lightning/navigation';  
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  
const MAX_FILE_SIZE = 100000000; //10mb  


export default class Formwithfile extends NavigationMixin(LightningElement) {

    @track firstname;  
    @track lastname;  
    @track email;  

    @track phone;  
    @track company;  
    uploadedFiles = []; file; fileContents; fileReader; content; fileName  
    onNameChange(event) {  
      this.name = event.detail.value;  
    }  
    onPhoneChange(event) {  
      this.phone = event.detail.value;  
    }  
    onamountChange(event) {  
      this.amount = event.detail.value;  
    }  
    onFileUpload(event) {  
      if (event.target.files.length > 0) {  
        this.uploadedFiles = event.target.files;  
        this.fileName = event.target.files[0].name;  
        this.file = this.uploadedFiles[0];  
        if (this.file.size > this.MAX_FILE_SIZE) {  
          alert("File Size Can not exceed" + MAX_FILE_SIZE);  
        }  
      }  
    }  
    saveContact() {  
      this.fileReader = new FileReader();  
      this.fileReader.onloadend = (() => {  
        this.fileContents = this.fileReader.result;  
        let base64 = 'base64,';  
        this.content = this.fileContents.indexOf(base64) + base64.length;  
        this.fileContents = this.fileContents.substring(this.content);  
        this.saveRecord();  
      });  
      this.fileReader.readAsDataURL(this.file);  
    }  
    saveRecord() {  
      var con = {  
        'sobjectType': 'Lead',  
        'FirstName': this.firstname,
        'LastName': this.lastname,  
        'Phone': this.phone, 
        'Company': this.company, 
        'Email': this.email  
      }  
      saveRecord({  
        contactRec: con,  
        file: encodeURIComponent(this.fileContents),  
        fileName: this.fileName  
      })  
        .then(conId => {  
          if (conId) {  
            this.dispatchEvent(  
              new ShowToastEvent({  
                title: 'Success',  
                variant: 'success',  
                message: 'Loan Successfully created',  
              }),  
            );  
              
          }  
        }).catch(error => {  
          console.log('error ', error);  
        });  
    }  
  



}