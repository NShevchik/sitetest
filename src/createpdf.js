import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { example } from "./example";
import { sslObject } from "./sslexample";
import { gradesExplain } from "./grages";

// function createPdfE() {
//   const doc = new jsPDF();

//   doc.text(10, 10, 'Hello world! ');
//   doc.save('hello-world.pdf');
// }


// for (let signature of sslObject.certs) {
//   console.log(isCertificateValid(signature.notAfter))
// }



const apiKey = 'AIzaSyCM0bynHSEdEC9l09CW8eCUAsjMWWgbDDc';
const url = 'https://softteco.co/';
const apiGoogleUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;
const apiSslUrl = `https://api.ssllabs.com/api/v3/analyze?host=${encodeURIComponent(url)}&all=on`;

export function createPdf() {
  let googleApiResult;
  let sslApiResult;

  const fetchGoogle = fetch(apiGoogleUrl)
    .then(response => response.json())
    .then(data => {
      googleApiResult = data
    })
    .catch(error => console.error(error));
  const fetchSSL = fetch(apiSslUrl)
    .then(response => response.json())
    .then(data => {
      sslApiResult = data
    })
    .catch(error => console.error(error));

  Promise.all([fetchGoogle, fetchSSL]).then(() => {
    console.log('im here')
    console.log('googleApiResult ', googleApiResult)
    console.log('sslApiResult ', sslApiResult)
    buildPdf(googleApiResult)
  })

}
function buildPdf(googleObject) {
  const doc = new jsPDF({
    orientation: 'l',
    putOnlyUsedFonts: true
  });
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  // const siteIp = sslObject.endpoints[0].ipAddress
  // const overallGrade = sslObject.endpoints[0].grade
  // const sslProtocols = sslObject.endpoints[0].details.protocols
  // const testDuration = sslObject.endpoints[0].duration
  // const serverSignature = sslObject.endpoints[0].details.serverSignature
  // const securityHeaders = sslObject.endpoints[0].details.httpTransactions[0].responseHeaders
  // const certificates = sslObject.certs
  doc.text('Page Report', 14, 20);
  doc.text(`Report: ${googleObject.lighthouseResult.finalUrl}`, 14, 30);
  doc.setTextColor('#C1C1C1')
  doc.setFontSize(10);
  // doc.text(`(${siteIp})`, 14, 35);
  doc.setFontSize(14);
  doc.setTextColor('#00000')
  doc.text('Overall Rating', 14, 45)
  doc.setFontSize(32);
  // if (overallGrade.includes('A')) {
  //   doc.setTextColor('#B0FF92')
  //   doc.text(`${overallGrade}`, 50, 46.5)
  // } else if (overallGrade === 'B') {
  //   doc.setTextColor('#F9DC5C')
  //   doc.text(`${overallGrade}`, 50, 46.5)
  // } else {
  //   doc.setTextColor('#FE5F00')
  //   doc.text(`${overallGrade}`, 50, 46.5)
  // }
  // doc.setFontSize(12);
  // doc.setTextColor('#00000')
  // const splitText = doc.splitTextToSize(`${gradesExplain[overallGrade]}`, 250)
  // doc.text(splitText, 14, 55)
  doc.setFontSize(14);
  doc.text('Page protocols', 14, 80)
  // const tableDataSSL = [];
  // for (let protocol of sslProtocols) {
  //   tableDataSSL.push([protocol.name, protocol.version])
  // }
  // autoTable(doc, {
  //   startY: 85,
  //   head: [['Name', 'Version']],
  //   body: tableDataSSL,
  //   columnStyles: {
  //     0: { cellWidth: 50 },
  //     1: { halign: 'center', cellWidth: 20 }
  //   },
  // })
  // autoTable(doc, {
  //   head: [['Miscellaneous parameters', 'Value']],
  //   body: [['HTTP server signature', serverSignature], ['Test duration	', `${(testDuration / 1000).toFixed(1)}s`]],
  //   columnStyles: {
  //     0: { cellWidth: 50 },
  //     1: { cellWidth: 50 }
  //   }
  // })
  // const tableHeaders = []
  // for (let header of securityHeaders) {
  //   tableHeaders.push([header.name, header.value])
  // }
  // autoTable(doc, {
  //   head: [['Header name', 'Value']],
  //   body: tableHeaders,
  // })
  // const tableCertificates = []
  // for (let certificate of certificates) {
  //   let styleColor;
  //   if (isCertificateValid(certificate.notAfter)) {
  //     styleColor = [0, 175, 84]
  //   } else {
  //     styleColor = [255, 0, 60]
  //   }
  //   tableCertificates.push([certificate.commonNames.join(', '), { content: `${(new Date(certificate.notAfter)).toLocaleDateString()}`, styles: { textColor: styleColor } }, certificate.subject])
  // }
  // autoTable(doc, {
  //   head: [['Certificate Name(s)', 'Expired At', 'Subject']],
  //   body: tableCertificates
  // })
  doc.addPage()
  doc.text('Recomendations from Page Speed Insights API', 14, 20)
  const tableDataGoogle = [];
  for (let metric in googleObject.lighthouseResult.audits) {
    if (googleObject.lighthouseResult.audits[metric].score) {
      tableDataGoogle.push([googleObject.lighthouseResult.audits[metric].title, googleObject.lighthouseResult.audits[metric].displayValue, example.lighthouseResult.audits[metric].description]);
    }
  }
  autoTable(doc, {
    startY: 30,
    head: [['Metric', 'Value', 'Description']],
    body: tableDataGoogle,
    columnStyles: {
      0: { cellWidth: 30 },
      1: { halign: 'center', fillColor: [232, 255, 255], cellWidth: 30 }
    },
  })
  doc.save('pagespeed_report.pdf');
}

