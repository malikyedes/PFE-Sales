import { LightningElement,api } from 'lwc';
import img from '@salesforce/resourceUrl/creditimg';
import { NavigationMixin } from 'lightning/navigation';

export default class Box extends NavigationMixin(LightningElement) {
    //w3webSlider1 = IMAGE_URL + '/ebanking.png';
    @api label;
    imgconso = img + '/creditimg/conso.jpg';
    voiture = img +'/creditimg/creditvoiture.jpg' ;
    immob = img +'/creditimg/creditimmobilier.jpg' ;
    
    navigatevoit(event) {
        alert(event.target.label) ; 
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:"creditvoit",
            }
        });
    }




}