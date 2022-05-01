import "./ContentCharts.css"
import {ContentTitle} from "../../molecules/ContentTitle";
import {TopChartCard} from "../../molecules/TopChartCard";
import {RowCharts} from "../../atoms/RowCharts";

export const ContentCharts = () => {
    return (
        <div className="row">
            <ContentTitle/>
            <div className="content-charts-container">
                <div className="content-charts-box">
                    <TopChartCard/>
                    <div className="top-charts-other">
                        <RowCharts/>
                        <RowCharts/>
                        <RowCharts/>
                        <RowCharts/>
                    </div>
                </div>
            </div>
        </div>
    )
}