function Product(props){ 
    //props:{productOb : {}}
    const { productObj } =props
    //state
    //return a react element
    return(
        <div className="shadow-2xl rounded-4xl">
            <h2 className="text-2xl">{productObj.title}</h2>
            <img src={productObj.image} alt="" />
            <h2 className="font-bold">{productObj.description}</h2>
            <h2 className="text-green-500">{productObj.price}</h2>
        </div>
    )
}
export default Product
