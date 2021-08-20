import React from "react";

function Youtube({strYoutube}) {
    const url = strYoutube;

    function getEmbeedUrl(ytURL) {
        let index = ytURL.indexOf("watch?v=");
        let embeedBase = "https://www.youtube.com/embed/"
        return embeedBase + ytURL.substring(index + "watch?v=".length, ytURL.length);
    }
    
    function getIframeWidth() {
        let max = 800;
        let calculatedValue = window.innerWidth / 2
        return calculatedValue > max ? max : calculatedValue;
    }
    
    function getIframeHeight() {
        let width = getIframeWidth()
        return width / 560 * 315;
    }

    window.addEventListener('resize', () => {
        const iframe = document.querySelector("#iframe");
        let width = getIframeWidth()
        let height = getIframeHeight()
        iframe.width = `${width}px`;
        iframe.height = `${height}px`;
    })

    return(
        <React.Fragment>
            <iframe allowFullScreen={true} id="iframe" width={getIframeWidth()} height={getIframeHeight()} src={getEmbeedUrl(url)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </React.Fragment>
    )
}

export default Youtube;