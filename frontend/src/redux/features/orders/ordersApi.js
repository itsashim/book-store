import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/getBaseUrl'


const baseQuery = fetchBaseQuery({baseUrl: `${getBaseUrl()}api/orders`,credentials: 'include'})

const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery,
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: (email)=> `/email/${email}`,
            providesTags: ["Orders"]
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/create-order",
                method: "POST",
                body: newOrder,
                credentials: 'include'            
            }),

        })
    })
})


export const  {useGetAllOrdersQuery,useCreateOrderMutation} = ordersApi;
export default ordersApi;