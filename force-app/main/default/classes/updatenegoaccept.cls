public with sharing class updatenegoaccept {

    @AuraEnabled
    public static list <N_gociation__c> updatenegoaccept (String negoId){

        List<N_gociation__c> nego = [SELECT Id , Dur_e__c, Taux_propos__c ,Tentative__c,  duree_client__c , taux_client__c,Proposition_accept__c from N_gociation__c where Id =: negoId];

       for(N_gociation__c neg: nego){
          neg.Proposition_accept__c = true ;
        }

update nego;

return nego ;


}

}
