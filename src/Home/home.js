import Banner from "./banner";
import Main from "./main";
import Flights from "./flights";
import Main1 from "./main1";
import Main4 from "./main4";
import Main2 from "./main2";
import Tabs from "./tabs";


function Home({ data,dataDest }) {
    return (
        <div>
            <Tabs />
            <Banner />
            <Main />
            <Main2 />
            <Flights data={data} />
            <Main1 dataDest={dataDest}/>
            <Main4 />
        </div>

    )
}
export default Home;