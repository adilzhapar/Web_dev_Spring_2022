export interface Album{
    userID: number, 
    id: number,
    title: string
}

export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}