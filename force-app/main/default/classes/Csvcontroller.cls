public inherited sharing class Csvcontroller {
    
      /*  @AuraEnabled(Cacheable = true)
        public static List<Account> getAccounts(){
          return [SELECT Id, Name,Industry, Type, Phone, Rating, AccountNumber FROM Account ORDER BY Name LIMIT 10];
        }*/


        @AuraEnabled(Cacheable = true)
        public static List<Contact> getContacts(){
          return [SELECT firstName, LastName ,MobilePhone, M_tier__c, Salaire__c FROM Contact ORDER BY Name LIMIT 1000];
        }


    }

