/**
 * 虹色のサークル
 */
 import * as p5 from 'p5';


 const sketch = (p: p5) => {
     p.preload = () => {
 
     };
 
     p.setup = () => {
 
         p.resizeCanvas(1320, 1000);
         p.noFill()
         p.colorMode(p.HSB,1000,100,100);
         p.frameRate(5);
         p.strokeWeight(4);
     };
 
     p.windowResized = () => {
         // p.resizeCanvas(p.windowWidth, p.windowHeight);
     };
     let x = 0;
     let c = 0;
     p.draw = () => {
 
         // const r = p.map(x, 0, p.width, 300, 0);
         p.circle(p.width/2,p.height/2,x)
         p.stroke(c,c,c)
         // p.fill(p.random(0,300),p.random(0,300),p.random(0,300),.2)
 
         // const x1 = 200;
         // const x2 = 300;
 
         // // 0.5
         // const ratio = p.norm(x, x1, x2);
         // p.line(x,x2,x,ratio)
         // const flag = p.constrain(x,0,250)
         x+= 25;
         c+= 50;
 
         if(x === 600){
             p.clear();
             x = 0
             c = 0
         }
     }
 
  
 };
 
 const sketchP = new p5(sketch)