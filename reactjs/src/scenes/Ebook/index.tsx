import * as React from 'react';
import { inject, observer } from 'mobx-react';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';
/*import { CreatorEditEbookDto } from '../../services/ebook/dto/CreatorEditEbookDto';*/
import {Button} from 'primereact/button';
import EbookStore from '../../stores/ebookStore';
import Stores from '../../stores/storeIdentifier';
import { L } from '../../lib/abpUtility';
import { Card, Col, Row, Table } from 'antd';
import Search from 'antd/es/input/Search';

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
@inject(Stores.EbookStore)
@observer
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
    const {ebook} = this.props.ebookStore;
    const columns = [
      { title: 'Id', dataIndex: 'userName', key: 'userName', width: 150, render: (text: string) => <div>{text}</div> },
      { title: 'DisplayName', dataIndex: 'ebookPrice', key: 'ebookPrice', width: 150, render: (text: string) => <div>{text}</div> },
    ];
    return (
      <Card>
        <Row>
          <Col
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          >
            <h2>{L('Roles')}</h2>
          </Col>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          >
            <Button type="primary" shape="circle" icon="plus" />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 0 }}>
            <Search placeholder={this.L('Filter')} />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Table
              rowKey="id"
              size={'default'}
              bordered={true}
              pagination={{ pageSize: this.state.maxResultCount, total: ebook === undefined ? 0 : ebook.totalCount, defaultCurrent: 1 }}
              columns={columns}
              loading={ebook === undefined ? true : false}
              dataSource={ebook === undefined ? [] : ebook.items}
              onChange={this.handleTableChange}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default Book;