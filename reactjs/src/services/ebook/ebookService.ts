import http from '../httpService';
import {PagedResultDto} from "../dto/pagedResultDto";
import {EbookViewDto} from './dto/getAllEbooktoView';
import {PagedEbookResultRequestDto} from './dto/pagedEbookResultRequestDto';
import {CreatorEditEbookDto} from './dto/CreatorEditEbookDto';
import {EntityDto} from "../dto/entityDto";
import {ClassDto, StatusDto, RankDto, TypeBookDto, TypeFileDto} from './dto/EbookRelationshipDto';

class EbookService{
    public async getAll(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<EbookViewDto>> {
        let result = await http.get('/api/services/app/EBook/GetAll', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getallClass(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<ClassDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllClass', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getAllRank(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<RankDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllRank', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getAllStatus(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<StatusDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllStatus', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getAllTypeBook(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<TypeBookDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllTypeBook', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async getAllTypeFile(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<TypeFileDto>> {
        let result = await http.get('/api/services/app/EBook/GetAllTypeFile', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }
    public async createoredit(createEbookInput: CreatorEditEbookDto) {
        let result = await http.post('/api/services/app/EBook/CreateOrEdit', createEbookInput);
        return result.data.result;
    }
    public async delete(entityDto: EntityDto) {
        let result = await http.delete('api/services/app/User/Delete', { params: entityDto });
        return result.data;
    }
}
export default new EbookService();
