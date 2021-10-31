import * as p5 from 'p5';

let img1, img2, img3, img4

let layer1Images,layer2Images,layer3Images
let layer1Items,layer2Items,layer3Items


const sketch = (p: p5) => {
    p.preload = () => {
        img1 = p.loadImage('../src/images/sky.png');
        img2 = p.loadImage('../src/images/sky1.jpg');
        img3 = p.loadImage('../src/images/cosmosn1.png');
        img4 = p.loadImage('../src/images/town.jpeg');
    };

    p.setup = () => {

        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.image(img1, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
        p.image(img2, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
        p.image(img3, p.random(p.width - 200), p.random(p.height - 100), 200, 300);
        p.image(img4, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
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
            p.translate(p.width / 2, p.height / 2);
            p.rotate(p.random(0,180) * 45);
            p.image(img1, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img1, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img2, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
            p.image(img3, p.random(p.width - 200), p.random(p.height - 100), 200, 300);
            p.image(img4, p.random(p.width - 100), p.random(p.height - 100), 100, 100);
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