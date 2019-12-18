import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedEbookResultRequestDto extends PagedFilterAndSortedRequest  {
    EbookNameFilter:string;
    UserNameFilter:string;
    PbClassClassNameFilter:string;
    PbRankRankNameFilter:string;
    PbStatusStatusNameFilter:string;
    PbTypeEbookTypeNameFilter:string;
    PbTypeFileTypeFileNameFilter:string;
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
