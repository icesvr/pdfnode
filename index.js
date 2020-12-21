const PDFDocument = require('pdfkit');
const path = require('path');
const { jsPDF } = require("jspdf");

const fs = require('fs');

const doc = new jsPDF();
  //const imageFile = fs.readFileSync('test.jpeg', 'base64');

  const photos = fs.readdirSync(__dirname+'/upload/');

  let imageFile;
  
  for(let i=0; i<photos.length; i++){
    console.log(`${__dirname}\\upload\\${photos[i]}`)
    imageFile = fs.readFileSync(`${__dirname}\\upload\\${photos[i]}`, 'base64');

    doc.addImage(imageFile, 'JPEG', 35, -150, 300, 150,'NONE','NONE', -90).addPage();
    
  }
  doc.save("nuevopdf.pdf");
  doc.close();

  // doc.addImage(imageFile, 'JPEG', 35, -150, 300, 150,'NONE','NONE', -90);
  // doc.save("22.pdf");
  // doc.close();


// function toPostscriptPoint(mm) {
//     return mm * 2.8346456693;
// }
// const document = new PDFDocument({
//     size: [toPostscriptPoint(156), toPostscriptPoint(106)],
// });

// document.pipe(fs.createWriteStream('output.pdf'));

// document.save();
// document.rotate(90);
// document.image(
//             'test.jpeg',
//             { width: toPostscriptPoint(150), fit: [toPostscriptPoint(150), toPostscriptPoint(100)] });


// document.end();




// const HummusRecipe = require('hummus-recipe');
// const pdfDoc = new HummusRecipe('new', 'output.pdf',{
//     version: 1.6,
//     author: 'John Doe',
//     title: 'Hummus Recipe',
//     subject: 'A brand new PDF'
// });

// pdfDoc.createPage('A4', 90);
// pdfDoc.image('test.jpeg', 0, 0);
// pdfDoc.endPage();
// pdfDoc.endPDF(()=>{ 
//     console.log('El pdf se renderizo');
//  });