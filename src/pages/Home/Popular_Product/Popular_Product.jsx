import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Popular_Product = () => {

    const [products ,setProducts] = useState([])

    useEffect(()=>{
        fetch('our_Product.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div>
           <div className="text-center mt-32">
                <h4 className="text-lg text-orange-600 font-bold">Popular Products</h4>
                <h4 className="text-4xl font-bold ">Browse Our Products</h4>
                <p className="mt-6 mb-8 w-1/2 mx-auto space-x-3 space-y-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product =><ProductCard
                        
                        key={product._id}
                        product={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Popular_Product;