import * as React from 'react';

import EbookStore from '../../stores/ebookStore';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';
/*import { CreatorEditEbookDto } from '../../services/ebook/dto/CreatorEditEbookDto';*/
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from 'primereact/button';


export interface IEbookProps extends FormComponentProps {
  ebookStore: EbookStore;
}

export interface IRoleState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  roleId: number;
  EbookNameFilter: string;
  UserNameFilter: string;
  PbClassClassNameFilter: string;
  PbRankRankNameFilter: string;
  PbStatusStatusNameFilter: string;
  PbTypeEbookTypeNameFilter: string;
  PbTypeFileTypeFileNameFilter:string;
  id: number,
}
class Book extends AppComponentBase<IEbookProps, IRoleState> {
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    roleId: 0,
    EbookNameFilter: '',
    UserNameFilter: '',
    PbClassClassNameFilter: '',
    PbRankRankNameFilter: '',
    PbStatusStatusNameFilter: '',
    PbTypeEbookTypeNameFilter: '',
    PbTypeFileTypeFileNameFilter: '',
    id: 0,
  };
  async componentDidMount() {
    await this.getAll();
  }
  async getAll() {
    await this.props.ebookStore.getAll({ maxResultCount: this.state.maxResultCount,
      skipCount: this.state.skipCount,
      EbookNameFilter: this.state.EbookNameFilter,
      UserNameFilter: this.state.UserNameFilter,
      PbClassClassNameFilter: this.state.PbClassClassNameFilter,
      PbRankRankNameFilter: this.state.PbRankRankNameFilter,
      PbStatusStatusNameFilter: this.state.PbStatusStatusNameFilter,
      PbTypeEbookTypeNameFilter: this.state.PbTypeEbookTypeNameFilter,
      PbTypeFileTypeFileNameFilter: this.state.PbTypeFileTypeFileNameFilter,
    });
  }
  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };

  /*async creatoredit(CreatorEditEbookDto: CreatorEditEbookDto){
    if(this.state.id===0)
    {
      this.props.ebookStore.creat(CreatorEditEbookDto)
    }
    else
    {
      this.props.ebookStore.edit(CreatorEditEbookDto)
    }
  }*/
  async  actionTemplate(rowData: any, column: any) {
    return <div>
      <Button type="button" icon="pi pi-times" className="p-button-success"></Button>
      <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
    </div>;
  }
  render() {
    const ebookes=this.props.ebookStore;
    var header = <div></div>;

    return (
      <DataTable value={ebookes.ebook.items} header={header}>
        /*<Column field="EbookListDto.id" header="id" />*/
        <Column field="EbookListDto.ebookDateStart" header="Date Start" />
        <Column field="EbookListDto.pro" header="Pro" />
        <Column field="EbookListDto.ebookPrice" header="Price" />
        <Column field="EbookListDto.bookPage" header="Number Page" />
        <Column field="UserName" header="Author" />
        <Column field="PbTypeEbookTypeName" header="Type Book" />
        <Column field="PbTypeFileTypeFileName" header="Type File" />
        <Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
      </DataTable>
    );
  }
}
export default Book;