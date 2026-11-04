import * as THREE from 'three'

const container = document.getElementById('planet-nav')

const scene = new THREE.Scene()

const aspect =
    container.clientWidth /
    container.clientHeight

const frustumSize = 20

const camera =
    new THREE.OrthographicCamera(
        (-frustumSize * aspect) / 2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        -frustumSize / 2,
        0.1,
        100
    )

camera.position.z = 10

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
})

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
)

renderer.setSize(
    container.clientWidth,
    container.clientHeight
)

container.appendChild(
    renderer.domElement
)

/* ---------- LIGHTING ---------- */

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        2
    )

scene.add(ambientLight)

const directionalLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    )

directionalLight.position.set(
    5,
    5,
    5
)

scene.add(directionalLight)

/* ---------- PLANET FACTORY ---------- */

function createPlanet(
    color,
    x
) {
    const geometry =
    new THREE.SphereGeometry(1.4, 64, 64)

    const material =
        new THREE.MeshStandardMaterial({
            color,
            roughness: 0.8,
            metalness: 0.15
        })

    const planet =
        new THREE.Mesh(
            geometry,
            material
        )

    planet.position.x = x

    scene.add(planet)

    return planet
}


/* ---------- PLANETS ---------- */

const homePlanet =
    createPlanet('#78CDD7', -18)

const aboutPlanet =
    createPlanet('#4dbef5', -6)

const projectsPlanet =
    createPlanet('#7d88ff', 6)

const contactPlanet =
    createPlanet('#d2b278', 19)

homePlanet.scale.set(2.8, 2.8, 2.8)
aboutPlanet.scale.set(2.8, 2.8, 2.8)
projectsPlanet.scale.set(2.8, 2.8, 2.8)
contactPlanet.scale.set(2.8, 2.8, 2.8)

/* ---------- SATURN RING ---------- */

const ringGeometry = new THREE.RingGeometry(
    1.0,   // inner radius
    1.6,   // outer radius
    128
)

const ringMaterial = new THREE.MeshStandardMaterial({
    color: '#e7cf9a',
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85
})

const ring = new THREE.Mesh(
    ringGeometry,
    ringMaterial
)

ring.rotation.x = Math.PI / 2.5;
ring.rotation.z = Math.PI / 5

ring.scale.set(1.5, 1.5, 1.5)

contactPlanet.add(ring)

/* ---------- INTERACTION ---------- */

const raycaster =
    new THREE.Raycaster()

const mouse =
    new THREE.Vector2()

// planet hover
let hoveredPlanet = null

const planets = [
    homePlanet,
    aboutPlanet,
    projectsPlanet,
    contactPlanet
]

renderer.domElement.addEventListener(
    'click',
    event => {

        const rect =
            renderer.domElement.getBoundingClientRect()

        mouse.x =
            ((event.clientX - rect.left)
                / rect.width) * 2 - 1

        mouse.y =
            -((event.clientY - rect.top)
                / rect.height) * 2 + 1

        raycaster.setFromCamera(
            mouse,
            camera
        )

        const intersects =
            raycaster.intersectObjects([
                homePlanet,
                aboutPlanet,
                projectsPlanet,
                contactPlanet
            ])

        if (!intersects.length) return

        const target =
            intersects[0].object

        if (target === homePlanet)
            document
                .querySelector('#hero')
                ?.scrollIntoView({
                    behavior: 'smooth'
                })

        if (target === aboutPlanet)
            document
                .querySelector('#about')
                ?.scrollIntoView({
                    behavior: 'smooth'
                })

        if (target === projectsPlanet)
            document
                .querySelector('#projects')
                ?.scrollIntoView({
                    behavior: 'smooth'
                })

        if (target === contactPlanet)
            document
                .querySelector('#contact')
                ?.scrollIntoView({
                    behavior: 'smooth'
                })
    }
)

/* ---------- HOVER ---------- */

window.addEventListener(
    'mousemove',
    event => {

        const rect =
            renderer.domElement.getBoundingClientRect()

        mouse.x =
            ((event.clientX - rect.left)
                / rect.width) * 2 - 1

        mouse.y =
            -((event.clientY - rect.top)
                / rect.height) * 2 + 1

        raycaster.setFromCamera(
            mouse,
            camera
        )

        const hits =
            raycaster.intersectObjects(planets)

        hoveredPlanet =
            hits.length > 0
                ? hits[0].object
                : null

        document.body.style.cursor =
            hits.length
                ? 'pointer'
                : 'default'
    }
)

/* ---------- RESIZE ---------- */

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight

        camera.updateProjectionMatrix()

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        )
    }
)

/* ---------- RENDER ---------- */

function animate() {

    renderer.render(
        scene,
        camera
    )

    requestAnimationFrame(
        animate
    )

    planets.forEach((planet) => {

        const targetScale =
            planet === hoveredPlanet
                ? 3.1
                : 2.8

        planet.scale.lerp(
            new THREE.Vector3(
                targetScale,
                targetScale,
                targetScale
            ),
            0.08
        )

        if (planet.material) {

            planet.material.emissive.set(
                planet === hoveredPlanet
                    ? '#ffffff'
                    : '#000000'
            )

            planet.material.emissiveIntensity =
                planet === hoveredPlanet
                    ? 0.4
                    : 0
        }
    })
}

animate()