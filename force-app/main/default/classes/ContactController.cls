public with sharing class ContactController {  
  public String contentVersionId { get; set; }

    @AuraEnabled  
    public static string saveContact(Contact contactRec, string file, string fileName) {  
      string contactId;  
      try{  
        Insert contactRec;  
        contactId = contactRec.Id;  
        String base64File = EncodingUtil.urlDecode(file, 'UTF-8');     
        ContentVersion contentVersionRec = new ContentVersion();  
        contentVersionRec.Title = fileName;  
        contentVersionRec.PathOnClient = '/' + fileName;  
        contentVersionRec.FirstPublishLocationId = contactRec.Id;  
        contentVersionRec.VersionData = EncodingUtil.base64Decode(base64File);  
        contentVersionRec.IsMajorVersion = true;  
        Insert contentVersionRec;  
      } catch(Exception ex){  
        system.debug('Exception===>'+ex.getMessage());  
      }  
      return contactId;  
    }    


    @AuraEnabled(cacheable=true)
    public static List<ContentVersion> getVersionFiles(String recordId){
        try {
            List<ContentDocumentLink> contentDocumentLinks=[
                                                            SELECT
                                                                Id,
                                                                LinkedEntityId,
                                                                ContentDocumentId,
                                                                ContentDocument.LatestPublishedVersionId,
                                                                ContentDocument.LatestPublishedVersion.Title
                                                            FROM ContentDocumentLink
                                                            WHERE LinkedEntityId=:recordId];

            Set<Id> documentIds = new Set<Id>();
            for (ContentDocumentLink cdl : contentDocumentLinks) {
                documentIds.add(cdl.ContentDocumentId);
            }

            return [
                    SELECT
                        Id,
                        Title,
                        ContentDocumentId,
                        FileType, 
                        ContentSize,
                        FileExtension,
                        VersionNumber,
                        CreatedDate,
                        VersionData,
                        FirstPublishLocationId
                    FROM ContentVersion
                    WHERE ContentDocumentId IN :documentIds AND IsLatest = TRUE
			        ORDER BY ContentDocument.CreatedDate DESC
		];
        
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static String convertToPdf(ContentVersion cv) {
		return System.enqueueJob(new ConverttoPDF(new List<ContentVersion>{ cv }));
		
	}

    public PageReference init() {
		this.contentVersionId = String.escapeSingleQuotes(ApexPages.currentPage().getParameters().get('cvId')).trim();
        return null;
    }















  }  