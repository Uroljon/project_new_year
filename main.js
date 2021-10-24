var snowNumber = 100; //<--this is the number of snowflakes MULTIPLED BY 5 BECAUSE WE HAVE 5 SECTIONS OR DIRECTIONS IN WHICH SNOW IS FALING. DO NOT INCREASE IT TOO MUCH ! IT WILL CONSUME YOUR CPU AND MEMORY!
var differentiate;      //<-- this is the different vertical position of each snowflake
var element;            //<-- this is the actual snowflakes in HTML+CSS
var delay;              //<-- this is the delay time each decideing when each snowflake animation starts
var faceSnowAnimation;  //bu faceSnowAnimation uchun intervalni yoqib o'chirish uchun kerak.
let snowflakeForTree;  //bu archa daraxti yasash uchun kerakli o'zgaruvchi 
var audio = new Audio('music/joy.aac');//this is just an audio 1.
audio.loop = true;     //audioni uzluksiz eshitish uchun
var audio2 = new Audio('music/Jingle_Bellsl.mp3');
// var audio2 = new Audio('https://drive.google.com/file/d/1vbLwXMsc1uxlxjBxMUrZFRrqYt6kPgZs/view?usp=sharing');
audio2.loop = true;

if(screen.width < 768){
    snowNumber = 50;
}
var greet = window.setTimeout(function(){  //tabrik so'zini 10s dan keyin olib tashlaydi
    document.getElementById("Hello").remove();       
}, 9999);

function snowing(){
    
//======================to up side flow==================================

for(let i=1; i<=snowNumber; i++){
        
        differentiate = Math.random()*(200);
        delay = Math.random()*10;
//generating snowflakes :
        element = "<i class=\"fa fa-snowflake-o snowToUp\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
//adding snowflakes to HTML page, after one #secondSnow element :
        document.getElementById("thirdSnow").insertAdjacentHTML("afterend", element);    
}

//======================to right Middle flow=============================

for(let i=1; i<=snowNumber; i++){
        
    differentiate = Math.random()*(300);
    delay = Math.random()*10;
//generating snowflakes :
    element = "<i class=\"fa fa-snowflake-o snowToMiddleR\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
//adding snowflakes to HTML page :
document.getElementById("fourthSnow").insertAdjacentHTML("afterend", element);
}
//======================to left Middle flow=============================

for(let i=1; i<=snowNumber; i++){
        
    differentiate = Math.random()*(300);
    delay = Math.random()*10;
//generating snowflakes :
    element = "<i class=\"fa fa-snowflake-o snowToMiddleL\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
//adding snowflakes to HTML page :
document.getElementById("fifthSnow").insertAdjacentHTML("afterend", element);
}

//======================to right Bottom side flow=============================

    for(let i=1; i<=snowNumber; i++){
        
        differentiate = Math.random()*(400);
        delay = Math.random()*10;
//generating snowflakes :
        element = "<i class=\"fa fa-snowflake-o snowToRight\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
//adding snowflakes to HTML page :
    document.getElementById("firstSnow").insertAdjacentHTML("afterend", element);
    }
//=======================to left Bottom side flow =============================

    for(let i=1; i<=snowNumber; i++){
       
        differentiate = Math.random()*(400);
        delay = Math.random()*10;
//generating snowflakes :
        element = "<i class=\"fa fa-snowflake-o snowToLeft\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
//adding snowflakes to HTML page, after one #secondSnow element :
       document.getElementById("secondSnow").insertAdjacentHTML("afterend", element);
    }

//=======================SNOW TO FACE HAHA :)==================================
faceSnowAnimation = window.setInterval(faceSnow, 8000); /* har 8 sekundda ekranga qor tushib yopishib qoladi*/
    function faceSnow(){
        
        differentiate = Math.random()*(200);  
        delay = 0;       
        document.getElementById("snowOnFace").outerHTML = "<i class=\"fa fa-snowflake-o snowtoFace\" id=\"snowOnFace\" style=\"top: "+ differentiate + "px; animation-delay: " + delay +"s\"></i>";
        // document.getElementById("snowOnFace").style.top = differentiate + "px";
    
        
    } 

// audio =++++++++++++++
    audio.play();

}  

// document.onload = snowing();//yuklanishi bilan animatsiya ham boshlanib ketadi. Bu yaxshi samara bermadi , chunki js autoplay audio xizmatini ishlatishga ruxsat bermadi.

document.getElementById("button").addEventListener("click", function(){//toggle animation button

    if(this.innerHTML == "Stop snowing"){//animatsiyani o'chiradi :
        
        // let itemToDelete = document.querySelectorAll("i");
        // for(let i=0; i<itemToDelete.length; i++){
        // itemToDelete[i].remove();      
        // }
        document.getElementById("button").innerHTML = "Reload :)";
        window.clearInterval(faceSnowAnimation); 
        audio.pause();
        document.getElementById("section").style.display = "block";
        document.getElementById("main").style.display = "none";
        drawTree();
        audio2.play();
    }
    else{//reload qilish uchun
        if(document.getElementById("button").innerHTML == "Reload :)"){        
            location.reload();  
        }

        else{//birinchi marta qor yog'dirish uchun
            audio.play();        
            snowing();   
            document.getElementById("button").innerHTML = "Stop snowing";      
        
        }
          
    }   
    
});

function drawTree(){
    for (let i = 1; i <= 100; i++) {
        snowflakeForTree = "<i class=\"fa fa-snowflake-o tree\" style=\"animation-delay: " + i / 3 + "s\"></i>";
        document.getElementById("example").insertAdjacentHTML("afterend", snowflakeForTree);
      
    }
}








     // let tabrik = document.createTextNode("Tabassumga burkansin dunyo,<br>Qordek oppoq bo’lsin dilingiz.<br>Bo’lsin qordek tozа, musaffo<br>Qadam qo’ygan YANGI YILINGIZ!!");

