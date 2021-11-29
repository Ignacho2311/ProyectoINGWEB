"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
//mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'TriviaSano'
});
connection.connect(function (err) {
    if (err) {
        console.error('error conectando a la BD: ' + err.stack);
        return;
    }
    console.log('coneccion establecida ' + connection.threadId);
});
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.use(cors());
//CRUD: CREATE (post), READ (get), UPDATE (put, path), DELETE (delete)
/*
//CUANDO ENTRA A "USUARIOS" RETORNA UNA RESPUESTA. EJ: "error 404"
app.get('/Usuarios', (req:any, res:any) => {
    connection.query("select * from usuarios", function(error:any, results:any, field:any){
        res.send(JSON.stringify(results));
    });

    /*let Usuarios ={
        "id": 1,
        "nombre": "pepito",
        "apellidos": "perez"
    }

    res.send(JSON.stringify(Usuarios));
})
*/
app.get('/usuarios', function (req, res) {
    var qr = "select * from usuarios ";
    connection.query(qr, function (err, result) {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });
});
/*app.get('/usuarios/:correo',(req:any,res:any)=>{
   
    let gCorreo= req.params.correo;

    let qr = `select * from usuarios where id = ${gCorreo}`;

    connection.query(qr,(err:any,result:any)=>{
        if(err){
            console.log(err,'errs');
        }
        
            res.send({
            mensaje: ' solo un dato',
            data:result
        });
    })

});
*/
app.get('/usuarios/correo/:correo', function (req, res) {
    var correo = req.params.correo;
    connection.query("select correo from usuarios where correo=?", [correo], function (error, results, field) {
        res.send(JSON.stringify(results));
        /*
        console.log(`results: ${JSON.stringify(results)}`);
        console.log(`correoooo: ${JSON.stringify(correo)}`);*/
        var aux = "[{\"correo\":\"" + correo + "\"}]";
        console.log("aux: " + aux);
        if (aux == JSON.stringify(results)) {
            console.log("SI EXISTE EL CORREO: " + correo);
            return 1;
        }
        else {
            console.log("NO EXISTE EL CORREO AWEONAO");
            return 0;
        }
    });
});
app.get('/usuarios/login', function (req, res) {
    var correo = req.params.correo;
    var contrasenna = req.params.contrasenna;
    connection.query("select contrasenna from usuarios where correo=?", [correo], function (error, results, field) {
        res.send(JSON.stringify(results));
        console.log("results: " + JSON.stringify(results));
        console.log("contrasenna: " + JSON.stringify(contrasenna));
        var aux = "[{\"contrasenna\":\"" + contrasenna + "\"}]";
        console.log("aux: " + aux);
        /*
        if (aux == JSON.stringify(results) ) {
            console.log(`LA CONTRASEÑA ES CORRECTA: ${contrasenna}`);
            return 1;
        }
        else {
            console.log(`CONTRASEÑA INCORRECTA`);
            return 0;
        }
        */
    });
});
app.post('/usuarios/', function (req, res) {
    var correo = req.body.correo;
    var contrasenna = req.body.contrasenna;
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    var fechaNacimiento = req.body.fechaNacimiento;
    var sexo = req.body.sexo;
    var estatura = req.body.estatura;
    var peso = req.body.peso;
    var enfermedadCardiaca = req.body.enfermedadCardiaca;
    var enfermedadRespiratoria = req.body.enfermedadRespiratoria;
    var cirugia = req.body.cirugia;
    var alergia = req.body.alergia;
    var enfermedadDegenerativa = req.body.enfermedadDegenerativa;
    var futbol = req.body.futbol;
    var baloncesto = req.body.baloncesto;
    var voleyball = req.body.voleyball;
    var salsa = req.body.salsa;
    var zumba = req.body.zumba;
    var qr = "insert into usuarios(correo, contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba) values('" + correo + "','" + contrasenna + "','" + nombre + "','" + edad + "','" + fechaNacimiento + "','" + sexo + "','" + estatura + "','" + peso + "','" + enfermedadCardiaca + "','" + enfermedadRespiratoria + "','" + cirugia + "','" + alergia + "','" + enfermedadDegenerativa + "','" + futbol + "','" + baloncesto + "','" + voleyball + "','" + salsa + "','" + zumba + "')";
    connection.query(qr, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result, 'resultado');
        res.send({
            message: 'data inserted'
        });
    });
});
/*app.post('/usuarios/CrearUsuario', jsonParser, async(req:any, res:any) => {
    const { correo, contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba } = req.body;
        
    const nuevoUsuario = {
        correo,
        contrasenna,
        nombre,
        edad,
        fechaNacimiento,
        sexo,
        estatura,
        peso,
        enfermedadCardiaca,
        enfermedadRespiratoria,
        cirugia,
        alergia,
        enfermedadDegenerativa,
        futbol,
        baloncesto,
        voleyball,
        salsa,
        zumba
    }

    await connection.query("insert into usuarios set ?",[nuevoUsuario]);
    res.send('received');

})
*/
app.delete('/usuarios/EliminarUsuario/:correo', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.params.correo;
                console.log("correo: ${correo}", correo);
                return [4 /*yield*/, connection.query("delete from usuarios where correo = ?", [correo])];
            case 1:
                _a.sent();
                //res.redirect('/usuarios')
                res.send('ejalee');
                return [2 /*return*/];
        }
    });
}); });
/*
app.update('/usuarios/ActualizarUsuario', jsonParser, async(req:any, res:any) => {
    const { correo, contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba } = req.body;
        
    const actualizarUsuario = {
        correo,
        contrasenna,
        nombre,
        edad,
        fechaNacimiento,
        sexo,
        estatura,
        peso,
        enfermedadCardiaca,
        enfermedadRespiratoria,
        cirugia,
        alergia,
        enfermedadDegenerativa,
        futbol,
        baloncesto,
        voleyball,
        salsa,
        zumba
    }

    await connection.query("update usuarios set ?",[actualizarUsuario]);
    res.send('received');

})
*/
app.listen(configuracion, function () {
    console.log("Conectandome al servidor http://localhost:" + configuracion.port);
});
/*
app.put('/Actualizar/:id',jsonParser, (req:any, res:any) => {
    let id = req.params.id;
    let usuario = req.body.usuario;
    let clave = req.body.clave;
    let correo = req.body.correo;

        
    console.log(`Usuario ${usuario} con la clave ${clave}, correo ${correo} y id ${id} no han sido modificados`);
        
    res.send("datos modificados");
    
})

*/
