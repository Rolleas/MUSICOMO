import "./ContentSelection.css"
import {MusicCard} from "../../atoms/MusicCard";
import {ContentTitle} from "../ContentTitle";

export const ContentSelection = () => {
    return (
        <selection className="row row--grid">
            <ContentTitle arrow={true}/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>

        </selection>
    )
}