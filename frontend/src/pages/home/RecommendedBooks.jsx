// import { useEffect, useState,} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BookCard from "../books/BookCard";
import { useGetAllBooksQuery } from "../../redux/features/books/booksApi";


function RecommendedBooks() {

    const {data:books = []} = useGetAllBooksQuery();
    const bookData = books.data;
    console.log(bookData, "Hello");
    return (
        <div className="px-8">
            <h2 className="text-5xl font-bold">Recommended for you</h2>
            <Swiper
            modules={[Navigation,Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3}
            thumbs
            >
            {bookData && bookData.map((book,index)=>             
                <SwiperSlide key={index}>
                    <BookCard book={book}/>
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default RecommendedBooks
