public with sharing class updateoppstage {
    @AuraEnabled
    public static list <Opportunity> updateoppstage (String contactId){

        List<Opportunity> opp = [SELECT Id , StageName, contact__c  from Opportunity where contact__c =: contactId];

       for(Opportunity oppo: opp){
          oppo.StageName = 'Analyse Documents' ;
        }

update opp;

return opp ;


}

}
