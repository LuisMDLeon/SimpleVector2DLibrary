class Vector2D {
    constructor(x, y, ox = 0, oy = 0) {
        this.x = x;
        this.y = y;
        this.ox = ox;
        this.oy = oy;
    }

    heading() {
        const p1 = this.y - this.oy;
        const p2 = this.x - this.ox;
        const m = p1 / p2;
        const angle = Math.atan(m);
        return angle;
    }

    magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    rotate(angle) {
        const magnitude = this.magnitude();
        const new_heading = this.heading() + angle;

        this.x = magnitude * Math.cos(new_heading);
        this.y = magnitude * Math.sin(new_heading);
    }

    add(x, y) {
        this.x += x;
        this.y += y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    substract(x, y) {
        this.x -= x;
        this.y -= y;
    }

    substract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    setMagnitude(length) {
        const heading = this.heading();

        this.x = length * Math.cos(heading);
        this.y = length * Math.sin(heading);
    }

    array() {
        return [this.x, this.y];
    }
}

function SVectorFromPolarC(heading, magnitude) {
    const x = magnitude * Math.cos(heading);
    const y = magnitude * Math.sin(heading);

    return new Vector2D(x, y);
}

function SVectorRandom(min_mag, max_mag) {
    const heading = Math.random() * (Math.PI * 2);
    const magnitude = (max_mag) ? min_mag + Math.random() * (max_mag - min_mag) : min_mag;

    const x = magnitude * Math.cos(heading);
    const y = magnitude * Math.sin(heading);

    return new Vector2D(x, y);
}

function distance(point1, point2) {
    const x_dif = point2[0] - point1[0];
    const y_dif = point2[1] - point1[1];
    return Math.sqrt((x_dif * x_dif) + (y_dif * x_dif));
}