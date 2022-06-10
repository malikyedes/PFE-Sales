public class GEN_ChartController {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getOpportunities(){
        return [SELECT Count(id) compteur, Type_cr_dit__c typecredit 
                FROM Opportunity WHERE StageName IN ('Qualification','Analyse Documents','Proposition','Décision','Negotiation/Review','Closed won','Closed Lost')
                GROUP BY Type_cr_dit__c HAVING Type_cr_dit__c IN ('Consommation','Voiture','Immobilier') LIMIT 200000];
    }
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getOpportunitiees(){
        return [SELECT COUNT(StageName) stage FROM Opportunity WHERE StageName='Closed Won'];
        
            
            
    }
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getCredit(){
        return [SELECT Count(id) compteur,CALENDAR_MONTH(CreatedDate) CD1
                FROM Opportunity WHERE StageName IN ('Qualification','Analyse Documents','Proposition','Décision','Negotiation/Review','Closed won','Closed Lost')
                GROUP BY CALENDAR_MONTH(CreatedDate) LIMIT 200000];
    
    }
     @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(){
        return [SELECT Name,ExpectedRevenue, Amount, CloseDate
               FROM Opportunity WHERE StageName='Closed Won' LIMIT 200000];
    }
    
    
}