function f(input) {
    let schoolBook = {};
    for (const line of input) {
        let info = line.split(", ");
        let name = info[0].split(": ")[1];
        let grade = Number(info[1].split(": ")[1]);
        let averageScore = Number(info[2].split(": ")[1]);
        if (averageScore >= 3) {
            let newGrade = grade + 1;
            if (!schoolBook[newGrade]) {
                schoolBook[newGrade] = {
                    students: [],
                    totalScore: 0,
                    countStudents: 0,
                }
            }
            schoolBook[newGrade].students.push(name);
            schoolBook[newGrade].totalScore += averageScore;
            schoolBook[newGrade].countStudents++;
        }
    }
    for (const grade in schoolBook) {
        console.log(`${grade} Grade`);
        console.log(`List of students: ${schoolBook[grade].students.join(", ")}`)
        console.log(`Average annual score from last year: ${(schoolBook[grade].totalScore/schoolBook[grade].countStudents).toFixed(2)}`);
        console.log("===")
    }
}

f([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])

f(
    [
        "Student name: George, Grade: 5, Graduated with an average score: 2.75",
        "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
        "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
        "Student name: John, Grade: 9, Graduated with an average score: 2.90",
        "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
        "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15"
        ]
)