// function buildPdf(sslObject, googleObject) {
//   const doc = new jsPDF({
//     orientation: 'l',
//     putOnlyUsedFonts: true
//   });
//   doc.setFontSize(14);
//   doc.setFont('helvetica', 'bold');
//   const siteIp = sslObject.endpoints[0].ipAddress
//   const overallGrade = sslObject.endpoints[0].grade
//   const sslProtocols = sslObject.endpoints[0].details.protocols
//   const testDuration = sslObject.endpoints[0].duration
//   const serverSignature = sslObject.endpoints[0].details.serverSignature
//   const securityHeaders = sslObject.endpoints[0].details.httpTransactions[0].responseHeaders
//   const certificates = sslObject.certs
//   doc.text('Page Report', 14, 20);
//   doc.text(`Report: ${googleObject.lighthouseResult.finalUrl}`, 14, 30);
//   doc.setTextColor('#C1C1C1')
//   doc.setFontSize(10);
//   doc.text(`(${siteIp})`, 14, 35);
//   doc.setFontSize(14);
//   doc.setTextColor('#00000')
//   doc.text('Overall Rating', 14, 45)
//   doc.setFontSize(32);
//   if (overallGrade.includes('A')) {
//     doc.setTextColor('#B0FF92')
//     doc.text(`${overallGrade}`, 50, 46.5)
//   } else if (overallGrade === 'B') {
//     doc.setTextColor('#F9DC5C')
//     doc.text(`${overallGrade}`, 50, 46.5)
//   } else {
//     doc.setTextColor('#FE5F00')
//     doc.text(`${overallGrade}`, 50, 46.5)
//   }
//   doc.setFontSize(12);
//   doc.setTextColor('#00000')
//   const splitText = doc.splitTextToSize(`${gradesExplain[overallGrade]}`, 250)
//   doc.text(splitText, 14, 55)
//   doc.setFontSize(14);
//   doc.text('Page protocols', 14, 80)
//   const tableDataSSL = [];
//   for (let protocol of sslProtocols) {
//     tableDataSSL.push([protocol.name, protocol.version])
//   }
//   autoTable(doc, {
//     startY: 85,
//     head: [['Name', 'Version']],
//     body: tableDataSSL,
//     columnStyles: {
//       0: { cellWidth: 50 },
//       1: { halign: 'center', cellWidth: 20 }
//     },
//   })
//   autoTable(doc, {
//     head: [['Miscellaneous parameters', 'Value']],
//     body: [['HTTP server signature', serverSignature], ['Test duration	', `${(testDuration / 1000).toFixed(1)}s`]],
//     columnStyles: {
//       0: { cellWidth: 50 },
//       1: { cellWidth: 50 }
//     }
//   })
//   const tableHeaders = []
//   for (let header of securityHeaders) {
//     tableHeaders.push([header.name, header.value])
//   }
//   autoTable(doc, {
//     head: [['Header name', 'Value']],
//     body: tableHeaders,

//   })
//   const tableCertificates = []
//   for (let certificate of certificates) {
//     let styleColor;
//     if (isCertificateValid(certificate.notAfter)) {
//       styleColor = [0, 175, 84]
//     } else {
//       styleColor = [255, 0, 60]
//     }
//     tableCertificates.push([certificate.commonNames.join(', '), { content: `${(new Date(certificate.notAfter)).toLocaleDateString()}`, styles: { textColor: styleColor } }, certificate.subject])
//   }
//   autoTable(doc, {
//     head: [['Certificate Name(s)', 'Expired At', 'Subject']],
//     body: tableCertificates
//   })
//   doc.addPage()
//   doc.text('Recomendations from Page Speed Insights API', 14, 20)
//   const tableDataGoogle = [];
//   for (let metric in googleObject.lighthouseResult.audits) {
//     if (googleObject.lighthouseResult.audits[metric].score) {
//       tableDataGoogle.push([googleObject.lighthouseResult.audits[metric].title, googleObject.lighthouseResult.audits[metric].displayValue, example.lighthouseResult.audits[metric].description]);
//     }
//   }
//   autoTable(doc, {
//     startY: 30,
//     head: [['Metric', 'Value', 'Description']],
//     body: tableDataGoogle,
//     columnStyles: {
//       0: { cellWidth: 30 },
//       1: { halign: 'center', fillColor: [232, 255, 255], cellWidth: 30 }
//     },
//   })
//   doc.save('pagespeed_report.pdf');
// }


function isCertificateValid(sertificateDate) {
  const today = new Date()
  const sertificateExpire = new Date(sertificateDate)
  return sertificateExpire > today
}