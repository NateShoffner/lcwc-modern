class Unit {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Incident {
    category: string;
    date: string;
    description: string;
    municipality: string;
    intersection: string;
    number: number;
    priority?: number
    agency: string;
    units: Unit[];

    constructor(category: string, date: string, description: string, municipality: string, intersection: string, number: number, priority: number, agency: string, units: Unit[]) {
        this.category = category;
        this.date = date;
        this.description = description;
        this.municipality = municipality;
        this.intersection = intersection;
        this.number = number;
        this.priority = priority;
        this.agency = agency;
        this.units = units;
    }
}

export default Incident;
