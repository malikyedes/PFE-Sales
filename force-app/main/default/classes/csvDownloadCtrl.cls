public class csvDownloadCtrl {
    @AuraEnabled
       public static list <contact> fetchContact(){
          
          List <contact> returnConList = new List < contact > ();
            
          for(contact con: [SELECT firstName, LastName ,MobilePhone, M_tier__c, Salaire__c FROM Contact ORDER BY Name LIMIT 1000]) {
                 returnConList.add(con);
              }
             return returnConList;
       }
    }
    