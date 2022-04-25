import {Sidebar} from "../../molecules/Sidebar";
import {Search} from "../../atoms/Search";

export const Home = () => {
    return (
        <div>
            <Sidebar/>
            <div id="content">
                <Search />
            </div>
        </div>
    )
}