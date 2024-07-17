/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){
    
    let determinantes = ["la", "una", "mi", "ninguna", "tu"];
    let adjetivos = ["gran", "horrorosa", "ven", "patética", "renuevatu"];
    let nombres = ["libélula", "mantis", "ytoca", "car", "portu"];
    let extensiones = [".com", ".es", ".net", ".gal", ".me"];

    function generarDominios(determinantes, adjetivos, nombres, extensiones) {
        let dominios = [];
    
        for (let det of determinantes) {
            for (let adj of adjetivos) {
                for (let nom of nombres) {
                    for (let ext of extensiones) {
                        let dominio = `${det}${adj}${nom}${ext}`;
                        console.log(dominio);
                        dominios.push(dominio);
                    }
                }
            }
        }
    
        return dominios;
    }
    
    let dominiosGenerados = generarDominios(determinantes, adjetivos, nombres, extensiones);
    console.log(dominiosGenerados);}
