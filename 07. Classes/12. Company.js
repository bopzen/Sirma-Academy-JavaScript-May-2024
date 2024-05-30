class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input")
        }
        let employee = {
            name,
            salary: Number(salary),
            position,
        }
        if (!this.departments[department]) {
            this.departments[department] = []
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;

    }

    bestDepartment() {
        let bestDepartment;
        let highestAverageSalary = 0;
        for (const [department, employees] of Object.entries(this.departments)) {
            let totalSalary = 0;
            for (const employee of employees) {
                totalSalary += employee.salary;
            }
            let averageSalary = totalSalary / employees.length;
            if(averageSalary > highestAverageSalary) {
                highestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        let bestEmployees = this.departments[bestDepartment].slice().sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        let result = `Best Department is: ${bestDepartment}\n`
        result += `Average salary: ${highestAverageSalary.toFixed(2)}\n`
        for (const employee of bestEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`
        }
        return result;
    }
}


let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
