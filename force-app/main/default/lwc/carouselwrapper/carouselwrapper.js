
import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/bank_assets'
export default class carouselwrapper extends LightningElement {
    options = { autoScroll: true, autoScrollTime: 2 };

    slides= [
        {
            image:`${CAROUSEL_IMAGES}/DemandeCreditBan.jpg`,
            heading:'Demande credit en ligne ',
            description:'Faire votre demande de credit en deux clics'
        },
        {
            image:`${CAROUSEL_IMAGES}/ebanking1.jpg`,
            heading:'Caption Two',
            description:'You can add description of second slide here'
        },
        {
            image:`${CAROUSEL_IMAGES}/DemandeCreditBan.jpg`,
            heading:'Caption Three',
            description:'You can add description of third slide here'
        }
    ]
}



