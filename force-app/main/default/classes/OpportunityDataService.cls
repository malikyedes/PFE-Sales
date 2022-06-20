public with sharing class OpportunityDataService {

    @AuraEnabled(cacheable=true)
    public static Map<String, Integer> aggregateOpportunities(String accountId){
        Map<String, Integer> opportunityStatusMap = new Map<String, Integer>();
        //Aggregate the opportunities. 
        for(AggregateResult aggr : [SELECT Count(Id), StageName
                                    FROM Opportunity
                                    WHERE AccountId=:accountId AND StageName IN ('Qualification','Analyse Documents','Proposition','Décision','Negotiation/Review')
                                    GROUP BY StageName]) {
            opportunityStatusMap.put((String)(aggr.get('StageName')), (Integer)(aggr.get('expr0')));
        }

        return opportunityStatusMap;
    }
        @AuraEnabled(cacheable=true)
    public static Map<String, Integer> aggregateOpportunitiees(){
        Map<String, Integer> opportunityStatusMap = new Map<String, Integer>();
        //Aggregate the opportunities. 
        for(AggregateResult aggr : [SELECT Count(Id), StageName
                                    FROM Opportunity 
                                    WHERE StageName IN ('Qualification','Analyse Documents','Proposition','Décision','Negotiation/Review')
                                    GROUP BY StageName]) {
            opportunityStatusMap.put((String)(aggr.get('StageName')), (Integer)(aggr.get('expr0')));
        }

        return opportunityStatusMap;
    }



    @AuraEnabled
    public static Opportunity  changestage( string recordid){
  


        List<Opp_stage__mdt> oppstage = [SELECT id, stage_n__c, Stage_n_1__c FROM Opp_stage__mdt] ;

        Opportunity opp1 ;
   
   for (Opp_stage__mdt oppa: oppstage ) {
   
   for(Opportunity opp : [Select id , StageName from opportunity where id=:recordid])
   
   {
   
       
   
       if (oppa.stage_n__c  == opp.StageName) {
           
           System.Debug(oppa.Stage_n_1__c) ;
           opp.StageName = oppa.Stage_n_1__c ; 
            System.Debug(opp.StageName) ;
          opp1 = opp ; 
               }
       
           
   }
   }
   
   update opp1 ;
   return opp1 ;


    }






}