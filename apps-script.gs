function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Submissions');
    if (!sheet) {
      sheet = ss.insertSheet('Submissions');
      sheet.appendRow([
        'Timestamp','District','Presiding Elder','Church','Pastor','Ministerial Status',
        'Date Appointment','Years Served','Pastor Contact','Pastor Email',
        'Station/Circuit','Preaching Points','Church Address',
        'Adult Delegate','Youth Delegate',
        'Adults Prev','Adults Curr','Youth Prev','Youth Curr',
        'Children Prev','Children Curr','Total Prev','Total Curr',
        'Attendance Prev','Attendance Curr','Church School Prev','Church School Curr',
        'Tithers Prev','Tithers Curr','Conversions Prev','Conversions Curr',
        'Accessions Prev','Accessions Curr','Baptisms Prev','Baptisms Curr',
        'Confirmations Prev','Confirmations Curr','Deaths Prev','Deaths Curr',
        'Transfers Prev','Transfers Curr',
        'ACB Assessed','ACB Paid','ACB Date',
        'MYB Assessed','MYB Paid','MYB Date',
        'ADV Assessed','ADV Paid','ADV Date',
        'OST Assessed','OST Paid','OST Date',
        'PEA Assessed','PEA Paid','PEA Date',
        'PED Assessed','PED Paid','PED Date',
        'PEC Assessed','PEC Paid','PEC Date',
        'PAN Assessed','PAN Paid','PAN Date',
        'PAS Assessed','PAS Paid','PAS Date',
        'RET Assessed','RET Paid','RET Date',
        'ERP Assessed','ERP Paid','ERP Date',
        'TAC Assessed','TAC Paid','TAC Date',
        'Funds Raised','Paid to Pastor','Total Tithes',
        'ERP Pledged','ERP Pledged Ref','ERP Paid Year','ERP Paid Year Ref',
        'ERP Cumulative','ERP Cum Ref','ERP Outstanding','ERP Settle Date',
        'Ministries JSON',
        'Title Deed','Title Deed Name','AME Registered','ERF Number',
        'Insured','Insurer Policy','Parsonage','Parsonage Cond',
        'NPO Number','SARS Number','Bank AME','Num Signatories',
        'Fin Statements','Fin Statements Date','Board Constituted','Last Church Conf',
        'Accomplishment 1','Accomplishment 2','Challenge 1','Challenge 2',
        'Outreach','Matters for PE',
        'Cert Pastor Date','Steward Chair','Steward Date',
        'Adult Delegate Sig','Youth Delegate Sig',
        'Is Resubmission','Resubmission Reason'
      ]);
      sheet.setFrozenRows(1);
    }
    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      d.timestamp||'',d.district||'',d.presidingElder||'',d.church||'',
      d.pastor||'',d.ministerialStatus||'',d.dateAppointment||'',d.yearsServed||'',
      d.pastorContact||'',d.pastorEmail||'',d.stationCircuit||'',d.numPreachingPoints||'',
      d.churchAddress||'',d.adultDelegate||'',d.youthDelegate||'',
      d.adultsP||'',d.adultsC||'',d.youthP||'',d.youthC||'',
      d.childrenP||'',d.childrenC||'',d.totalMembP||'',d.totalMembC||'',
      d.attendanceP||'',d.attendanceC||'',d.churchSchoolP||'',d.churchSchoolC||'',
      d.tithersP||'',d.tithersC||'',d.conversionsP||'',d.conversionsC||'',
      d.accessionsP||'',d.accessionsC||'',d.baptismsP||'',d.baptismsC||'',
      d.confirmationsP||'',d.confirmationsC||'',d.deathsP||'',d.deathsC||'',
      d.transfersP||'',d.transfersC||'',
      d.acbAssessed||'',d.acbPaid||'',d.acbDate||'',
      d.mybAssessed||'',d.mybPaid||'',d.mybDate||'',
      d.advAssessed||'',d.advPaid||'',d.advDate||'',
      d.ostAssessed||'',d.ostPaid||'',d.ostDate||'',
      d.peaAssessed||'',d.peaPaid||'',d.peaDate||'',
      d.pedAssessed||'',d.pedPaid||'',d.pedDate||'',
      d.pecAssessed||'',d.pecPaid||'',d.pecDate||'',
      d.panAssessed||'',d.panPaid||'',d.panDate||'',
      d.pasAssessed||'',d.pasPaid||'',d.pasDate||'',
      d.retAssessed||'',d.retPaid||'',d.retDate||'',
      d.erpAssessed||'',d.erpPaid||'',d.erpDate||'',
      d.tacAssessed||'',d.tacPaid||'',d.tacDate||'',
      d.fundsRaised||'',d.paidPastor||'',d.totalTithes||'',
      d.erpPledged||'',d.erpPledgedRef||'',d.erpPaidYear||'',d.erpPaidYearRef||'',
      d.erpCumulative||'',d.erpCumRef||'',d.erpOutstanding||'',d.erpSettleDate||'',
      d.ministries||'',
      d.titleDeed||'',d.titleDeedName||'',d.ameRegistered||'',d.erfNumber||'',
      d.insured||'',d.insurerPolicy||'',d.parsonage||'',d.parsonageCond||'',
      d.npoNumber||'',d.sarsNumber||'',d.bankAME||'',d.numSignatories||'',
      d.finStatements||'',d.finStatementsDate||'',d.boardConstituted||'',d.lastChurchConf||'',
      d.accomplishment1||'',d.accomplishment2||'',d.challenge1||'',d.challenge2||'',
      d.outreach||'',d.mattersForPE||'',
      d.certPastorDate||'',d.stewardBoardChair||'',d.stewardBoardDate||'',
      d.adultDelegateSig||'',d.youthDelegateSig||'',
      d.isResubmission||'No',d.resubmissionReason||''
    ]);
    return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error',message:err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Submissions');
    var TOTAL = 68;
    if (!sheet || sheet.getLastRow() <= 1) {
      return ContentService.createTextOutput(JSON.stringify({total:0,totalChurches:TOTAL,districts:{},submissions:[]})).setMimeType(ContentService.MimeType.JSON);
    }
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var dc = headers.indexOf('District');
    var cc = headers.indexOf('Church');
    var counts={}, subs=[], unique={}, total=0;
    for (var i=1;i<data.length;i++) {
      var row=data[i];
      if (!row[dc]) continue;
      var sub={};
      headers.forEach(function(h,idx){sub[h]=row[idx]!==undefined?String(row[idx]):'';});
      subs.push(sub);
      var key=row[dc]+'||'+row[cc];
      if (!unique[key]){unique[key]=true;counts[row[dc]]=(counts[row[dc]]||0)+1;total++;}
    }
    return ContentService.createTextOutput(JSON.stringify({total:total,totalChurches:TOTAL,districts:counts,submissions:subs})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({total:0,totalChurches:68,districts:{},submissions:[],error:err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}


function handleGrammar(text) {
  try {
    var apiKey = PropertiesService.getScriptProperties().getProperty('ANTHROPIC_API_KEY');
    if (!apiKey) {
      return ContentService.createTextOutput(JSON.stringify({error: 'API key not configured'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var payload = {
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      messages: [{
        role: 'user',
        content: 'You are a quiet editorial assistant helping an African Methodist Episcopal Church pastor in South Africa polish their annual conference report. Follow these rules strictly:\n\n1. Fix spelling, grammar and punctuation errors quietly.\n2. Keep the pastor's own words, voice and style — do not make it sound formal, corporate or like AI wrote it.\n3. Do not add new ideas, sentences or information that were not already there.\n4. If a sentence is incomplete but the pastor's intended meaning is clear, complete it as closely as possible to what they were trying to say — using simple, natural church language. Do not over-expand.\n5. If the text is already correct, return it unchanged.\n6. Return only the corrected or completed text. No explanations, no comments, nothing else.\n\nExample of how to handle an incomplete sentence:\nPastor wrote: "A number of tithers on monthly basis."\nYou return: "A number of members tithe on a monthly basis."\n\nExample of how to handle an outreach sentence:\nPastor wrote: "We outreached to members our Church members who took long without attending the Church"\nYou return: "We reached out to church members who had not attended church for a long time."\n\nThis is from an AME church annual conference report — Section G Narrative. The context is African church ministry in South Africa.\n\nText to correct:\n\n' + text
      }]
    };
    
    var options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    
    var response = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', options);
    var result = JSON.parse(response.getContentText());
    var improved = result.content && result.content[0] ? result.content[0].text : text;
    
    return ContentService.createTextOutput(JSON.stringify({improved: improved}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
