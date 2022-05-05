trigger setLeadNameToOpportunity on Lead (after insert , after update ) {

    Opportunity[] records = new Opportunity[0];
    for(Lead leadRecord: Trigger.new) {
      if(leadRecord.ConvertedOpportunityId != null) {
        records.add(
          new Opportunity(
            Id=leadRecord.ConvertedOpportunityId, 
            Name=leadRecord.Name
          )
        );
      }
    }
    update records;
  }