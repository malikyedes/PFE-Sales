public class opportinitiesListViewHelper {
	@AuraEnabled(cacheable=True)
    public static List<Opportunity> getOpportunities(){
        return [SELECT Id, Name, accountId ,Type_cr_dit__c,
                account.name, Montant_totale__c , Montant_Cr_dit__c ,CloseDate,StageName
                FROM Opportunity  WHERE CreatedDate > 2022-03-01T00:00:00Z 
                LIMIT 1000];
    }

    @AuraEnabled(cacheable=True)
    public static List<Opportunity> searchOpportunity(String searchString){
        List<List<SObject>> opportunities = [FIND :searchString IN ALL FIELDS RETURNING Opportunity(Name, 
         account.name,contact__r.name, Montant_totale__c,Montant_Cr_dit__c, CloseDate,StageName)];

        return (List<Opportunity>) opportunities[0];
    }

    @AuraEnabled
    public static void deleteOpportunities(List<Id> opportunityIds){
        if(opportunityIds.size() > 0 ){
            delete [SELECT Id FROM Opportunity WHERE Id in: opportunityIds];
        }
    }
}