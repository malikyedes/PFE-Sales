import formicon from '@salesforce/resourceUrl/formicon';
import { LightningElement, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class Img extends NavigationMixin(LightningElement)  {

    formiconurl = formicon;

    @api label;
    navigateNext(event) {
        alert(event.target.label) ; 

        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"home2",
            }
        });
    }

}