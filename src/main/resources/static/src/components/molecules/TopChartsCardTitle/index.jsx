import "./TopChartsCardTitle.css"
import {Link} from "react-router-dom";
import {View} from "../../atoms/Views";
import {ViewText} from "../../atoms/ViewText";

export const TopChartCardTitle = () => {
    return (
        <div className="top-charts-card-title-container">
            <div className="top-charts-card-title-box">
                <Link className="top-charts-card-title-name" to="/">
                    <h3 className="cl upper default">SKINS</h3>
                    <svg className="top-charts-card-title-fire" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.11741 0.704023C9.39603 0.780654 9.62946 0.977503 9.75838 1.24454C10.2444 2.25121 10.6071 2.86219 10.972 3.35756C11.3414 3.85899 11.7321 4.26948 12.3264 4.88505C13.7 6.30758 14.387 8.17411 14.387 10.0372C14.387 11.9003 13.7 13.7668 12.3264 15.1894C9.57904 18.0348 5.12461 18.0348 2.3772 15.1894C1.0037 13.7668 0.316653 11.9003 0.31665 10.0372C0.316647 8.17411 1.0037 6.30758 2.37721 4.88505C2.66464 4.58736 3.09692 4.4983 3.47247 4.65941C3.84803 4.82052 4.09289 5.20007 4.09289 5.62107C4.09289 6.78668 4.16317 7.67483 4.49234 8.38324C4.67334 8.77277 4.9557 9.15362 5.44232 9.49346C5.55854 8.38931 5.77144 7.04407 6.05911 5.7672C6.2856 4.76189 6.5673 3.75823 6.90258 2.92128C7.07028 2.50266 7.25992 2.10406 7.4753 1.7599C7.68494 1.42491 7.95429 1.08403 8.30197 0.84397C8.54183 0.678359 8.8388 0.627392 9.11741 0.704023ZM9.48381 14.327C8.30635 15.5465 6.39731 15.5465 5.21985 14.327C4.63112 13.7173 4.33675 12.9181 4.33675 12.119C4.33675 12.119 5.21985 12.6394 6.84936 12.6394C6.84936 11.5985 7.35187 8.47584 8.10564 7.95539C8.60815 8.99628 8.89508 9.30116 9.48381 9.9109C10.0725 10.5206 10.3669 11.3198 10.3669 12.119C10.3669 12.9181 10.0725 13.7173 9.48381 14.327Z"
                              fill="#EF2F62"/>
                    </svg>
                </Link>
                <p className="cl-04 cv-title-01">XXXTentacion</p>
                <span className="cl-01 cl upper cl-title-02">lyric</span>
            </div>
            <div className="top-charts-card-title-stats">
               <View className="top-charts-card-title-name j i e"/>
                <ViewText/>
            </div>
        </div>
    )
}