import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)

camera.position.z = 8

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
})

renderer.setSize(
    window.innerWidth,
    window.innerHeight
)

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
)

/* --------------------------
   STAR PARTICLES
--------------------------- */

const particleCount = 3000

const positions = new Float32Array(
    particleCount * 3
)

for(let i = 0; i < particleCount * 3; i++)
{
    positions[i] =
        (Math.random() - 0.5) * 40
}

const geometry =
    new THREE.BufferGeometry()

geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(
        positions,
        3
    )
)

const material =
    new THREE.PointsMaterial({
        color: '#FEFFE0',
        size: 0.04,
        transparent: true
    })

const stars =
    new THREE.Points(
        geometry,
        material
    )

scene.add(stars)

/* --------------------------
   MOUSE INTERACTION
--------------------------- */

let mouseX = 0
let mouseY = 0

let mouseEnabled = true

window.addEventListener('mousemove', (event) =>
{
    if (!mouseEnabled) return

    mouseX =
        (event.clientX / window.innerWidth - 0.5)

    mouseY =
        (event.clientY / window.innerHeight - 0.5)
})

window.addEventListener('keydown', (event) =>
{
    if(event.key.toLowerCase() === 'm')
    {
        mouseEnabled = !mouseEnabled

        if(!mouseEnabled)
        {
            mouseX = 0
            mouseY = 0
        }

        console.log(
            mouseEnabled
                ? 'Star movement ON'
                : 'Star movement OFF'
        )
    }
})

/* --------------------------
   RESIZE
--------------------------- */

window.addEventListener('resize', () =>
{
    camera.aspect =
        window.innerWidth /
        window.innerHeight

    camera.updateProjectionMatrix()

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )
})

/* --------------------------
   ANIMATE
--------------------------- */

const clock = new THREE.Clock()

function animate()
{
    const elapsed =
        clock.getElapsedTime()

    stars.rotation.y =
        elapsed * 0.03 +
        mouseX * 0.15

    stars.rotation.x =
        mouseY * 0.05

    renderer.render(
        scene,
        camera
    )

    requestAnimationFrame(
        animate
    )
}

animate()