class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    heading() {
        const angle = Math.atan2(this.y, this.x);
        return angle;
    }

    magnitude() {
        if (this.x == 0 && this.y == 0) return 0;
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

    substract(x, y) {
        this.x -= x;
        this.y -= y;
    }

    multiply(n) {
        this.x *= n;
        this.y *= n;
    }

    setMagnitude(length) {
        const heading = this.heading();

        this.x = length * Math.cos(heading);
        this.y = length * Math.sin(heading);
    }

    limit(length) {
        let magnitude = this.magnitude();
        if (magnitude > length) this.setMagnitude(length);
    }

    setAngle(angle) {
        const magnitude = this.magnitude();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    }

    rotate(angle) {
        let heading = this.heading() + angle;
        heading = heading % (Math.PI * 2);
        this.setAngle(heading);
    }

    copy() {
        return new Vector2D(this.x, this.y);
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

function AddSVectors(vector_a, vector_b) {
    const x = vector_a.x + vector_b.x;
    const y = vector_a.y + vector_b.y;

    return new Vector2D(x, y);
}

function SubSVectors(vector_a, vector_b) {
    const x = vector_a.x - vector_b.x;
    const y = vector_a.y - vector_b.y;

    return new Vector2D(x, y);
}

function distance(point1, point2) {
    const x_dif = point2[0] - point1[0];
    const y_dif = point2[1] - point1[1];
    return Math.sqrt((x_dif * x_dif) + (y_dif * y_dif));
}