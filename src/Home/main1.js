import Aylal from "../component/travel/aylal";

const Main1 = ({ dataDest }) => {
    return (

        <div className="main1-box">
            <div className="title-1">Эрэлттэй аялал</div>
            <div className="div-box-2">
                <a href="/travel/" >
                    <Aylal dataDest={dataDest} />
                </a>
            </div>
        </div>

    )
}
export default Main1;