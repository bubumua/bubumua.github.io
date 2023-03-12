// Particle System
const canvas = document.getElementById('particle');
const ctx = canvas.getContext('2d');

canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style.zIndex = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

class Particle {
    constructor(randomSeed) {
        this.M = 1e-6;   // adjust the speed of change in the direction of motion. the lower the value, the greater the range of motion
        this.T = 0.1;  // adjust movement distance per frame
        this.speed = 2000 + 5000 * randomSeed;   // the speed of the particle
        this.x = Math.random() * canvas.width;  // position in x
        this.y = Math.random() * canvas.height; // position in y
        this.radius = 5;    // size of particle
        this.RGBA = {
            r: 0,
            g: 128,
            b: 128,
            a: 1,
            counter: 0,
            count() {
                this.counter += 1;
                if (this.counter > 256 * 2) {
                    this.counter = 0;
                }
            }
        };
        this.color = 'rgba(' + this.RGBA.r + ',' + this.RGBA.g + ',' + this.RGBA.b + ',' + this.RGBA.a + ')';   // color of particle
        this.velocity = {   // velocity of particle in X and Y direction
            x: 0,
            y: 0
        };
    }

    draw(next) {
        ctx.beginPath();
        this.color = 'rgba(' + this.RGBA.r + ',' + this.RGBA.g + ',' + this.RGBA.b + ',' + this.RGBA.a + ')';
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // 确定粒子接下来的位置
    update(mouse) {
        // calculate necessary values
        let deltaX = mouse.x - this.x,
            deltaY = mouse.y - this.y,
            distanceFromMouse = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        // calculate variation in velocity 
        this.velocity.x += deltaX * this.M * distanceFromMouse * distanceFromMouse;
        this.velocity.y += deltaY * this.M * distanceFromMouse * distanceFromMouse;
        // speed restriction
        let currentVelocity = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
        this.velocity.x *= (Math.sqrt(this.speed) / currentVelocity);
        this.velocity.y *= (Math.sqrt(this.speed) / currentVelocity);
        // Determine displacement
        this.x += (this.velocity.x) * this.T;
        this.y += (this.velocity.y) * this.T;
        // update color
        this.RGBA.count();
        this.RGBA.g = Math.abs(this.RGBA.counter - 256);
        this.RGBA.b = 256 - this.RGBA.g;
        // draw particle
        this.draw(this);
    }
}
// create particles
const particles = [];
for (let i = 0; i < 13; i++) {
    particles.push(new Particle(Math.random()));
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0,0.1)';   // 透明度调节托影，过低影响画面
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update(mouse);
    });
    requestAnimationFrame(animate);
}

// 消除起始画布渐变
ctx.fillStyle = 'rgba(0, 0, 0)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// 启动动画循环
animate();