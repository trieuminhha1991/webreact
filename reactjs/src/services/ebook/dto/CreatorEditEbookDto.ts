export interface CreatorEditEbookDto {
    id:number;
    ebookName:string;
    link:string;
    ebookDateStart:Date|null;
    pro: boolean;
    ebookPrice :number|null;
    ebookView :number;
    ebookLike :number;
    ebookDislike:number;
    discription:string;
    ebookCover:string;
    bookPage:number|null;
    userId:number;
    pbClassId:number|null;
    pbPlaceId: number|null;
    pbRankId:number;
    pbStatusId:number;
    pbSubjectId:number|null;
    pbSubjectEducationId:number|null;
    pbTypeEbookId:number;
    pbTypeFileId: number;
}