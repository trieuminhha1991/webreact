import * as React from 'react';
import { inject, observer } from 'mobx-react';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';
/*import { CreatorEditEbookDto } from '../../services/ebook/dto/CreatorEditEbookDto';*/
import EbookStore from '../../stores/ebookStore';
import Stores from '../../stores/storeIdentifier';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from "primereact/button";
import { EntityDto } from '../../services/dto/entityDto';
import {Modal } from 'antd';
import CreateOrUpdateEbookNew from './components/creatorEditEbook';


export interface IEbookProps extends FormComponentProps {
  ebookStore: EbookStore;
}

export interface IRoleState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  bookId: number;
  ebookNameFilter: string;
  userNameFilter: string;
  pbClassClassNameFilter: string;
  pbRankRankNameFilter: string;
  pbStatusStatusNameFilter: string;
  pbTypeEbookTypeNameFilter: string;
  pbTypeFileTypeFileNameFilter:string;
  id: number,
}
const confirm = Modal.confirm;

@inject(Stores.EbookStore)
@observer
class Book extends AppComponentBase<IEbookProps, IRoleState> {
  formRef: any;
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    bookId: 0,
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
  saveFormRef = (formRef: any) => {
    this.formRef = formRef;
  };
  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  async createOrUpdateModalOpen(entityDto: EntityDto) {
    if (entityDto.id === 0) {
      this.props.ebookStore.createEbook();
    } else {
      await this.props.ebookStore.getEbook(entityDto);
    }

    this.setState({ bookId: entityDto.id });
    this.Modal();

    this.formRef.props.form.setFieldsValue({
      ...this.props.ebookStore.creatbook,
      grantedPermissions: '',
    });
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err: any, values: any) => {
      if (err) {
        return;
      } else {
        if (this.state.bookId === 0) {
          await this.props.ebookStore.creat({ id: 0, ...values });
        } else {
          await this.props.ebookStore.edit({ id: this.state.bookId, ...values });
        }
      }

      await this.getAll();
      this.setState({ modalVisible: false });
      form.resetFields();
    });
  };
  delete(input: EntityDto) {
    const self = this;
    confirm({
      title: 'Do you Want to delete these items?',
      onOk() {
        self.props.ebookStore.delete(input);
      },
      onCancel() {},
    });
  }
  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };
  actionTemplate(rowData:any, column:any) {
    return <div>
      <Button type="button" icon="pi pi-pencil" className="p-button-success" style={{marginRight: '.5em'}} onClick={() => this.createOrUpdateModalOpen({ id: rowData.id })}></Button>
      <Button type="button" icon="pi pi-trash" className="p-button-warning" onClick={() => this.delete({ id: rowData.id })}></Button>
    </div>;
  }
  
  render() {
    const {allPermissions,ebook} = this.props.ebookStore;
    const header = <div style={{textAlign:'right'}}>
        <Button type="button" icon="pi pi-plus" iconPos="left" label="New Ebook" onClick={() => this.createOrUpdateModalOpen({ id: 0 })}></Button>
      </div>;
    return (
    <div>
        <DataTable value={ebook === undefined ? [] : ebook.items} paginator={true} rows={3} scrollable={true} header={header} resizableColumns={true}
                   scrollHeight="500px" style={{width: '100%'}} emptyMessage="No records found">
          <Column body={this.actionTemplate.bind(this)} style={{ textAlign: 'center', width: '50px' }}/>
          <Column field="id" header="Id" style={{ textAlign: 'center', width: '20px' }}/>
          <Column field="ebookListDto.ebookName" header="Ebook Name" style={{ textAlign: 'center', width: '100px' }}  filter={true}/>
          <Column field="userName" header="Author" style={{ textAlign: 'center', width: '200px' }} filter={true}/>
          <Column field="ebookListDto.link" header="Ebook Name" style={{ textAlign: 'center', width: '100px' }}/>
          <Column field="ebookListDto.view" header="Number View" style={{ textAlign: 'center', width: '30px' }}/>
          <Column field="ebookListDto.bookpage" header="Number Page" style={{ textAlign: 'center', width: '30px' }}/>
          <Column field="pbTypeEbookTypeName" header="Type Book" style={{ textAlign: 'center', width: '40px' }}  filter={true}/>
          <Column field="pbTypeFileTypeFileName" header="Type File" style={{ textAlign: 'center', width: '40px' }}  filter={true}/>
        </DataTable>
        <CreateOrUpdateEbookNew
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modalVisible}
          onCancel={() =>
            this.setState({
              modalVisible: false,
            })
          }
          modalType={this.state.bookId === 0 ? 'edit' : 'create'}
          onOk={this.handleCreate}
          permissions={allPermissions}
          ebookStore={this.props.ebookStore}
        />
      </div>
    );
  }
}
export default Book;
