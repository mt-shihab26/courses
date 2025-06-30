type Props = {
    src: string;
    title: string;
};

const Player = ({ src, title }: Props) => {
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default Player;
