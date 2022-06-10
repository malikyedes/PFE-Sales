import { LightningElement, api } from "lwc";
import convertToPdf from "@salesforce/apex/ContactController.convertToPdf";
import {deleteRecord} from 'lightning/uiRecordApi';

export default class PreviewFileThumbnailCard extends LightningElement {
  @api file;
  @api recordId;
  @api thumbnail;

  loading = false;
  showConvertButton = false;

  get iconName() {
    if (this.file.Extension) {
      if (this.file.Extension === "pdf") {
        return "doctype:pdf";
      }
      if (this.file.Extension === "ppt") {
        return "doctype:ppt";
      }
      if (this.file.Extension === "xls") {
        return "doctype:excel";
      }
      if (this.file.Extension === "csv") {
        return "doctype:csv";
      }
      if (this.file.Extension === "txt") {
        return "doctype:txt";
      }
      if (this.file.Extension === "xml") {
        return "doctype:xml";
      }
      if (this.file.Extension === "doc") {
        return "doctype:word";
      }
      if (this.file.Extension === "zip") {
        return "doctype:zip";
      }
      if (this.file.Extension === "rtf") {
        return "doctype:rtf";
      }
      if (this.file.Extension === "psd") {
        return "doctype:psd";
      }
      if (this.file.Extension === "html") {
        return "doctype:html";
      }
      if (this.file.Extension === "gdoc") {
        return "doctype:gdoc";
      }
    }
    this.showConvertButton = true;
    return "doctype:image";
  }

  filePreview() {
    console.log("###Click");
    const showPreview = this.template.querySelector("c-preview-file-modal");
    showPreview.show();
  }

     


  handleOnselect(event) {
    let selection = event.detail.value;
    console.log("###handle on select : " + selection);

    if (selection === "preview") {
      this.filePreview();
    } else if (selection === "delete") {
      //code to delete the file
    } else if (selection === "convert") {
      console.log("###File : " + JSON.stringify(this.file));
      this.loading = true;
      let cv = {
        Id: this.file.Id,
        Title: this.file.Title,
        ContentDocumentId: this.file.ContentDocumentId,
        ContentLocation: "S"
      };
      convertToPdf({ cv: cv })
        .then(() => {
          this.error = undefined;

          setTimeout(() => {
            const selectedEvent = new CustomEvent("refreshlist");
            this.dispatchEvent(selectedEvent);
            this.loading = false;
          }, 5000);
        })
        .catch((error) => {
          this.loading = false;
          this.error = error;
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Error while converting file",
              message: error.message,
              variant: "error"
            })
          );
        });
    }
  }
}
