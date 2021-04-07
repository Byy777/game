let body = document.querySelector('body')
body.style.background='black'
let div = document.createElement("div")
body.appendChild(div);
body.style.display='flex'
body.style.justifyContent='center'
div.style.marginTop='80px'
div.style.width='600px'
div.style.borderRadius='15px'
div.style.height='500px'
div.style.background='white'
let p=document.createElement('p')
div.appendChild(p)
p.style.textAlign='center'
p.style.fontWeight='bold'
p.style.marginTop='30px'
p.style.fontSize='24px'
let span=document.createElement('span')
span.innerHTML='5.0'
let div_2= document.createElement('div')
div.appendChild(div_2)
div_2.style.width='300px'
div_2.style.height='300px'
div_2.style.margin='0 auto'
div_2.style.position='relative'
div_2.style.marginTop='30px'
div_2.style.border='1px solid rgba(39, 38, 38, 0.185)'
div_2.style.background='grey'
let btn=document.createElement('button')
div_2.appendChild(btn)
btn.innerHTML='Начать'
btn.style.display='block'
btn.style.margin='0 auto'
btn.style.marginTop='120px'
btn.style.width='100px'
btn.style.height='40px'
btn.style.borderRadius='10%'
btn.style.border='1px solid black'
btn.style.cursor='pointer'
btn.style.background='red'
btn.style.fontSize='18px'
btn.addEventListener('mouseenter', function(event){
    event.target.style.boxShadow = '0 0 50px 20px rgba(189, 41, 41, 0.493)'
})
btn.addEventListener('mouseout', function(event){
    event.target.style.boxShadow = '0 0 0 20px rgba(189, 41, 41, 0)'
})
btn.style.fontWeight='bold'
btn.style.outline='none'
let p_2=document.createElement('p')
p_2.innerHTML='Время игры, (сек)'
div.appendChild(p_2)
p_2.style.textAlign='center'
p_2.style.fontWeight= 'lighter'
p_2.style.color='rgba(0, 0, 0, 0.562)'
let input=document.createElement('input')
div.appendChild(input)
input.style.display='block'
input.style.margin='0 auto'
input.style.height='25px'
input.setAttribute('value', '5')
input.style.width='180px'
input.style.borderRadius='15px'
input.style.border='1px solid rgba(39, 38, 38, 0.5)'
input.style.outline='none'
input.style.fontSize='18px'
p.innerHTML=`Время игры: ` + span.textContent
btn.addEventListener('click', startGame)
div_2.addEventListener('click', boxClick)
input.addEventListener('input', setGameTime)



function startGame(){
    score=0
    input.setAttribute('disabled', 'true')
    setGameTime()
    p.innerHTML=`Время игры: ` + span.textContent
    isGameStarted=true
    btn.style.display='none'
    div_2.style.background='#fff'
    

    let interval=setInterval(function(){
        let time=span.textContent

        if(time <= 0){
            clearInterval(interval)
            endGame()
        }
        else{
            span.textContent=(time-0.1).toFixed(1)
            p.innerHTML=`Время игры: ` + span.textContent
        }

    }, 100)

    renderBox()
}

function setGameTime(){
    let tt=+input.value
    span.textContent=tt.toFixed(1)
    p.innerHTML=`Время игры: ` + span.textContent
}

function endGame(){
    input.removeAttribute('disabled')
    isGameStarted=false
    
    div_2.innerHTML=''
    div_2.style.background='grey'
    p.innerHTML=`Ваш результат: ${score}` 

    btn=document.createElement('button')
    div_2.appendChild(btn)
    btn.innerHTML='Начать'
    btn.style.display='block'
    btn.style.margin='0 auto'
    btn.style.marginTop='120px'
    btn.style.width='100px'
    btn.style.height='40px'
    btn.style.borderRadius='10%'
    btn.style.border='1px solid black'
    btn.style.cursor='pointer'
    btn.style.background='red'
    btn.style.fontSize='18px'
    btn.addEventListener('mouseenter', function(event){
        event.target.style.boxShadow = '0 0 50px 20px rgba(189, 41, 41, 0.493)'
    })
    btn.addEventListener('mouseout', function(event){
        event.target.style.boxShadow = '0 0 0 20px rgba(189, 41, 41, 0)'
    })
    btn.style.fontWeight='bold'
    btn.style.outline='none'

    btn.addEventListener('click', startGame)
    
}

let isGameStarted=false

function renderBox(){
    div_2.innerHTML=''
    let box = document.createElement('div')
    let boxSize=getRandom(30, 100)
    div_2.appendChild(box)
    box.style.height=box.style.width= boxSize + 'px'
    let div_2Size= div_2.getBoundingClientRect()
    let maxTop=div_2Size.height-boxSize
    let maxLeft=div_2Size.width-boxSize
    box.style.position='absolute'
    box.style.background='rgba('+getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')'
    box.style.cursor='pointer'
    box.style.top=getRandom(0, maxTop)+'px'
    box.style.left= getRandom(0, maxLeft) +'px'
    div_2.insertAdjacentElement('afterbegin', box)
    box.setAttribute('data-box', 'true')
}

let score=0


function boxClick(event){
    if(!isGameStarted){
        return
    }

    if(event.target.dataset.box){
        score++
        renderBox()
    }
}


function getRandom(min, max){
    return Math.floor(Math.random() * (max-min)+min)
}
