const products = [
    {
        "id": 0,
        "name":"VINO NOVECENTO RAICES MALBEC",
        "img":"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062714_f.jpg",
        "precio": 315,
        "description": "VINO ARGENTINO, MARCA NOVECENTO RAICES MALBEC BOTELLA X 750 CC.",
        "stock": 25,
        "category": "bebidas"
    },
    {
        "id": 1,
        "name":"CERVEZA PATAGONIA HOPPY LAGER",
        "img":"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3100693_f.jpg",
        "precio": 239,
        "description": "CERVEZA PATAGONIA HOPPY LAGER BOTELLA NO RETORNABLE X 730 CC.",
        "stock": 15,
        "category": "bebidas"
    },
    {
        "id": 2,
        "name":"HAMBURGUESAS DE CARNE SWIFT",
        "img":"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3361329_f.jpg",
        "precio":1399,
        "description": "HAMBURGUESAS DE CARNE SWIFT CLASICA X 20 UN. X 1600 GR.",
        "stock": 150,
        "category": "alimentos"
    }
    
]

export const getProducts = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        setTimeout(() => resolve(products), 2000);
    } else {
        reject( 'Error' );
    }
})