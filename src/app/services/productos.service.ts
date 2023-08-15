import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

    private productos:Producto[] =
    [
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "Lila",
            img: "../../../assets/image/img1.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "Rojo",
            img: "../../../assets/image/img2.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo cuello v para dama",
            color: "Azul Rey.",
            img: "../../../assets/image/img3.jpg",
            precio: "$ 55.000"
        },
        {
            descripcion: "Uniforme tipo jogger para Hombre",
            color: "Verde Manzana",
            img: "../../../assets/image/img4.jpg",
            precio: "$ 55.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img5.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img6.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img7.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img8.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img9.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img1.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img10.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img1.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img2.jpg",
            precio: "$ 65.000"
        },
        {
            descripcion: "Uniforme tipo jogger para dama",
            color: "lila",
            img: "../../../assets/image/img3.jpg",
            precio: "$ 65.000"
        }
    ];

    constructor() {
        console.log("Servicio listo para usarse");
    }

    getProductos():Producto[]{
        return this.productos;
    }

    getDetalleProducto( index: number){
        return this.productos[index];
    }
}

export interface Producto{
    descripcion: string;
    color: string;
    img: string;
    precio: string;
}