import React, { useEffect, useRef } from "react";

export default function Autoplay(props) {
    const sourceVideo = props.sourceVideo

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div className="Autoplay">
            <video
                style={{
                    display: "block",
                    height: "500px",
                    maxWidth: "100%",
                    margin: "0 auto"
                }}
                playsInline
                loop
                muted
                controls
                alt={sourceVideo}
                src={sourceVideo}
                ref={videoEl}
            />
        </div>
    );
}
