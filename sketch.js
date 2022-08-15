const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//options


//var para o corpo plano:


//var para os blocos
var block1, block2, block3;


function setup() {
  var canvas = createCanvas(550, 600);

  engine = Engine.create();
  world = engine.world;

  //propriedade para o corpo plano ficar parado
  var plane_options = {
    isStatic: true
  }


  //corpo plano
  plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
  //adicionando ao mundo
  World.add(world, plane);

  //criar múltiplas propriedades de blocos 
  //se basear no pdf do projeto




  //corpos dos blocos, se basear no pdf do projeto





  //estilizando os corpos aqui
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  //ative e coloque uma cor em background 
  // background();

  //descomente o código correto para atualizar o motor de física:
  //Engine.update(engine);
  //Engine.update(engine_word);
  //Engine.update(eng);

  //exibindo corpo plano
  rect(plane.position.x, plane.position.y, 1200);


  //descomente para ativar a exibição dos blocos(corpos)
  //ellipse(block1.position.x, block1.position.y, 30);
  //rect(block2.position.x, block2.position.y, 50, 50);
  //rect(block3.position.x, block3.position.y, 100, 50);


}
