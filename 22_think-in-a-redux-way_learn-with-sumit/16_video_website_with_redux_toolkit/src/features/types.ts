export type Video = {
    id: number;
    title: string;
    description: string;
    author: string;
    avatar: string;
    date: string;
    duration: string;
    views: string;
    link: string;
    thumbnail: string;
    tags: string[];
    likes: number;
    unlikes: number;
};

export type Tag = {
    id: number;
    title: string;
};

export type VideosState = {
    videos: Video[];
    isLoading: boolean;
    isError: boolean;
    error: string;
};

export type RelatedVideosState = {
    relatedVideos: Video[];
    isLoading: boolean;
    isError: boolean;
    error: string;
};

export type TagsState = {
    tags: Tag[];
    isLoading: boolean;
    isError: boolean;
    error: string;
};

export type VideoState = {
    video: Video | null;
    isLoading: boolean;
    isError: boolean;
    error: string;
};

export type FilterState = {
    searchString: string;
    selectedTags: string[];
};
