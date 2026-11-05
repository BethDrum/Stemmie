import * as THREE from "three";
import { quotes } from "./quotes.js";

/* --------------------------
   SCENE
--------------------------- */

const canvas =
    document.querySelector(".webgl");

const scene =
    new THREE.Scene();

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
        window.innerHeight,
        0.1,
        100
    );

camera.position.z = 8;

scene.add(camera);

const renderer =
    new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

/* --------------------------
   STAR PARTICLES
--------------------------- */

const particleCount = 3000;

const positions =
    new Float32Array(
        particleCount * 3
    );

for (
    let i = 0;
    i < particleCount * 3;
    i++
) {
    positions[i] =
        (Math.random() - 0.5) * 40;
}

const geometry =
    new THREE.BufferGeometry();

geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const material =
    new THREE.PointsMaterial({
        color: "#FEFFE0",
        size: 0.04,
        transparent: true
    });

const particles =
    new THREE.Points(
        geometry,
        material
    );

scene.add(particles);

/* --------------------------
   INSPIRATION STARS
--------------------------- */

const quoteStars = [];

for (let i = 0; i < 12; i++) {

    const star =
        new THREE.Sprite(

            new THREE.SpriteMaterial({
                color: "#FEFFE0"
            })

        );

    star.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 3,
        4
    );

    star.scale.set(
        0.3,
        0.3,
        0.3
    );

    star.userData.quote =
        quotes[
            Math.floor(
                Math.random() *
                quotes.length
            )
        ];

    scene.add(star);

    quoteStars.push(star);
}

/* --------------------------
   QUOTE ELEMENT
--------------------------- */

const quoteElement =
    document.getElementById(
        "star-quote"
    );

let selectedStar = null;

/* --------------------------
   RAYCASTER
--------------------------- */

const raycaster =
    new THREE.Raycaster();

const mouse =
    new THREE.Vector2();

window.addEventListener(
    "click",
    (event) => {

        mouse.x =
            (event.clientX /
                window.innerWidth) *
            2 - 1;

        mouse.y =
            -(event.clientY /
                window.innerHeight) *
            2 + 1;

        raycaster.setFromCamera(
            mouse,
            camera
        );

        const hits =
            raycaster.intersectObjects(
                quoteStars
            );

        if (!hits.length) {

            selectedStar = null;

            quoteElement.classList.remove(
                "visible"
            );

            return;
        }

        selectedStar =
            hits[0].object;

        quoteElement.textContent =
            selectedStar.userData.quote;

        quoteElement.classList.add(
            "visible"
        );
    }
);

/* --------------------------
   RESIZE
--------------------------- */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);

/* --------------------------
   ANIMATE
--------------------------- */

/* --------------------------
   ANIMATE
--------------------------- */

function animate() {

    requestAnimationFrame(
        animate
    );

    quoteStars.forEach(
        (star) => {

            const targetScale =
                star === selectedStar
                    ? 1.0
                    : 0.3;

            star.scale.x +=
                (targetScale -
                    star.scale.x) *
                0.08;

            star.scale.y +=
                (targetScale -
                    star.scale.y) *
                0.08;
        }
    );

    if (selectedStar) {

        const position =
            selectedStar.position
                .clone();

        position.project(
            camera
        );

        const x =
            (position.x + 1) *
            window.innerWidth /
            2;

        const y =
            (-position.y + 1) *
            window.innerHeight /
            2;

        quoteElement.style.left =
            `${x}px`;

        quoteElement.style.top =
            `${y - 50}px`;
    }

    renderer.render(
        scene,
        camera
    );
}

animate();