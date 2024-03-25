import Planet from "./Planet";
import { PlanetData } from "../data/PlanetData";

class Planets {
    constructor() {
        this.planets = [];
    }

    addPlanet(planet) {
        this.planets.push(planet);
    }

    getPlanets() {
        return this.planets;
    }

    getPlanet(id) {
        return this.planets.find(planet => planet.id === id);
    }

    removePlanet(id) {
        this.planets = this.planets.filter(planet => planet.id !== id);
    }

    upadatePlanet(id, color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler) {
        const planet = this.getPlanet(id);

        if (planet) {
            planet.color1 = color1;
            planet.color2 = color2;
            planet.name = name;
            planet.conquest = conquest;
            planet.population = population;
            planet.settlements = settlements;
            planet.natural_resources = natural_resources;
            planet.location = location;
            planet.communication = communication;
            planet.ruler = ruler;
        }
        return planet;
    }
}


export default Planets;

