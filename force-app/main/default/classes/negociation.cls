public with sharing class negociation {

    @AuraEnabled(cacheable=true)

        public static List<N_gociation__c> getnegoetails(String ContactId){

            //id ContactId
            return [SELECT Id , Dur_e__c, Taux_propos__c ,Tentative__c,  duree_client__c , taux_client__c,Proposition_accept__c  from N_gociation__c where Contact__c =: ContactId];


        }


        @AuraEnabled
        public static N_gociation__c updatenego(N_gociation__c neg){
            N_gociation__c negociation  = new N_gociation__c() ;
            negociation = neg;
            update negociation ;
            return negociation ;
        }

            @AuraEnabled(cacheable=true)

        public static List<N_gociation__c> getnegoetail (String negoId){

            //id ContactId
            return [SELECT Id , Dur_e__c, Taux_propos__c ,Tentative__c,  duree_client__c , taux_client__c,Proposition_accept__c from N_gociation__c where Id =: negoId];


        }


}