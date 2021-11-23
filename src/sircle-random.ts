/**
    サークルのy軸ランダム生成
 */
 import * as p5 from 'p5';


 const sketch = (p: p5) => {
     p.preload = () => {
 
     };
 
     p.setup = () => {
 
         p.resizeCanvas(1320, 1000);
         for (let index = 0; index < 200; index++) {
             p.noStroke()
              let x = p.random(1000)
              let y = p.random(1000)
              let del = p.random(y,10.0)
             p.fill(p.random(110,255),p.random(120),p.random(150),100)
             p.ellipse(x,y,del,del)
         }
 
         for (let index = 0; index < 10; index++) {
             p.noStroke()
              let x = p.random(1000)
              let y = p.random(800,100)
              let del = p.random(y,10.0)
             p.fill(p.random(110),p.random(10,100),p.random(50),100)
 
              p.rect(x,y,del,del)
 
         }
     };
 
     p.windowResized = () => {
         // p.resizeCanvas(p.windowWidth, p.windowHeight);
     };
 
     let segmentCount = 0
     let a = 0
     let width = 600
     p.draw = () => {
    
     }
 };
 
 const sketchP = new p5(sketch)