import { Link } from "react-router-dom";

export const ProductCard = ({data}) => {
    const {id, title, description, price, discountPercentage, thumbnail} = data;
  return (
    <div className="flex flex-col relative rounded-md p-4 bg-neutral-200 max-w-[350px] w-full shadow-md h-full">
    <div className="ribbon text-bg bg-primary">{discountPercentage}% off</div>
    <div className="max-w-[350px] h-[200px] overflow-hidden">
        <img src={thumbnail} alt={title} className="object-cover rounded-md w-full h-full"/>
    </div>

    <div className="flex-grow mt-5 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p>{description.length > 150 ? `${description.slice(0, 150)}...` : description}</p>
        <h4 className="text-2xl font-bold mb-5">{price}<span className="text-[16px]">$</span></h4>
        <Link to={`/product?id=${id}`} className="mt-auto text-center bg-primary w-full rounded-md py-2 text-bg">View Details</Link>
    </div>
  </div>
  )
}
