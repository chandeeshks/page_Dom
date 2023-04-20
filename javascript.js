
var url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
var request= new XMLHttpRequest();

function pageone()
{
request.onload=function(){
    const data=JSON.parse(this.responseText);
        for(var i=0; i<=9; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    
}
request.open("GET",url)
request.send();
}

function pagetwo(){
    
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=10; i<=19; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pagethree(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=20; i<=29; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pagefour(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=30; i<=39; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pagefive(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=40; i<=49; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pagesix(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=50; i<=59; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pageseven(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=60; i<=69; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pageeight(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=70; i<=79; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pagenine(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=80; i<=89; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}

function pageten(){
    request.onload=function(){
        const data=JSON.parse(this.responseText);
        for(var i=90; i<=99; i++)
        {
            var a = JSON.stringify((data[i]));
            a+="\n";
            tr1.innerText+=a
        }
    }
    request.open("GET",url)
    request.send();
}