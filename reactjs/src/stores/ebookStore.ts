import { action, observable } from 'mobx';
import { PagedResultDto } from '../services/dto/pagedResultDto';

import ebookService from '../services/ebook/ebookService';
import { EbookViewDto } from '../services/ebook/dto/getAllEbooktoView';
import { PagedEbookResultRequestDto } from '../services/ebook/dto/pagedEbookResultRequestDto';
import { ClassDto, RankDto, StatusDto, TypeBookDto, TypeFileDto } from '../services/ebook/dto/EbookRelationshipDto';
import { CreatorEditEbookDto } from '../services/ebook/dto/CreatorEditEbookDto';
import { EntityDto } from '../services/dto/entityDto';

class EbookStore{
  @observable ebook!: PagedResultDto<EbookViewDto>;
  @observable class!: PagedResultDto<ClassDto>;
  @observable rank!: PagedResultDto<RankDto>;
  @observable status!: PagedResultDto<StatusDto>;
  @observable typebook!: PagedResultDto<TypeBookDto>;
  @observable typeFile!: PagedResultDto<TypeFileDto>;

  @action
  async getAll(pagedFilterAndSortedRequest: PagedEbookResultRequestDto) {
    let result = await ebookService.getAll(pagedFilterAndSortedRequest);
    this.ebook = result;
  }
  @action
  async getAllClass(pagedFilterAndSortedRequest: PagedEbookResultRequestDto){
    let result = await ebookService.getAllClass(pagedFilterAndSortedRequest);
    this.class=result;
  }
  @action
  async getAllRank(pagedFilterAndSortedRequest: PagedEbookResultRequestDto){
    let result = await ebookService.getAllRank(pagedFilterAndSortedRequest);
    this.rank=result;
  }
  @action
  async getAllStatus(pagedFilterAndSortedRequest: PagedEbookResultRequestDto){
    let result = await ebookService.getAllStatus(pagedFilterAndSortedRequest);
    this.status=result;
  }
  @action
  async getAllTypeBook(pagedFilterAndSortedRequest: PagedEbookResultRequestDto){
    let result = await ebookService.getAllTypeBook(pagedFilterAndSortedRequest);
    this.typebook=result;
  }
  @action
  async getAllTypeFile(pagedFilterAndSortedRequest: PagedEbookResultRequestDto){
    let result = await ebookService.getAllTypeFile(pagedFilterAndSortedRequest);
    this.typeFile=result;
  }
  async delete(entityDto: EntityDto) {
    await ebookService.delete(entityDto);
    this.ebook.items = this.ebook.items.filter((x: EbookViewDto) => x.id !== entityDto.id);
  }
  async creat(createEbookInput: CreatorEditEbookDto) {
    let result= await ebookService.create(createEbookInput);
    this.ebook.items.push(result)
  }
  async edit(createEbookInput: CreatorEditEbookDto) {
    let result= await ebookService.edit(createEbookInput);
    this.ebook.items = this.ebook.items.map((x: EbookViewDto) => {
      if (x.EbookListDto.id === createEbookInput.id) x = result;
      return x;
    });
  }
}
export default EbookStore;