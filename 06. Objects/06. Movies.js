function f(input) {
    let movies = [];

    for (const command of input) {
        if (command.includes('addMovie')) {
            let commandArr = command.split(" ")
            commandArr.shift();
            let movieName = commandArr.join(" ");
            let movie = {name: movieName}
            movies.push(movie);
        } else if (command.includes('directedBy')) {
            let commandArr = command.split(" directedBy ");
            let movieName = commandArr[0];
            let directorName = commandArr[1];
            let movie = findMovie(movies, movieName);
            if (movie) {
                movie.director = directorName
            }
        } else if (command.includes('onDate')) {
            let commandArr = command.split(" onDate ");
            let movieName = commandArr[0];
            let movieDate = commandArr[1];
            let movie = findMovie(movies, movieName);
            if (movie) {
                movie.date = movieDate
            }
        }
    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            let json = JSON.stringify(movie);
            console.log(json);
        }
    }

    function findMovie(movies, name) {
        for (const movie of movies) {
            if (movie.name == name) {
                return movie;
            }
        }
        return;
    }
}

f(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        ' Spinderman 2 onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]
)

f(
    [
        'addMovie The Avengers',
        'addMovie Spiderman',
        'The Avengers directedBy Pesho Peshov',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo',
        'The Avengers directedBy Anthony Russo',
        ]
)