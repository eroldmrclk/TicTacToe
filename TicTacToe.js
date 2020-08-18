var count=0;
var finish=0;
function xox(elem){
    var div=document.getElementById(elem.id);
    if(div.firstChild==null && finish==0){
        if(count%2==0){
            div.id="x";
            var img=document.createElement("img");
            img.src="x.png";
            img.style.position="absolute";
            img.style.width="150px";
            img.style.height="150px";
            div.appendChild(img);
            count++;
        }
        else{
            div.id="y";
            var img=document.createElement("img");
            img.src="o.jpg";
            img.style.position="absolute";
            img.style.width="150px";
            img.style.height="150px";
            div.appendChild(img);
            count++;
        }
    }
    if(count>4){
        var divAll=document.getElementsByClassName("divinline");
        for(var i=0; i<3; i++){
            if(divAll[3*i].id=="x" && divAll[3*i+1].id=="x" && divAll[3*i+2].id=="x" || divAll[3*i].id=="y" && divAll[3*i+1].id=="y" && divAll[3*i+2].id=="y"){
                alert("WIN!");
                finish=1;
                break;
            }  
        }
        for(var i=0; i<3; i++){
            if(divAll[i].id=="x" && divAll[i+3].id=="x" && divAll[i+6].id=="x" || divAll[i].id=="y" && divAll[i+3].id=="y" && divAll[i+6].id=="y"){
                alert("WIN!");
                finish=1;
                break;
                } 
        }
        if(divAll[0].id=="x" && divAll[4].id=="x" && divAll[8].id=="x" || divAll[0].id=="y" && divAll[4].id=="y" && divAll[8].id=="y"){
            alert("WIN!");
            finish=1;
        }
        else if(divAll[2].id=="x" && divAll[4].id=="x" && divAll[6].id=="x" || divAll[2].id=="y" && divAll[4].id=="y" && divAll[6].id=="y"){
            alert("WIN!");
            finish=1;
        }
        else{
            if(count==9){
                alert("NO WINNER! REFRESH THE PAGE.");
                finish=1;
            }    
        }
    }
}