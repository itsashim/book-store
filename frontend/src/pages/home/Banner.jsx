import bannerImg from "../../assets/banner.png";


function Banner() {
    return (
        <div className="col-reverse flex flex-col md:flex-row py-5.5 px-7 items-center justify-center   ">
            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium mt-9 md:mt-0 mb-7">New Releases This Week</h1>
                <p className="mb-5">It&rsquo;s time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week&apos;s new releases offer something for everyone</p>
                <button className="btn-primary">Subscribe</button>
            </div>
            <div className="md:w-1/2 w-full">
                <img src={bannerImg} className="w-full" alt="Books" />
            </div>
        </div>
    )
}

export default Banner
