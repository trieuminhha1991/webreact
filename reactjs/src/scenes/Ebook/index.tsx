import * as React from 'react';
import { inject, observer } from 'mobx-react';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';
/*import { CreatorEditEbookDto } from '../../services/ebook/dto/CreatorEditEbookDto';*/
import EbookStore from '../../stores/ebookStore';
import Stores from '../../stores/storeIdentifier';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {CreatorEditEbookDto} from "../../services/ebook/dto/CreatorEditEbookDto";
import {Button} from "primereact/button";


export interface IEbookProps extends FormComponentProps {
  ebookStore: EbookStore;
}

export interface IRoleState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  roleId: number;
  ebookNameFilter: string;
  userNameFilter: string;
  pbClassClassNameFilter: string;
  pbRankRankNameFilter: string;
  pbStatusStatusNameFilter: string;
  pbTypeEbookTypeNameFilter: string;
  pbTypeFileTypeFileNameFilter:string;
  id: number,
}
@inject(Stores.EbookStore)
@observer
class Book extends AppComponentBase<IEbookProps, IRoleState> {
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    roleId: 0,
    ebookNameFilter: '',
    userNameFilter: '',
    pbClassClassNameFilter: '',
    pbRankRankNameFilter: '',
    pbStatusStatusNameFilter: '',
    pbTypeEbookTypeNameFilter: '',
    pbTypeFileTypeFileNameFilter: '',
    id: 0,
  };
  async componentDidMount() {
    await this.getAll();
  }
  async getAll() {
    await this.props.ebookStore.getAll({ maxResultCount: this.state.maxResultCount,
      skipCount: this.state.skipCount,
      ebookNameFilter: this.state.ebookNameFilter,
      userNameFilter: this.state.userNameFilter,
      pbClassClassNameFilter: this.state.pbClassClassNameFilter,
      pbRankRankNameFilter: this.state.pbRankRankNameFilter,
      pbStatusStatusNameFilter: this.state.pbStatusStatusNameFilter,
      pbTypeEbookTypeNameFilter: this.state.pbTypeEbookTypeNameFilter,
      pbTypeFileTypeFileNameFilter: this.state.pbTypeFileTypeFileNameFilter,
    });
  }
  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };

  creatoredit(CreatorEditEbookDto: CreatorEditEbookDto){
    if(this.state.id===0)
    {
      this.props.ebookStore.creat(CreatorEditEbookDto)
    }
    else
    {
      this.props.ebookStore.edit(CreatorEditEbookDto)
    }
  }
  actionTemplate(rowData:any, column:any) {
    return <div>
      <Button type="button" icon="pi pi-times" className="p-button-success" style={{marginRight: '.5em'}}></Button>
      <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
    </div>;
  }
  render() {
    const {ebook} = this.props.ebookStore;
    return (
      <DataTable value={ebook === undefined ? [] : ebook.items} paginator={true} rows={10} scrollable={true} scrollHeight="200px" style={{marginTop:'30px'}}>
        <Column body={this.actionTemplate} style={{textAlign:'center', width: '50px'}}/>
        <Column field="id" header="Id" style={{textAlign:'center', width: '20px'}}/>
        <Column field="ebookListDto.ebookName" header="Ebook Name" style={{textAlign:'center', width: '100px'}}/>
        <Column field="userName" header="Author" style={{textAlign:'center', width: '100px'}}/>
        <Column field="ebookListDto.link" header="Ebook Name" style={{textAlign:'center', width: '100px'}}/>
        <Column field="ebookListDto.view" header="Number View" style={{textAlign:'center', width: '30px'}}/>
        <Column field="ebookListDto.bookpage" header="Number Page" style={{textAlign:'center', width: '30px'}}/>
        <Column field="pbTypeEbookTypeName" header="Type Book" style={{textAlign:'center', width: '40px'}}/>
        <Column field="pbTypeFileTypeFileName" header="Type File" style={{textAlign:'center', width: '40px'}}/>
      </DataTable>
    );
  }
}
export default Book;
