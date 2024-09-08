document.getElementById('click-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
 }) 

 function makeGreen(){
    document.body.style.backgroundColor ='green'
}

document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink'
})

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


function makeChange(){
    const changeText = document.getElementById('heading-title');
    changeText.innerText = 'Habu vai er salam nin, bodna markar vote din';
}


