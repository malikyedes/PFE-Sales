({
    SaveSignature:function(component,event,helper){
        var isblank=helper.isCanvasBlank(document.getElementById('divsign'));
        if(!isblank){            
            helper.saveSignature(component);
        }
        else{
            alert('Please Sign in the box');
        }
    },       
    showSpinner: function(component, event, helper) {        
        component.set("v.Spinner", true); 
    },
    
    hideSpinner : function(component,event,helper){        
        component.set("v.Spinner", false);
    },
 })
