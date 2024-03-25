

export default class Planet {
    constructor(color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler) {
        this.id = getNewId();
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
    }

    getNewId() {
        return Math.floor(Math.random() * 1000);
    }

}