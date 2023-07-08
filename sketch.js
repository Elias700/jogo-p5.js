let personagem
let grama 
let x = 64
let y = 64
let andarx = 0
let andary = 0
let velocidade = 64
let botao
const tamanho = 64


function setup() {
  createCanvas(576, 576);
  personagem = loadImage("person.png")
  grama = loadImage("grass.png")
}

function draw() {
  background(220);
  image(grama, x, 0 ,tamanho,tamanho)
  
  if(andarx < 0){
    andarx = 0
  }  
  if (andary < 0){
    andary = 0
  }
  if (andarx > 512){
    andarx = 512
  }
  if (andary > 512){
    andary = 512
  }
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
    image(grama, x*i, y*j, tamanho, tamanho)
  }
  }
 image(personagem, andarx, andary ,tamanho,tamanho)
 if(andarx === tamanho*8 && andary === tamanho*8) {
    rect(200, 128, 256, 256)
   text(`Ganhou`, 220, 270)
   
   botao = createButton("Reiniciar")
   botao.position(300, 350)
   botao.mousePressed(reiniciar)
   noLoop()
    }
  textSize(50)
  text(`x = ${andarx} y=${andary}`, 128, 128)
  }
  
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
     andarx += velocidade 
  }
  if(keyIsDown(DOWN_ARROW)){
     andary += velocidade 
  }
  if(keyIsDown(UP_ARROW)){
     andary -= velocidade 
  }
  if(keyIsDown(LEFT_ARROW)){
     andarx -= velocidade 
  }
}

function reiniciar(){
  andarx = 0 
  andary = 0
  botao.remove()
  loop()
  }