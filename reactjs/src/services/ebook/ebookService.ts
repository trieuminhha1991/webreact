import http from '../httpService';
import {PagedResultDto} from "../dto/pagedResultDto";
import {EbookViewDto} from './dto/getAllEbooktoView';
import {PagedEbookResultRequestDto} from './dto/pagedEbookResultRequestDto';
import {CreatorEditEbookDto} from './dto/CreatorEditEbookDto';
import {EntityDto} from "../dto/entityDto";
import {ClassDto, StatusDto, RankDto, TypeBookDto, TypeFileDto} from './dto/EbookRelationshipDto';
import { ebookListDto } from './dto/EbookDto';

class EbookService{
    public async getAll(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<EbookViewDto>> {
        let result = await http.get('/api/services/app/EBook/GetAll', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getEBook(entityDto: EntityDto): Promise<ebookListDto> {
        let result = await http.get('/api/services/app/EBook/GetEbook', { params: entityDto });
        return result.data.result;
    }
    public async getAllClass(): Promise<PagedResultDto<ClassDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllClass');
        return result.data.result;
    }
    public async getAllRank(): Promise<PagedResultDto<RankDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllRank');
        return result.data.result;
    }
    public async getAllStatus(): Promise<PagedResultDto<StatusDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllStatus');
        return result.data.result;
    }
    public async getAllTypeBook(): Promise<PagedResultDto<TypeBookDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllTypeBook' );
        return result.data.result;
    }
    public async getAllTypeFile(): Promise<PagedResultDto<TypeFileDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllTypeFile');
        return result.data.result;
    }
    public async create(createEbookInput: CreatorEditEbookDto) {
        let result = await http.post('/api/services/app/EBook/Create', { params: createEbookInput});
        return result.data.result;
    }
    public async edit(createEbookInput: CreatorEditEbookDto) {
        let result = await http.post('/api/services/app/EBook/Edit', { params: createEbookInput});
        return result.data.result;
    }
    public async delete(entityDto: EntityDto) {
        let result = await http.delete('api/services/app/User/Delete', { params: entityDto });
        return result.data;
    }
}
export default new EbookService();
