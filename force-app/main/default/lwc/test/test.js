import { LightningElement , api , track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import img from '@salesforce/resourceUrl/creditimg';

export default class Test extends NavigationMixin(LightningElement) {
    @api label;


    homeimgurl = img + '/creditimg/1.jpeg';

    navigateNext() {

        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"home2",
            }
        });
    }

   
}