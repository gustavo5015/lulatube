import React from "react";
import styled from "styled-components";
import config from "../config.json";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const estilosDaHomePage = { 
        // backgroundColor: "red" 
    }
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Header></Header>
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}></TimeLine>
            </div>
        </>
        
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div `
    height: 230px;
    background-image: url(${config.bg});
    background-size: cover;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner></StyledBanner>
            <section className="user-info">
                <img src={config.github}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
            <hr></hr>
        </StyledHeader>
    )
}


function TimeLine({searchValue, ...props}) {

    const playlistNames = Object.keys(props.playlists);
    

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalize = video.title.toLowerCase();
                                const searchValueNormalize = searchValue.toLowerCase();
                                return titleNormalize.includes(searchValueNormalize)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}