import { Injectable } from '@angular/core';

@Injectable()

export class ColoresService {
    private colores:Color[] =
    [
        {
            nameColor: "Verde Menta",
            codigoColor: "#cffff1"
        },
        {
            nameColor: "Verde Jade",
            codigoColor: "#00866e",
        },
        {
            nameColor: "Verde Jade Claro",
            codigoColor: "#3bccb2"
        },
        {
            nameColor: "Verde Botella",
            codigoColor: "#144b32"
        },
        {
            nameColor: "Verde Militar",
            codigoColor: "#4b5320"
        },
        {
            nameColor: "Café",
            codigoColor: "#3d2716"
        },
        {
            nameColor: "Beige",
            codigoColor: "#f5f5dc"
        },
        {
            nameColor: "Gris Ratón",
            codigoColor: "#343b4d"
        },
        {
            nameColor: "Gris Medio",
            codigoColor: "#908b85"
        },
        {
            nameColor: "Gris Perla",
            codigoColor: "#d0ccc5"
        },
        {
            nameColor: "Azul Petroleo",
            codigoColor: "#084b6b"
        },
        {
            nameColor: "Azul Rey",
            codigoColor: "#08319d"
        },
        {
            nameColor: "Azul Aguamarina",
            codigoColor: "#02b8dd"
        },
        {
            nameColor: "Azul Claro",
            codigoColor: "#9fd4f5"
        },
        {
            nameColor: "Azul Medio",
            codigoColor: "#5181bb"
        },
        {
            nameColor: "Azul Ortencia",
            codigoColor: "#A3A3C5"
        },
        {
            nameColor: "Morado",
            codigoColor: "#67008f"
        },
        {
            nameColor: "Morado Liso",
            codigoColor: "#893d8a"
        },
        {
            nameColor: "Lila",
            codigoColor: "#D9A6F7"
        },
        {
            nameColor: "Vino Tinto",
            codigoColor: "#5b2028"
        },
        {
            nameColor: "Rojo Cereza",
            codigoColor: "#a60b22"
        },
        {
            nameColor: "Rojo",
            codigoColor: "#c51c10"
        },
        {
            nameColor: "Fucsia",
            codigoColor: "#ff0080"
        },
        {
            nameColor: "Rosado",
            codigoColor: "#FFC9CC"
        },
        {
            nameColor: "Naranja",
            codigoColor: "#ee6d36"
        },
        {
            nameColor: "Verde Petroleo",
            codigoColor: "#003840"
        },
        {
            nameColor: "Negro",
            codigoColor: "#000000"
        },
        {
            nameColor: "Blanco",
            codigoColor: "#ffffff"
        },
        {
            nameColor: "Azul Oscuro",
            codigoColor: "#252850"
        },
    ];
    getColores():Color[]{
        return this.colores;
    }
}

export interface Color{
    nameColor: string;
    codigoColor: string;
}
