import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Thankyou extends NavigationMixin (LightningElement) {


    @api label;
    navigatehome() {

        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"home",
            }
        });
    }






}