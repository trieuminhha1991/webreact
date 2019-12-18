import {ebookListDto} from './EbookDto';

export interface EbookViewDto{
    id:number,
    ebookListDto: ebookListDto;
    userName: string;
    pbClassClassName: string;
    pbPlacePlaceName: string;
    pbRankRankName: string;
    pbStatusStatusName: string;
    pbSubjectSectionName: string;
    pbSubjectEducationSubjectName: string;
    pbTypeEbookTypeName: string;
    pbTypeFileTypeFileName: string;
}