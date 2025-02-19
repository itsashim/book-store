import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/getBaseUrl'


const baseQuery = fetchBaseQuery({baseUrl:`${getBaseUrl()}`})

const booksApi = createApi({
    reducerPath: "booksAPi",
    baseQuery,
    endpoints: (builder)=> ({
        getAllBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"]
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: (result ,error,id) => [{type: "Books", id}]
        })
    })

})

export const {useGetAllBooksQuery,useGetBookQuery} = booksApi;
export default booksApi;