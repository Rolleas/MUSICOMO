import "./ContentSelection.css"
import {MusicCard} from "../../atoms/MusicCard";
import {ContentTitle} from "../../atoms/ContentTitle";

export const ContentSelection = () => {
    return (
        <selection className="row row--grid">
            <ContentTitle/>
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