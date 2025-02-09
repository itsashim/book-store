import { news } from "../../../public/news"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function News() {
    console.log(news);
    return (
        <div className="px-8">
            <h1 className="text-5xl font-bold">News</h1>
            <Swiper
                modules={[Navigation,Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                    {news.map((newa,index) =>
                    
                        <SwiperSlide key={index}>
                            <div className="flex">
                                <div>
                                    <h4>{newa.title}</h4>
                                    <p>{newa.description}</p>
                                </div>
                                <div>
                                    <img src={`/src/assets/news/${newa.image}`} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                      
                    )}
            </Swiper>
            
        </div>
    )
}

export default News
