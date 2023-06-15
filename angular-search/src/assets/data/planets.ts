import { Planet } from "src/app/shared/data-access/objects/planet";
 
export let planets: Planet[] = [
    { name: "Mercury", radius: 2439.7, moons: 0, image: "mercury.jpg" },
    { name: "Venus", radius: 6051.8, moons: 0, image: "venus.jpg" },
    { name: "Earth", radius: 6371, moons: 1, image: "earth.jpg" },
    { name: "Mars", radius: 3389.5, moons: 2, image: "mars.jpg" },
    { name: "Jupiter", radius: 69911, moons: 79, image: "jupiter.jpg" },
    { name: "Saturn", radius: 58232, moons: 82, image: "saturn.jpg" },
    { name: "Uranus", radius: 25362, moons: 27, image: "uranus.jpg" },
    { name: "Neptune", radius: 24622, moons: 14, image: "neptune.jpg" },
  ];