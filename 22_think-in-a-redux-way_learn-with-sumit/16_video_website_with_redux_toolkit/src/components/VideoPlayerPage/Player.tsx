type PlayerProps = {
    link: string;
    title: string;
};

const Player = ({ link, title }: PlayerProps) => {
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={link}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default Player;
