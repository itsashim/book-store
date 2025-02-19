import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../redux/features/books/booksApi"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

function BookDetails() {
    const id = useParams().id;
    const dispatch = useDispatch();
    const {data:bookDes = [],isLoading,isError} = useGetBookQuery(id);
    const book = bookDes.data;
    console.log(bookDes.data,"Book Details",book?.coverImage);
    if(isError) return <p className="text-red-600">Error while loading book data</p>

    function handleAddtoCart(book){
        dispatch(addToCart(book))
    }
    return (
        <section>
            {
                isLoading ? <p>...</p> :
                <div>
                    <h3 className="font-bold">{book?.title}</h3>
                    <img src={`/src/assets/books/${book?.coverImage}`} alt="" />
                    <p><span className="font-bold">Author</span>: Admin</p>
                    <p><span className="font-bold">Price</span>: {book?.newPrice}</p>
                    <p><span className="font-bold">Category</span>: {book?.category}</p>
                    <p><span className="font-bold">Description</span>{book?.description}</p>
                    <button onClick={()=> handleAddtoCart(book)} className="btn-primary">Add to Cart</button>
                </div>
            }
        </section>

    )
}

export default BookDetails
