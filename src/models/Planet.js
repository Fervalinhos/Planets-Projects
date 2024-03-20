export default class Planet {
    constructor(color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler) {
        this.color1 = color1;
        this.color2 = color2;
        this.name = name;
        this.conquest = conquest;
        this.population = population;
        this.settlements = settlements;
        this.natural_resources = natural_resources;
        this.location = location;
        this.communication = communication;
        this.ruler = ruler;
        this.id = parseInt(Math.random() * 200)
    }
}