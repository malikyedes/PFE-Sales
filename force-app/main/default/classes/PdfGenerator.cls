public with sharing class PdfGenerator {
    @AuraEnabled
	public static List<Contact> getContactsController(){
		return [SELECT FirstName, LastName ,MobilePhone FROM Contact LIMIT 1000];
	}
}
