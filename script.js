
//get all mailto links on page 
var a = document.querySelectorAll("a[href^='mailto:']")
data = [];
for (i = 0; i < a.length; i++) {
    data.push(a[i].getAttribute('href').slice(7));

}

// prepare CSV data
var csvData = new Array();

data.forEach(function(email, index, array) {
  csvData.push(email);
});

// download stuff
var buffer = csvData.join("\n");
var uri = "data:text/csv;charset=utf8," + encodeURIComponent(buffer);
var fileName = "data.csv";

var link = document.createElement("a");
if(link.download !== undefined) { // feature detection
  // Browsers that support HTML5 download attribute
  link.setAttribute("href", uri);
  link.setAttribute("download", fileName);
}
else {
  // it needs to implement server side export
  link.setAttribute("href", "http://www.example.com/export");
}
link.innerHTML = "Export to CSV";
document.body.appendChild(link);
