import { useEffect, useState } from "react"
import axios from "axios";
import { Loader } from "../components/Loader";
import { toast } from "sonner";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try{
      setLoading(true)
      const {data} = await axios.get("https://dummyjson.com/products")
      setProducts(data.products)
    }catch(error){
      console.log(error);
      toast.error("Something went wrong!");
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
  <>
  {loading ? <Loader/> : (
  <div>
    <h2 className="sm:text-5xl text-3xl font-bold text-center">Browse All Products</h2>

    <div className="flex flex-wrap items-center justify-center gap-4 my-5">
      {products && products.length > 0 && 
      products.map((data, idx) => (
        <ProductCard key={idx} data={data}/>
      ))
      }
    </div>
  </div>
  )}
  </>
  )
}
