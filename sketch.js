﻿let particles = [];
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    for (let i = 0; i < 10; i++) {
        let p = new Particle();
        particles.push(p);
    }
    for (let i = particles.length-1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
    
    finished() {
        return this.alpha < 0;
    }

    update() {
        this.vy += 0.02;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }
}