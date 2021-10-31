/**
 * 虹色のサークル
 */
import * as p5 from 'p5';

let img1, img2, img3, img4,img5,img6,img7,img8,img9,img10

let layer1Images,layer2Images,layer3Images
let layer1Items,layer2Items,layer3Items


const sketch = (p: p5) => {
    p.preload = () => {

    };

    p.setup = () => {

        p.resizeCanvas(p.windowWidth, p.windowHeight);
        // p.colorMode(HSB,width,height, 100)

    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    let segmentCount = 0
    let a = 0
    p.draw = () => {
        p.colorMode(p.HSB, 360, p.width, p.height);
        p.background(360, 0, p.height)
        let angleStep = 360 / 36
        
        p.beginShape(p.TRIANGLE_FAN)
        p.vertex(p.width / 2, p.height / 2)
        for (let angle = 0; angle <= 360; angle += angleStep){
            let vx = p.width / 2 + p.cos(p.radians(angle)) * 360
            let vy = p.width / 2 + p.sin(p.radians(angle)) * 360
            p.vertex(vx, vy)

            p.fill(angle,950,900)
        }

        p.endShape()
    }
};

const sketchP = new p5(sketch)