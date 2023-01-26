function getResult()
{
    let cgpa=document.querySelector(".op1");
    let percentage=document.querySelector(".op2")
    let x;
    let total;

    let g1=document.getElementsByClassName("sub1");
    let c1=document.querySelector("#choice1")
    let score1;
    let credits1;
    let t1;
    for(i=0;i<g1.length;i++)
    {
        if(g1[i].checked)
        {
            score1=g1[i].value;
        }
    }
    credits1=c1.options[c1.selectedIndex].value
    
    if(score1!=null && credits1!=null)
    {
        t1=score1*credits1;
        x=t1;
    }
    else{
        return; 
    }


    

    let g2=document.getElementsByClassName("sub2");
    let c2=document.querySelector("#choice2")
    let score2;
    let combo2;
    let t2;
    for(i=0;i<g2.length;i++)
    {
        if(g2[i].checked)
        {
            score2=g2[i].value;
        }
    }
    credits2=c2.options[c2.selectedIndex].value
    if(score2!=null && credits2!=null)
    {
        t2=score2*credits2;
        x+=t2;
    }
    else{
        return; 
    }

    
    let g3=document.getElementsByClassName("sub3");
    let c3=document.querySelector("#choice3")
    let score3;
    let credits3;
    let t3;
    for(i=0;i<g3.length;i++)
    {
        if(g3[i].checked)
        {
            score3=g3[i].value;
        }
    }
    credits3=c3.options[c3.selectedIndex].value
    if(score3!=null && credits3!=null)
    {
        t3=score3*credits3;
        x+=t3;
    }
    else{
        return; 
    }




    let g4=document.getElementsByClassName("sub4");
    let c4=document.querySelector("#choice4")
    let score4;
    let credits4;
    let t4;
    for(i=0;i<g4.length;i++)
    {
        if(g4[i].checked)
        {
            score4=g4[i].value;
        }
    }
    credits4=c4.options[c4.selectedIndex].value
    if(score4!=null && credits4!=null)
    {
        t4=score4*credits4;
        x+=t4;
    }
    else{
        return; 
    }
    


    
    let g5=document.getElementsByClassName("sub5");
    let c5=document.querySelector("#choice5")
    let score5;
    let credits5;
    let t5;
    for(i=0;i<g5.length;i++)
    {
        if(g5[i].checked)
        {
            score5=g5[i].value;
        }
    }
    credits5=c5.options[c5.selectedIndex].value
    if(score5!=null && credits5!=null)
    {
        t5=score5*credits5;
        x+=t5;
    }
    else{
        return; 
    }




    let g6=document.getElementsByClassName("sub6");
    let c6=document.querySelector("#choice6")
    let score6;
    let credits6;
    let t6;
    for(i=0;i<g6.length;i++)
    {
        if(g6[i].checked)
        {
            score6=g6[i].value;
        }
    }
    credits6=c6.options[c6.selectedIndex].value
    if(score6!=null && credits6!=null)
    {
        t6=score6*credits6;
        x+=t6;
    }
    else{
        return; 
    }



    let g7=document.getElementsByClassName("sub7");
    let c7=document.querySelector("#choice7")
    let score7;
    let credits7;
    let t7;
    for(i=0;i<g7.length;i++)
    {
        if(g7[i].checked)
        {
            score7=g7[i].value;
        }
    }
    credits7=c7.options[c7.selectedIndex].value
    if(score7!=null && credits7!=null)
    {
        t7=score7*credits7;
        x+=t7;
    }
    else{
        return; 
    }


    let g8=document.getElementsByClassName("sub8");
    let c8=document.querySelector("#choice8")
    let score8;
    let credits8;
    let t8;
    for(i=0;i<g8.length;i++)
    {
        if(g8[i].checked)
        {
            score8=g8[i].value;
        }
    }
    credits8=c8.options[c8.selectedIndex].value
    if(score8!=null && credits8!=null)
    {
        t8=score8*credits8;
        x=x+t8;
    }
    else{
        return; 
    }


   let g9=document.getElementsByClassName("sub9");
    let c9=document.querySelector("#choice9");
    let score9;
    let credits9;
    let t9;
    for(i=0;i<g9.length;i++)
    {
        if(g9[i].checked)
        {
            score9=g9[i].value;
        }
    }
    credits9=c9.options[c9.selectedIndex].value
    if(score9!=null && credits9!=null)
    {
        t9=score9*credits9;
        x=x+t9;
    }
    else{
        return; 
    }

   

let credits=Number(credits1)+Number(credits2)+Number(credits3)+Number(credits4)+Number(credits5)+Number(credits6)+Number(credits7)+Number(credits8)+Number(credits9)
total=(x/credits);
cgpa.innerText=total.toFixed(2);
cgpa.style.fontSize="22px"
//cgpa.style.fontStyle="italic";
percentage.innerText=((total-0.75)*10).toFixed(2)+" %";
percentage.style.fontSize="22px"
//percentage.style.fontStyle="italic"

//let a=document.getElementsByClassName("cgpa");
//a[0].style.color="red";

//let p=document.getElementsByClassName("percentage");
//p[0].style.color="red";

setInterval(() => {
    document.querySelector(".cgpa").style="color:red"; 
},350);

setInterval(() => {
    document.querySelector(".cgpa").style="color:yellow"; 
},400);


setInterval(() => {
    document.querySelector(".cgpa").style="color:blue" 
},450);


//

setInterval(() => {
    document.querySelector(".percentage").style="color:red"; 
},350);

setInterval(() => {
    document.querySelector(".percentage").style="color:yellow"; 
},400);


setInterval(() => {
    document.querySelector(".percentage").style="color:blue"; 
},450);


 
}

function f1()
{
    
    /*let cgpa=document.querySelector(".op1");
    let percentage=document.querySelector(".op2");
    cgpa.innerText=''
    percentage.innerText=''*/
    window.location.reload()
    
}