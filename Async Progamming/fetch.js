var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function foo(data1){
for(var i = 0;i<data1.length;i++){
var col = document.createElement("div");
col.className = "col-lg-4";
col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body text-primary">
  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>`;
row.append(col);
container.append(row);
document.body.append(container);
}

}
