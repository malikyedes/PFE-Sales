({
    getEMI : function(component, detail) {
        if(detail =="EMI"){
            document.getElementById("emiDiv").style.display = "block";
            document.getElementById("addchart").style.display = "none";
        }else if(detail =="Monthly"){
            document.getElementById("emiDiv").style.display = "none";
            document.getElementById("addchart").style.display = "block";
        }
        var loanAmt = document.getElementById('loanAmt').value;
        var months = document.getElementById('months').value;
        var rate = document.getElementById('rate').value;
         
        if (loanAmt == null || loanAmt.length == 0 || months == null || months.length == 0 || rate == null || rate.length == 0) {
            document.getElementById("err").style.display = "block";            
        } else {
            document.getElementById("err").style.display = "none";                           
            var rate1 = rate / 1200;
            var emi= loanAmt * rate1 / (1 - (Math.pow(1 / (1 + rate1), months)));//Math.round(loanAmt * rate1 / (1 - (Math.pow(1 / (1 + rate1), months))) * 100) / 100;
            document.getElementById('EMI').innerHTML = Math.round(emi);
            document.getElementById('interestP').innerHTML = Math.round(emi * months) ;//Math.round((emi * months)) ;
            document.getElementById('totalP').innerHTML = Math.round((document.getElementById('interestP').innerHTML) * 1 - loanAmt * 1);//Math.round(((document.getElementById('interestP').innerHTML) * 1 - loanAmt * 1) * 100) / 100;
             
            var tile='<ul class="slds-list--vertical slds-has-cards">';
            var balance=0;
            var i = 0 ;
            for(i=1; i<=months; i++){                    
                if(i==1){
                    balance = loanAmt;                       
                }                       
                var interest = balance* (rate/100.0)/12;//(Math.round((balance* (rate/100.0)/12)*100)/100).toFixed(2);
                var Principal = emi - interest;//(Math.round((emi - interest)*100)/100).toFixed(2);
                balance = balance - Principal;//(Math.round((balance - Principal)*100)/100).toFixed(2);
                 
                tile += '<li class="slds-list__item">';
                tile += '<div class="slds-tile slds-tile--board">';
                tile += '<p class="slds-tile__title slds-truncate"><a href="#">Mois - '+ i +' </a></p>';
                tile += '<div class="slds-tile__detail">';
                tile += '<p class="slds-text-heading--medium">Versement - '+ Math.round(emi) +'TND'+'</p>';
                tile += '<p class="slds-truncate"><a href="#">Interet - '+ Math.round(interest) +'TND'+'</a></p>';
                tile += '<p class="slds-truncate">Principale - '+ Math.round(Principal) +'TND'+'</p>';
                tile += '<p class="slds-truncate">Balance - '+ Math.round(balance) +'TND'+'</p>';
                tile += '</div>';
                tile += '</div>';
                tile += '</li>';
            }
            tile += '</ul>';
            document.getElementById("addchart").innerHTML = tile;            
        }   
    }
})