# Ecommerce

## C.I.E.C 

### - Tienda en línea para la venta de productos y servicios de estética corporal

![](https://res.cloudinary.com/daiikhnag/image/upload/v1707272308/images_gesb63.jpg)

### Instalar librería de enrutamiento
```
npm i react-router-dom
```

### Ejemplo de código de JS
```javascript
const AgregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Agregar Documentos/Productos</button>
    </div>
  );
}; 
```

### Variables de entorno necesarias para el funcionamiento de la base de datos

- VITE_API_KEY=
- VITE_AUTH_DOMAIN=
- VITE_PROJECT=
- VITE_STORAGE=
- VITE_MESSAGING=
- VITE_APPID=1:

