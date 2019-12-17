import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedEbookResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}