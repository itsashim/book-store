import { useEffect, useState,} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BookCard from "../books/BookCard";


function TopSellers() {
    const [curGenre,setCurGenre] = useState("");
    const genres = ['Choose a genre','Business','Fiction','Horror','Adventure','Marketing'];
    const [books,setBooks] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=>{

            try{
                const res = await fetch("blog.json");
                const data = await res.json();
                const filtered = data.filter((book)=> book.category.toLowerCase() == curGenre.toLowerCase())
                if(curGenre === "" || curGenre == "Choose a genre"){
                    setBooks(data);
                }else{
                    setBooks(filtered);
                }
                
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[curGenre]);


    return (
        <div className="px-8">
            <h2 className="text-5xl font-bold">Top Sellers</h2>
            <div>
                <select name="" id="" onChange={(e)=> setCurGenre(e.target.value)}>
                    {genres.map((genre,index)=> 
                    <option value={genre} key={index}>{genre}</option>
                    )}
                </select>
            </div>
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

export default TopSellers
