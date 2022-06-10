({
    isCanvasBlank:function (canvas) {
           var blank = document.createElement('canvas');
           blank.width = canvas.width;
           blank.height = canvas.height;
           return canvas.toDataURL() == blank.toDataURL();
       },
       
       saveSignature:function(component){        
           var action = component.get("c.saveSign");
           var vSplit=document.getElementById("divsign").toDataURL().split(',')[1]; 
           //var vSplit=document.getElementById("divsign").toDataURL().replace(/^data:image\/(png|jpg);base64,/, "");
           action.setParams({                                  
               base64Data:encodeURIComponent(vSplit),
               contentType:"image/png"
           });
           action.setCallback(this, function(e) {          
               if(e.getState()=='SUCCESS'){
                  alert('Signature Saved Successfully!')
               }  
               else{
                   alert(JSON.stringify(e.getError()));
               }
           });
           $A.enqueueAction(action); 
       },
    }) 
   