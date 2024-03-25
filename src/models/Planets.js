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
        return this.planets.find(planet => planet.id == id);
    }

    removePlanet(id) {
        this.planets = this.planets.filter(planet => planet.id !== id);
    }

    upadatePlanet(id, color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler) {
        console.log('update');
        const planetId = this.getPlanet(id);
        console.log(planetId);

        if (planetId) {
            console.log("Planet found");
            planetId.color1 = color1;
            planetId.color2 = color2;
            planetId.name = name;
            planetId.conquest = conquest;
            planetId.population = population;
            planetId.settlements = settlements;
            planetId.natural_resources = natural_resources;
            planetId.location = location;
            planetId.communication = communication;
            planetId.ruler = ruler;
        }
        console.log('final');
        return planetId;
    }
}


export default Planets;

