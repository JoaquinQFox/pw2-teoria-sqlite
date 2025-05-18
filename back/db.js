const sqlite3 = require('sqlite3').verbose();

const db_path = './imdb.db';

const db = new sqlite3.Database(db_path);

function getActors() {
    db.all("select * from actor", [], (err, rows) => {
        if (err) 
            console.log("error: " + err.message());
        else 
            console.log(rows);
    });
}
