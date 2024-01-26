import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner';
import axios from 'axios';
import { Loader } from '../components/Loader';

export const Product = () => {
  const [params] = useSearchParams();
  const id = params.get("id")

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try{
      setLoading(true)
      const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(data)
    }catch(error){
      console.log(error);
      toast.error("Something went wrong!");
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
  <>
  {loading ? <Loader/> : (
  <div>
    <h2 className="sm:text-5xl text-3xl font-bold text-center">Product Deatils</h2>

    <div className="flex flex-wrap items-center justify-start gap-4 md:my-5">
    {product && (
      <>
      <div className='text-sm text-primary md:ml-20 max-sm:mt-5'>Home &gt; Products &gt; {product.category}</div>
    <div className='row md:px-20 sm:px-5 px-2 h-full w-full'>
      <div className='col-2 flex items-center justify-center'>
        <img src={product.thumbnail} alt="job-search" 
        className='w-full h-full rounded-md'
        />
      </div>

      <div className='col-1 h-full'>
        <h2 className='text-4xl font-bold'>{product.title}</h2>
        <p>{product.description}</p>
        <p className='font-semibold'>Rating: <span className='font-medium'>{product.rating}</span></p>
        <p className='font-semibold'>Stock: <span className='font-medium'>{product.stock}</span></p>
        <p className='font-semibold'>Brand: <span className='font-medium'>{product.brand}</span></p>
        <h4 className='text-3xl font-bold my-4'>{product.price}<span className='text-[18px]'>$</span></h4>

        <button className='text-lg py-2 px-5 bg-primary text-bg rounded-md'>Buy Now</button>
      </div>
    </div>
    </>
    )}
    </div>
  </div>
  )}
  </>
  )
}
