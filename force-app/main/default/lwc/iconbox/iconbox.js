import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import slick  from '@salesforce/resourceUrl/slick' ; 
import formicon from '@salesforce/resourceUrl/formicon';

import jQuery  from '@salesforce/resourceUrl/jQuery' ; 
export default class Iconbox extends LightningElement {
    formiconurl = formicon;


    renderedCallback() {
       
        loadScript(this, jQuery)
           
                 .then(e => {
                                         loadScript(this,jQuery)
                                         loadScript(this,slick)


                .then(() => {

                   const carousel = this.template.querySelector(".box-carousel");

                    window.$(carousel).slick({
                        dots: false,
                        arrows: false,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        
                                    
                    });

            }) ;
        });

    }






}