import * as THREE from 'three'

const container = document.getElementById('planet-nav')

const scene = new THREE.Scene()

const aspect =
    container.clientWidth /
    container.clientHeight

const frustumSize = 20

const textureLoader = new THREE.TextureLoader()

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

/** ------- VENUS ------------*/

const venusTexture = textureLoader.load(
    '/textures/venus.jpg'
)

venusTexture.colorSpace = THREE.SRGBColorSpace

venusTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const homeMaterial =
    new THREE.MeshStandardMaterial({
        map: venusTexture,
        roughness: 0.8,
        metalness: 0.15
    })

const homePlanet = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    homeMaterial
)

homePlanet.position.x = -28

scene.add(homePlanet)

/**-----------EARTH--------------- */
const earthTexture = textureLoader.load(
    '/textures/earth.jpg'
)

earthTexture.colorSpace = THREE.SRGBColorSpace

earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const aboutMaterial =
    new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.8,
        metalness: 0.15
    })

const aboutPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    aboutMaterial
)

aboutPlanet.position.x = -14

scene.add(aboutPlanet)

/**------------MARS-------------- */

const marsTexture = textureLoader.load(
    '/textures/mars.jpg'
)

marsTexture.colorSpace = THREE.SRGBColorSpace

marsTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const projectsMaterial =
    new THREE.MeshStandardMaterial({
        map: marsTexture,
        roughness: 0.8,
        metalness: 0.15
    })

const projectsPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    projectsMaterial
)

projectsPlanet.position.x = 0

scene.add(projectsPlanet)

/**-----------SATURN---------- */
const saturnTexture = textureLoader.load(
    '/textures/saturn.jpg'
)

saturnTexture.colorSpace = THREE.SRGBColorSpace

saturnTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const contactMaterial =
    new THREE.MeshStandardMaterial({
        map: saturnTexture,
        roughness: 0.8,
        metalness: 0.15
    })

const contactPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    contactMaterial
)

contactPlanet.position.x = 15

scene.add(contactPlanet)

/* ---------- SATURN RING ---------- */

const saturnRingTexture = textureLoader.load(
    '/textures/saturn_ring.png'
)

saturnRingTexture.colorSpace = THREE.SRGBColorSpace
saturnRingTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const ringMaterial = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    map: saturnRingTexture,
    roughness: 0.8,
    metalness: 0.15
})

const ringGeometry = new THREE.RingGeometry(
    1.0,   // inner radius
    1.6,   // outer radius
    128
)

const ring = new THREE.Mesh(
    ringGeometry,
    ringMaterial
)

ring.rotation.x = Math.PI / 2.5;
ring.rotation.z = Math.PI / 5

ring.scale.set(2, 2, 2)

contactPlanet.add(ring)

/**-----------URANUS---------- */
const uranusTexture = textureLoader.load(
    '/textures/uranus.jpg'
)

uranusTexture.colorSpace = THREE.SRGBColorSpace
uranusTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const formMaterial =
    new THREE.MeshStandardMaterial({
        map: uranusTexture,
        roughness: 0.8,
        metalness: 0.15
    })

const formPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    formMaterial
)

formPlanet.position.x = 30

scene.add(formPlanet)
console.log(formPlanet.position);


/**--------------SET OG POSITIONS-------------- */
homePlanet.userData.baseX = homePlanet.position.x
aboutPlanet.userData.baseX = aboutPlanet.position.x
projectsPlanet.userData.baseX = projectsPlanet.position.x
contactPlanet.userData.baseX = contactPlanet.position.x
formPlanet.userData.baseX = formPlanet.position.x

homePlanet.userData.url = "index.html";
aboutPlanet.userData.url = "/blog/events.html";
projectsPlanet.userData.url = "/events/blogs.html";
contactPlanet.userData.url = "/quiz/quiz.html";
/* ---------- INTERACTION ---------- */

const raycaster =
    new THREE.Raycaster()

const mouse =
    new THREE.Vector2()

const mouseWorld = new THREE.Vector2()

// planet hover
let hoveredPlanet = null

const planets = [
    homePlanet,
    aboutPlanet,
    projectsPlanet,
    contactPlanet,
    formPlanet
]

renderer.domElement.addEventListener(
    'click',
    (event) => {

        const rect = renderer.domElement.getBoundingClientRect();

        mouse.x =
            ((event.clientX - rect.left) / rect.width) * 2 - 1;

        mouse.y =
            -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(planets);

        if (!intersects.length) return;

        const clickedPlanet = intersects[0].object;

        if (clickedPlanet.userData.url) {
            window.location.href = clickedPlanet.userData.url;
        }
    }
);

/* ---------- HOVER ---------- */

window.addEventListener(
    'mousemove',
    event => {
        mouseWorld.x =
            mouse.x * (frustumSize * aspect) / 2

        mouseWorld.y =
            mouse.y * (frustumSize) / 2

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
    planets.forEach((planet) => {

        const dx =
            mouseWorld.x -
            planet.position.x

        const dy =
            mouseWorld.y -
            planet.position.y

        const distance =
            Math.sqrt(dx * dx + dy * dy)

        const influenceRadius = 10

        if (distance < influenceRadius) {
            const force =
                (influenceRadius - distance) /
                influenceRadius

            const targetX =
                planet.userData.baseX +
                dx * 0.12 * force

            planet.position.x +=
                (targetX - planet.position.x) *
                0.08
        }else {
            planet.position.x +=
                (planet.userData.baseX - planet.position.x) *
                0.08
        }
    })

    planets.forEach((planet) => {
        planet.rotation.y += 0.002
    })

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
