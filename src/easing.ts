/**
 * 虹色のサークル
 */
 import * as p5 from 'p5';


 const sketch = (p: p5) => {
     let t, x1, y1, x2, y2;
     p.preload = () => {
 
     };
 
     p.setup = () => {
 
         p.resizeCanvas(1320, 1000);
         p.noFill()
         p.colorMode(p.HSB,1000,100,100);
         p.frameRate(60);
         p.strokeWeight(4);
         x1 = 0;
         y1 = p.height;
         x2 = p.width;
         y2 = 0;
         t=0
     };
 
     p.windowResized = () => {
         // p.resizeCanvas(p.windowWidth, p.windowHeight);
     };
 
     function tt(t) {
         return t * t;
     }
 
     function easeOutQuint(x: number): number {
         return 1 - p.pow(1 - x, 5);
     }
 
     function easeInOutElastic(x: number): number {
         const c5 = (2 * Math.PI) / 4.5;
         
         return x === 0
           ? 0
           : x === 1
           ? 1
           : x < 0.5
           ? -(p.pow(2, 20 * x - 10) * p.sin((20 * x - 11.125) * c5)) / 2
           : (p.pow(2, -20 * x + 10) * p.sin((20 * x - 11.125) * c5)) / 2 + 1;
         }
 
     p.draw = () => {
         const x = p.lerp(x1, x2, easeInOutElastic(t));
         const y = p.lerp(y1, y2, easeInOutElastic(t));
         t += 0.005;
         if (t > 1) {
           t = 0;
         }
       
         p.clear();
         console.log(x)
         p.circle(x,y, 120);
     }
 
 };
 
 const sketchP = new p5(sketch)