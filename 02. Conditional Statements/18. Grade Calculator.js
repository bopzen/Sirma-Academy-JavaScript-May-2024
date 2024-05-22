function f(grade) {
    let mark;
    if (90 <= grade && grade <= 100) {
        mark = 'A';
    } else if (80 <= grade && grade <= 89) {
        mark = 'B';
    } else if (70 <= grade && grade <= 79) {
        mark = 'C';
    } else if (60 <= grade && grade <= 69) {
        mark = 'D';
    } else if (0 <= grade && grade <= 49) {
        mark = 'F';
    }
    console.log(mark);
}

f(95)
f(82)
f(76)
f(65)
f(45)