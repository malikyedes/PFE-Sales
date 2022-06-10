public with sharing class GetcontactId {

    
    @AuraEnabled(cacheable=true)
    public static String getContactId (String userId){
         List<User> users = [Select ContactId from User where Id =: userId];
          Id contactid = users.get(0).ContactId;
          return contactid;}
        
          @AuraEnabled(cacheable=True)
          public static List<Contact> getContacts(String ContactId){
              return [SELECT Id, firstName, lastName, accountId,Opportunity_Stage__c FROM Contact where Id=: ContactId];
          }
      



}
