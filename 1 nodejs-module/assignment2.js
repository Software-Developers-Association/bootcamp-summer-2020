/**
 * Movie Catalog RESTful API that can get movies, find a movie by ID, you can also create
 * a movie to be stored in our 'database'
 * 
 * 1.) Get all movies in catalog
 * 2.) Get a specific movie in a catalog (by id)
 * 3.) Create a movie to be put in oour catalog
 */

const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;

// Each movie object must have
// A name, director, year, unique id (we will fake this)
const movies = [];

const server = http.createServer(
    (req, res) => {
        // set the header for the response...
        res.setHeader('Content-Type', 'application/json');

        // parse out the URL so we can extract information
        // from the request (like query parameters)
        const parsedURL = url.parse(req.url, true);

        switch(req.method) {
            // GET - Get all the movies /movies
            // GET - Get a specific movie (by id in a query parameter) /movies?id=MOVIE_ID
            case 'GET': {
                switch(parsedURL.pathname) {
                    case '/movies': {
                        if(Object.hasOwnProperty.bind(parsedURL.query)('id')) {
                            // parse out the ID as an integer...
                            let id = Number.parseInt(parsedURL.query.id);
                            let movie = undefined;

                            for(let i = 0; i < movies.length; ++i) {
                                let m = movies[i];

                                if(m.id == id) {
                                    movie = m;

                                    // stop looping...
                                    break;
                                }
                            }

                            // we found the movie...
                            if(movie !== undefined) {
                                const result =  {
                                    message: 'Success',
                                    code: res.statusCode,
                                    movie: movie
                                };

                                res.write(JSON.stringify(result));
                            } else {
                                // we did not find the movie with
                                // that specific ID

                                res.statusCode = 400; // bad request..

                                const result =  {
                                    message: `Could not find the movie with ID ${id}`,
                                    code: res.statusCode
                                };

                                res.write(JSON.stringify(result));
                            }
                        } else {
                            // If no ID was found,
                            // they must want all the movies
                            const result = {
                                message: `Success`,
                                code: res.statusCode,
                                movies: movies
                            }

                            res.write(JSON.stringify(result));
                        }
                    } break;
                    default: {
                        res.statusCode = 400;

                        const result = {
                            message: `Invalid pathname ${parsedURL.pathname}`,
                            code: res.statusCode
                        };

                        res.write(JSON.stringify(result));
                    } break;
                }
            } break;
            // POST - Store a movie (name, directory, year from the query parameters)
            case 'POST': {
                switch(parsedURL.pathname) {
                    case '/movies': {
                        // Create the movie object to be
                        // stored in our 'database/catalog' (movies)
                        const movie =  {
                            id: movies.length + 1,
                            name: parsedURL.query.name,
                            director: parsedURL.query.director,
                            year: Number.parseInt(parsedURL.query.year)
                        };

                        // Add/Insert into our movies 'database/catalog'
                        movies.push(movie);

                        const result =  {
                            message: `Added movie successfully!`,
                            code: res.statusCode,
                            movie: movie
                        };

                        res.write(JSON.stringify(result));
                    } break;
                    default: {
                        res.statusCode = 400;

                        const result =  {
                            message: `Invalid pathname ${parsedURL.pathname}`,
                            code: res.statusCode
                        };

                        res.write(JSON.stringify(result));
                    } break;
                }
            } break;
            // The request was made using an HTTP verb/method that is
            // not yet supported...return an error message...
            default: {
                res.statusCode = 400;

                const result = {
                    message: `Invalid HTTP method ${req.method}`,
                    code: res.statusCode
                }

                res.write(JSON.stringify(result));
            } break;
        }

        // MAKE SURE TO CLOSE THE CONNECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        res.end();
    });

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});