import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import { getUrl } from "../../utils/getImageUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

function BookCard({book}) {
    const dispatch = useDispatch()

    function handleAddToCart(product){
        dispatch(addToCart(product));
    }
    
    return (
        <div>
            <div className=" rounded-lg transition-shadow duration-300">
                <div
                    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
                >
                    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <a href="/">
                        <img
                        src={getUrl(book.coverImage)}
                        alt=""
                        className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </a>
                    </div>

                    <div>
                    <Link to={`/book/${book._id}`}
                        ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {book.title}
                        </h3></Link>
                    <p className="text-gray-600 mb-5">{ book.description.length > 80 ? `${book.description.slice(0,80)}...` : book.description }</p>
                    <p className="font-medium mb-5">
                        {book.newPrice} <span className="line-through font-normal ml-2">{book.oldPrice}</span>
                    </p>
                    <button onClick={()=> handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button>
                    </div>
                </div>
                </div>
        </div>
    )
}

    BookCard.propTypes = {
        book: PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            oldPrice: PropTypes.number.isRequired,
            newPrice: PropTypes.number.isRequired,
            originalPrice: PropTypes.number,
            coverImage: PropTypes.string.isRequired,
        }).isRequired,
    }

export default BookCard

