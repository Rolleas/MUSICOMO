import "./ContentCharts.css"
import {ContentTitle} from "../../molecules/ContentTitle";
import {TopChartCard} from "../../molecules/TopChartCard";

export const ContentCharts = () => {
    return (
        <div className="row">
            <ContentTitle/>
            <div className="content-charts-container">
                <div className="content-charts-box">
                    <TopChartCard/>
                </div>
            </div>
        </div>
    )
}