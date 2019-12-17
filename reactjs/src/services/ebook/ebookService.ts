import http from '../httpService';
import {PagedResultDto} from "../dto/pagedResultDto";
import {EbookViewDto} from './dto/getAllEbooktoView';
import {PagedEbookResultRequestDto} from './dto/pagedEbookResultRequestDto';
import {CreatorEditEbookDto} from './dto/CreatorEditEbookDto';
import {EntityDto} from "../dto/entityDto";

class EbookService{
    public async getAll(pagedFilterAndSortedRequest: PagedEbookResultRequestDto): Promise<PagedResultDto<EbookViewDto>> {
        let result = await http.get('/api/services/app/EBook/GetAll', { params: pagedFilterAndSortedRequest });
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