export interface EbookListDto {
    id:number;
    ebookName: string;
    link: string;
    ebookDateStart: Date|null;
    pro: boolean;
    ebookPrice: string;
    ebookView: number;
    ebookLike: number;
    ebookDislike: number;
    discription: string;
    ebookCover: string;
    bookPage: number|null;
}