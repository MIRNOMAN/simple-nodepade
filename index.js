// bold section
function Bold(){
    const target = document.getElementById("textarea");
    if( target.style.fontWeight == "bold" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bold";
    }
}


// italic section
 function italicText(){
    
    const target = document.getElementById("textarea")
    
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
 }
// underline section

function underline(){
    var target = document.getElementById("textarea");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}
// left-text
function leftText(){
    var target = document.getElementById("textarea");
    if( target.style.textAlign == "left" ) {
        target.style.textAlign = "none";
    } else {
        target.style.textAlign = "left";
    }
}


function center(){
    var target = document.getElementById("textarea");
    if( target.style.textAlign == "center" ) {
        target.style.textAlign = "none";
    } else {
        target.style.textAlign = "center";
    }
}


function rightText(){
    var target = document.getElementById("textarea");
    if( target.style.textAlign == "right" ) {
        target.style.textAlign = "none";
    } else {
        target.style.textAlign = "right";
    }
}


function justify(){
    var target = document.getElementById("textarea");
    if( target.style.textAlign == "justify" ) {
        target.style.textAlign = "none";
    } else {
        target.style.textAlign = "justify";
    }
}


const target = document.getElementById('textarea');
document.getElementById('input').addEventListener('click', function(){
    const inputCount = document.getElementById('input').value
   target.style.fontSize = inputCount + 'px'
    
})


const targetId = document.getElementById('textarea');
document.getElementById('favcolor').addEventListener('change', function(){
    const inputColur = document.getElementById('favcolor').value
   targetId.style.color = inputColur;
    
})

