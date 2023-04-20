//create unorderelements
let list = document.createElement("ul");
list.setAttribute("id","unorderlist");
list.setAttribute("style","list-style-type:none;")
document.body.append(list);
//console.log(list);

//create 1divelement
let ch = document.createElement("div");
ch.setAttribute("class","container col-lg-12 col-md-8 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5 mt-5");
document.body.append(ch)

//create 2division
let ks=document.createElement("div");
ks.setAttribute("class", "table-responsive");
ch.append(ks);

//create 3division
let krish=document.createElement("div");
krish.setAttribute("id","buttons")
krish.setAttribute("class","d-flex justify-content-center");
document.body.append(krish)


//create heading1
let h1 = document.createElement("h1");
h1.setAttribute("id","title");
ks.append(h1);
h1.innerText+="DOM PAGINATION TASK";

//create paragraph
let p = document.createElement("p");
p.setAttribute("id","description");
ks.append(p);
p.innerText+="Display 1 to 10 numbers each one button shows the 10 id's "

//create table
let tableelement = document.createElement("table")
tableelement.setAttribute("class","table table-bordered");
ks.append(tableelement)

//create a row in table
let tr=document.createElement("tr");
tr.setAttribute("class","firstrow");
tableelement.append(tr);

//create a newrow in table
let tr1=document.createElement("tr");
tr1.setAttribute("class","content");
tableelement.append(tr1);

//create a td
let td=document.createElement("td");
tr1.append(td);
tr1.innerHTML+=`<td></td>`
tr1.innerHTML+=`<td></td>`

//access




//create a heading in table
let th=document.createElement("th");
tr.innerHTML+=`<th>ID</th`
tr.innerHTML+=`<th>Name</th`
tr.innerHTML+=`<th>Email</th`

//access list
let accesslist=document.getElementById("unorderlist");
//console.log(accesslist);

//create list
let numbers = document.createElement("li");
numbers.setAttribute("id","list-num");
//console.log(numbers)

//access list
let newelement = document.querySelector("#list-num");
//console.log(newelement);

//create input
let input = document.createElement("input");
input.setAttribute("class","inputbtn");
input.setAttribute("type","button");
input.setAttribute("value","First");
input.setAttribute("onclick","pageone()")
//console.log(input);

//access input
let accessinput = document.getElementsByClassName("inputbtn");
//console.log(accessinput)

//append numbers inside the list
list.append(numbers);


//append input into the number
numbers.append(input)


//add onemore list
//list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="previous" onclick="pageten()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="2" onclick="pagetwo()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="3" onclick="pagethree()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="4" onclick="pagefour()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="5" onclick="pagefive()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="6" onclick="pagesix()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="7" onclick="pageseven()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="8" onclick="pageeight()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="9" onclick="pagenine()"</li>`;
//list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="next" onclick="pageten()"</li>`;
list.innerHTML+=`<li id="list-num"><input class="inputbtn" type="button" value="Last" onclick="pageten()"</li>`;


//append
ch.append(accesslist);

let div4=document.createElement("div");
document.body.append(div4)