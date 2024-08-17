import Header from "./Header.js";
import InfoTitle from "./InfoTitle.js";
import "./infoPage.css"

const InfoPage = () => {
    return(
        <div>
            <Header />
            <InfoTitle />

            <div className="text">
                <p>Typerror is a simple coding-themed type racer. </p>

                <p>Just type what you see on screen... except for when it's not correct.</p>

                <p>Sometimes what you see might be wrong. It's up to you to spot any errors in the line of code and fix them.</p>

                <p>Compare your times to other people on the leaderboards. Customise the website to your liking, in both appearance and functionality. Keep track of your stats and history by making a profile.</p>
            </div>

        </div>
    );
};

export default InfoPage;