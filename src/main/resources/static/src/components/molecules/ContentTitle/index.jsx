import "./ContentTitle.css"
import {SeeAll} from "../../atoms/SeeAll";

export const ContentTitle = ({arrow}) => {
    let seeall = '';
    if(arrow) {
        seeall = <SeeAll/>
    }
    return (
        <div className="content-title-container">
            <div className="content-title-heading">
                <h2 className="cl default cl-heading">RELEASES</h2>
                <span className="cl-05 cl-title-02 cl upper">Enjoy some new awesome music</span>
            </div>
            {seeall}
        </div>
    )
}