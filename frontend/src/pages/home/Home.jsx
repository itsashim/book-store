import Banner from "./Banner";
import '../../../src/App.css';
import TopSellers from "./TopSellers";
import RecommendedBooks from "./RecommendedBooks";
import News from "./News";

function Home() {
    return (
        <>
            <Banner/>
            <TopSellers/>
            <RecommendedBooks/>
            <News/>
        </>
    )
}

export default Home
