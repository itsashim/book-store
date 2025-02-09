import { useEffect, useState,} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BookCard from "../books/BookCard";


function RecommendedBooks() {
    const [books,setBooks] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=>{

            try{
                const res = await fetch("blog.json");
                const data = await res.json();
                const recommend =  data.slice(8);
                    setBooks(recommend);
                
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[]);


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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {books.map((book,index)=> 
            
                <SwiperSlide key={index}>
                    <BookCard book={book}/>
                </SwiperSlide>

            )}
            </Swiper>
        </div>
    )
}

export default RecommendedBooks
