public with sharing class ConverttoPDF implements Queueable, Database.AllowsCallouts {
    private List<ContentVersion> contentVersions = new List<ContentVersion>();

	public ConverttoPDF(List<ContentVersion> contentVersions) {
		this.contentVersions = contentVersions;
	}
	public void execute(QueueableContext context) {
		if (this.contentVersions.size() == 0) {
			return;
		}
		List<ContentVersion> contentVersionToInsert = new List<ContentVersion>();
		for (ContentVersion contentVersion : contentVersions) {
			PageReference pdfFile = new PageReference('/apex/PDFConverter?cvId=' + contentVersion.Id);

            if (pdfFile == null) {
				continue;
			}

			Blob body;
			try {
			    body = pdfFile.getContentAsPDF();
			} catch (VisualforceException e) {
				System.debug('Failed to convert to pdf file.' + e.getMessage());
			}
            
			ContentVersion newContentVersion = new ContentVersion();
			newContentVersion.VersionData = body;
			newContentVersion.Title = contentVersion.Title;
			newContentVersion.PathOnClient = contentVersion.Title + '.pdf';
			newContentVersion.ContentDocumentId = contentVersion.ContentDocumentId;
			newContentVersion.ContentLocation = contentVersion.ContentLocation;
			newContentVersion.IsMajorVersion = false;
			contentVersionToInsert.add(newContentVersion);
		}

		if (contentVersionToInsert.size() > 0) {
			insert contentVersionToInsert;
			
		}
	}
}
