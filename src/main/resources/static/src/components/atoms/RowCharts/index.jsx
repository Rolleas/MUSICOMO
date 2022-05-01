import "./RowCharts.css"
import img from "../../../assets/img.png"
import {View} from "../Views";
import {ViewText} from "../ViewText";

export const RowCharts = () => {
    return (
        <div className="row-charts-container">
            <span className="cl default сv-link-02">1</span>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75676 0.0335053C9.03398 0.107126 9.26624 0.296242 9.39452 0.552791C9.87808 1.51991 10.239 2.10688 10.6021 2.5828C10.9696 3.06453 11.3584 3.45889 11.9497 4.05028C13.3164 5.41692 14 7.21013 14 9.00004C14 10.7899 13.3164 12.5831 11.9497 13.9498C9.21608 16.6834 4.78392 16.6834 2.05025 13.9498C0.683615 12.5831 2.35307e-06 10.7899 0 9.00004C-2.95743e-06 7.21013 0.683611 5.41692 2.05025 4.05028C2.33625 3.76428 2.76637 3.67872 3.14004 3.83351C3.51372 3.98829 3.75736 4.35292 3.75736 4.75739C3.75736 5.8772 3.82729 6.73046 4.15481 7.41104C4.33491 7.78527 4.61585 8.15115 5.10004 8.47764C5.21568 7.41687 5.42752 6.12448 5.71375 4.89778C5.93911 3.93195 6.21939 2.96773 6.553 2.16366C6.71986 1.76148 6.90855 1.37854 7.12285 1.04791C7.33145 0.726076 7.59945 0.39858 7.94539 0.167955C8.18405 0.0088495 8.47954 -0.040115 8.75676 0.0335053ZM9.12132 13.1213C7.94975 14.2929 6.05025 14.2929 4.87868 13.1213C4.29289 12.5355 4 11.7678 4 11C4 11 4.87868 11.5 6.50005 11.5C6.50005 10.5 7.00005 7.5 7.75005 7C8.25005 8 8.53553 8.2929 9.12132 8.87869C9.70711 9.46447 10 10.2322 10 11C10 11.7678 9.70711 12.5355 9.12132 13.1213Z" fill="#EF2F62"/>
            </svg>
            <img className="row-charts-img" src={img} />
            <div className="row-charts-title">
                <span className="сv-link-02 cl default upper">skins</span>
                <span className="cv-title-01 cl-04">XXXTentacion</span>
            </div>
            <View/>
            <ViewText/>
        </div>
    )
}