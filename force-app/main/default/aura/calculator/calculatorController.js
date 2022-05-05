({
    getEMIDetail : function(component, event, helper) {
        helper.getEMI(component, "EMI");
    },
    getEMIMonthly : function(component, event, helper) {
        helper.getEMI(component, "Monthly");
    },
    reset : function(component, event, helper) {
        document.getElementById("emiDiv").style.display = "none";
        document.getElementById("addchart").style.display = "none";
        document.getElementById('loanAmt').value="";
        document.getElementById('months').value="";
        document.getElementById('rate').value="";
    },    
 
})