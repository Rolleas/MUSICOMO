import "./TopChartCard.css"
import chartIMG from "../../../assets/img.png"
import {TopChartCardTitle} from "../../atoms/TopChartsCardTitle";

export const TopChartCard = () => {
    return (
        <div className="top-chart-card-container">
            <div className="top-chart-card-img">
                <img src={chartIMG} />
            </div>
            <TopChartCardTitle/>
        </div>
    )
}