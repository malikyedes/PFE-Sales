import { LightningElement } from 'lwc';
import bootstrap from '@salesforce/resourceUrl/css';
import jquery from '@salesforce/resourceUrl/js';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
export default class Header extends LightningElement {

    renderedCallback() {
        Promise.all([
            loadScript(this, bootstrap + '/bootstrap.min.css'),
            loadScript(this, bootstrap + '/css/jquery-ui.css'),
            loadScript(this, bootstrap + '/owl.theme.default.min.css'),
            loadScript(this, bootstrap + '/css/jquery.fancybox.min.css'),
            loadScript(this, bootstrap + '/css/aos.css'),



            loadScript(this, jquery),
        ])
            .then(() => {
                console.log("All scripts and CSS are loaded. perform any initialization function.")
            })
            .catch(error => {
                console.log("failed to load the scripts");
            });
    }




}