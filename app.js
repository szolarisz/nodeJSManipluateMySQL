const mysql = require('mysql');

function lekerdezes() {
    let result;
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "dolgozok1g",
        user: "root",
        password: ""
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("MySQL connected");
        console.log("Lekérdezés");
        const myQuery = "SELECT * FROM dolgozo;";
        connection.query(myQuery, (err, result, fields) => {
            if (err) throw err;

            //console.log(result);
            //console.log(JSON.stringify(result));
            console.log('-----------------------------');
            const sorok = JSON.parse(JSON.stringify(result));
            //console.log(sorok);
            for (sor of sorok) {
                console.log(`Név:  ${sor.nev}`);
            }
            console.log(sorok.length);
            console.log(sorok[2].fizetes);
            result = sorok;
        });
    });
    connection.end();
    return result;
}

function torol() {

    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "dolgozok1g",
        user: "root",
        password: ""
    });
    connection.connect((err) => {
        if (err) throw err;
        console.log("MySQL connected");
        console.log("Adat törlés");
        const myDelete = "DELETE FROM iranyitoszam WHERE telepules = 'Nyírbátor';";
        connection.query(myDelete, (err, result) => {
            if (err) throw err;
            console.log(`Törölve: ${result.affectedRows} sor`);
        });
        connection.end();
    });
}

function beszur() {

    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "dolgozok1g",
        user: "root",
        password: ""
    });
    connection.connect((err) => {
        if (err) throw err;
        console.log("MySQL connected");
        console.log("Adatbeszúrás");
        const myInsert = "INSERT INTO iranyitoszam (telepules, irsz) VALUES ('Nyíregyháza',4405)";
        connection.query(myInsert, (err, result) => {
            if (err) throw err;
            console.log(`Beszúrva: ${result.affectedRows} sor`);
        });
        connection.end();
    });
}

function modosit() {

    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "dolgozok1g",
        user: "root",
        password: ""
    });
    connection.connect((err) => {
        if (err) throw err;
        console.log("MySQL connected");
        console.log("Adat módosítás");
        const myUpdate = "UPDATE dolgozo SET fizetes = fizetes * 1.1 WHERE osztaly = 11;";
        connection.query(myUpdate, (err, result) => {
            if (err) throw err;
            console.log(`Módosítva: ${result.affectedRows} sor`);
        });
        connection.end();
    });
}

//console.log(`eredmény: ${lekerdezes()}`);
torol();
modosit();
beszur();