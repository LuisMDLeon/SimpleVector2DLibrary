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
        const new_heading = this.heading() + angle;

        const sn = Math.sin(new_heading);
        const cn = Math.cos(new_heading);

        this.x = this.x * cn - this.y * sn;
        this.y = this.x * sn + this.y * cn;
    }

    add(x, y) {
        if (x instanceof Vector2D) {
            this.x += x.x;
            this.y += x.y;
        } else {
            this.x += x;
            this.y += y;
        }
    }

    substract(x, y) {
        if (x instanceof Vector2D) {
            this.x -= x.x;
            this.y -= x.y;
        } else {
            this.x -= x;
            this.y -= y;
        }
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

function distance(a, b) {
    if (a instanceof Vector2D) {
        a = a.array();
        b = b.array();
    }

    const x_dif = b[0] - a[0];
    const y_dif = b[1] - a[1];
    return Math.sqrt((x_dif * x_dif) + (y_dif * y_dif));
}