import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React, {ReactNode, useEffect, useState} from "react";
import axios from "axios";
import '../../styles/Slider.css'
import FsLightbox from "fslightbox-react";

interface SlideProps {
    url: string;
}

export function Slideshow(props: SlideProps) {
    const [images, setImages] = useState<Array<string | JSX.Element>>([]);
    const [toggler, setToggler] = useState(false);

    useEffect(() => {
        axios.get(props.url).then((result) => {
            const photoArray: string[] = [];
            for (let obj of result.data) {
                photoArray.push(obj);
            }
            setImages(photoArray);
            console.log(photoArray);
        });
    }, []);
    return (
        <>
            <button onClick={() => setToggler(!toggler)}>
                Toggle Lightbox
            </button>
            <FsLightbox
                toggler={toggler}
                sources={images}
            />
        </>
    );
}