const pdf = require('html-pdf');
const data  = require('./data');
const template = require('./template');

const options = {
  border: "0.5cm",
  height: "10.5in",
  footer: {
    height: "39mm",
    contents: {
      default: '<span style="font-size:0.7rem; color: #444; float:right; margin-top:100px;">{{page}}/{{pages}}</span>',
    }
  }
}

pdf.create(template(data), options).toFile('test.pdf', (err) => {
  if (err) console.log(err);
});
