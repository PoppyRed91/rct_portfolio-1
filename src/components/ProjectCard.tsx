interface Props {
    title: string;
    imageSrc: string;
    releaseYear: string;
}

export default function ProjectCard({title, imageSrc, releaseYear}: Props) {
    return(
        <>
            <p>{title}</p>
            <img src={imageSrc}></img>
            <p>{releaseYear}</p>
        </>
    )
}