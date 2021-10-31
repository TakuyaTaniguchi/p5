/**
 * 適当な画像をランダムに配置する
 */

import * as p5 from 'p5';

let img1, img2, img3, img4,img5,img6,img7,img8,img9,img10

let layer1Images,layer2Images,layer3Images
let layer1Items,layer2Items,layer3Items


const sketch = (p: p5) => {
    p.preload = () => {
        img1 = p.loadImage('../src/images/ado.jpeg');
        img2 = p.loadImage('../src/images/ama.jpg');
        img3 = p.loadImage('../src/images/bee.jpg');
        img4 = p.loadImage('../src/images/king.jpg');
        img5 = p.loadImage('../src/images/on.jpeg');
        img6 = p.loadImage('../src/images/retiti.jpg');
        img7 = p.loadImage('../src/images/slip.jpg');
        img8 = p.loadImage('../src/images/bana.jpg');
        img9 = p.loadImage('../src/images/sum.jpeg');
        img10 = p.loadImage('../src/images/grenn.jpg');





    };

    p.setup = () => {

        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.image(img1, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img2, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img3, p.random(p.width - 200), p.random(p.height - 10), 200, 300);
        p.image(img4, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img5, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img6, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img7, p.random(p.width - 200), p.random(p.height - 10), 200, 300);
        p.image(img8, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        p.image(img9, p.random(p.width - 200), p.random(p.height - 10), 200, 300);
        p.image(img10, p.random(p.width - 10), p.random(p.height - 10), 10, 10);
        // p.colorMode(HSB,width,height, 100)

    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    
    var angle = 45.0
    var c = 160
    var lineLength = 100
    var angleSpeed = 10
    p.draw = () => {
        if (p.mouseIsPressed) {
            p.image(img1, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img1, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img2, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img3, p.random(p.width - 200), p.random(p.height - 100), 200, 300);
            p.image(img4, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img5, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img6, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img7, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img8, p.random(p.width - 100), p.random(p.height - 100), 200, 300);
            p.image(img9, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img10, p.random(p.width - 100), p.random(p.height - 100), 200, 300);
            // p.image(img4, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            // p.fill(255, 204, 0);
            p.translate(p.random(100,1000), p.mouseY)
            // p.rotate(p.radians(angle))
            // p.stroke(25, 204, 110)
            // p.strokeWeight(4)
            // p.line(0,0,lineLength,0)
            p.pop()
            angle += angleSpeed
        }
    }
};

const sketchP = new p5(sketch)