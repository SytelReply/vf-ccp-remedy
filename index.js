const express = require('express')
const app = express()
const port = process.env.PORT || 8843
const libxmljs = require("libxmljs");

app.listen(port, () => {
 console.log('Express is running')
})


app.get('/', (request, response) => {
 if (request.method === 'GET') {
   response.status(200).jsonp({})
 }
})


app.post('/soa-infra/resources/default/SyncIncidentLMCompatibleRestReqImplV2!1.0/SyncIncidentLMCompatibleRestReqImpl/', (request, response) => {
 if (request.method === 'POST') {
   let stringifiedXml = '<ns0:IncidentResponseRest xmlns:plnk="http://docs.oasis-open.org/wsbpel/2.0/plnktype" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:tns="http://xmlns.oracle.com/SOAtestApp/SyncIncidentLMCompatibleRestReqImpl/SyncIncidentLMCompatibleRestReqImpl" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:ns0="http://group.domain.com/itsm/incident/v1"><ns0:ProcessResult>SUCCESS</ns0:ProcessResult><ns0:RequestNumber>INC123456789012</ns0:RequestNumber></ns0:IncidentResponseRest>';
//   let xmlDoc = libxmljs.parseXml(stringifiedXml);
//	 console.log(xmlDoc);


//	 var parseString = require('xml2js').parseString;
//parseString(stringifiedXml, function (err, result) {
//    console.dir(result);
//});

   response.type('application/xml');
   response.set('Content-Type', 'text/xml').send(stringifiedXml);
   //response.status(200).jsonp({})
 }
})
