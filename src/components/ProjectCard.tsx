interface Props {
    title: string;
    imageSrc: string;
}

export default function ProjectCard({title, imageSrc}: Props) {
    return(
        <>
            <p>{title}</p>
            <img src={imageSrc}></img>
        </>
    )
}