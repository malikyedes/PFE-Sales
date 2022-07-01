public with sharing class FinanceAccountController {
    @AuraEnabled(cacheable=true)

        public static List<Compte_finaci_re__c> getdetails(String ContactId){

            //id ContactId
            return [SELECT Id , Reste_payer__c	, Balance__c from Compte_finaci_re__c where Contact__c =: ContactId];


        }
}
