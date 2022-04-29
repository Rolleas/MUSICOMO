import {Sidebar} from "../../molecules/Sidebar";
import {Search} from "../../atoms/Search";
import {ContentSelection} from "../../molecules/ContentSelection";
import "./Home.css"
import {ContentCharts} from "../../organisms/ContentCharts";

export const Home = () => {
    return (
        <div>
            <Sidebar/>
            <div id="content">
                <div className="nav-container">
                    <Search/>
                </div>
                <ContentCharts/>
                <ContentSelection />
            </div>
        </div>
    )
}