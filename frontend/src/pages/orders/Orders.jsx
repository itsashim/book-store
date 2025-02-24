import { useAuth } from "../../context/AuthContext";
import { useGetAllOrdersQuery } from "../../redux/features/orders/ordersApi.js"

function Orders() {
    const {currentUser} = useAuth()
    const {data: orders = [],isLoading} = useGetAllOrdersQuery(currentUser?.email);
    console.log(orders.data)
    const ordersData = orders.data;
    
    if(isLoading) return <h1>Loading...</h1>

    return (
            <div>
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
                    
                    <p>No orders found.</p>
                    
                {ordersData && ordersData.map((order)=>(
                    <>
                     <div className="bg-white rounded shadow-lg p-4">
                             <div key={order._id} className="border-b mb-4 pb-4"></div>
                            <h2 className="font-bold">Order ID: {order._id}</h2>
                            <p className="text-gray-600">Name: {order.name}</p>
                            <p className="text-gray-600">Email: {order.email}</p>
                            <p className="text-gray-600">Phone: {order.phone}</p>
                            <p className="text-gray-600">Total Price: {order.totalPrice}</p>
                            <h3 className="font-semibold mt-2">Address:</h3>
                            <p> {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                            <h3 className="font-semibold mt-2">Products Id:</h3>
                            <ul>
                                <li key={order.productIds}>{order.productIds}</li> 
                            </ul>
                    </div>
                    </>
                ))}
                </div>

            </div>
    )
}

export default Orders
