import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedEbookResultRequestDto extends PagedFilterAndSortedRequest  {
    ebookNameFilter:string;
    userNameFilter:string;
    pbClassClassNameFilter:string;
    pbRankRankNameFilter:string;
    pbStatusStatusNameFilter:string;
    pbTypeEbookTypeNameFilter:string;
    pbTypeFileTypeFileNameFilter:string;
}
/*
export interface PageClassResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
export interface PageRankResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
export interface PageTypeBookResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
export interface PageTypeFileResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}*/
