let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//ctx.fillRect(50,50,100,100) //rectangle canvas parameters
//
//  for (let row = 0; row < 8; row++) {
//      for (let col = 0; col < 8; col++) {
//          if((row + col) % 2 === 0){
//              let x = 25 + col * 50;
//              let y = 25 + row * 50;
//              ctx.fillRect(x,y,50,50);
//           }
//       }
//  }

//  ctx.beginPath();
// // ctx.arc(75,75,50,0,Math.PI*2,true);
//  ctx.moveTo(110,75);
//  ctx.arc(75,75,35,0,Math.PI,false);
//  ctx.moveTo(65,65);
//  ctx.arc(60,65,5,0,Math.PI*2,true);
//  ctx.moveTo(95,65);
//      ctx.arc(90,65,5,0,Math.PI*2,true);
//  ctx.stroke();
//drowImage
//let image = document.getElementById('image');
//ctx.drawImage(image,200, 200, 400, 400,
   //200, 200, 400, 400);

////ctx.drawImage(image,50,50)

//DrowButton
 //  ctx.fillStyle = 'orange';
  //  ctx.fillRect(30, 30, 200, 40);
  //  ctx.fillStyle = 'white';
  //  ctx.font = "24px monospace";
  //  ctx.textAlign = 'center';
  //  ctx.textBaseline = 'middle';
  //  ctx.fillText("Submit", 130, 50);

//clickEvent
  //  let image = document.getElementById('image');
  //  image.addEventListener('click',function () {
  //      console.log('SomeOne click me');
  //  });


//keydownEvent
 // let x = 20;
 // let y = canvas.height-20;
 //
 // function drawBall() {
 //     ctx.beginPath();
 //     ctx.arc(x,y,10,0,Math.Pi*2);
 //     ctx.fillStyle = '#0095DD';
 //     ctx.fill();
 //     ctx.closePath();
 // }
 // function draw() {
 //     ctx.clearRect(0,0,canvas.width,canvas.height);
 //     drawBall();
 //     x += 1;
 //     y += -1;
 // }
 // draw();
 // document.addEventListener('keydown',function (event) {
 //     if(event.key === 'ArrowRight'){
 //         x += 5
 //     }else if(event.key === 'ArrowUp') {
 //         y -= 5
 //     }else if(event.key === 'ArrowDown') {
 //         y += 5
 //     }else if(event.key === 'ArrowLeft') {
 //         x -= 5
 //     }
 //     draw();
 // },false);

