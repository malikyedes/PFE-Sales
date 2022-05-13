import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Buttons extends NavigationMixin (LightningElement) {


    @api label;


    navigateupload() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"uploadfiles",
            }
        });


    }


    navigatetransaction() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"transaction",
            }
        });


    }

    navigatefile() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'list',
            }
        });


    }


}