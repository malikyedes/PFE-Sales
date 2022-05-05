import { LightningElement, api } from 'lwc';
import saveTheChunkFile from '@salesforce/apex/UploadFiles.saveTheChunkFile';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const MAX_FILE_SIZE = 4500000;
const CHUNK_SIZE = 750000;

export default class Uploadfiles extends LightningElement {

    handleUploadFinished(event) {
        // Get the list of uploaded files
        let uploadedFiles = event.detail.files;    
      }

      get acceptedFormats() {
        return ['.pdf', '.png'];
    }
    






}