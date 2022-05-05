public with sharing class LeadController {
   
    @AuraEnabled
    public static String insertRecord( SObject record ) {   
        
        try {
            
            insert record;
            return 'Success';
            
        } Catch( Exception e ) {
            
            return 'Failed';
            
        }
        
    }






}
