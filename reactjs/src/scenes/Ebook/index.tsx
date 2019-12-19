import * as React from 'react';
import { inject, observer } from 'mobx-react';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';
/*import { CreatorEditEbookDto } from '../../services/ebook/dto/CreatorEditEbookDto';*/
import EbookStore from '../../stores/ebookStore';
import Stores from '../../stores/storeIdentifier';
import { EntityDto } from '../../services/dto/entityDto';
import { Card, Col, Dropdown, Menu, Modal, Row, Table } from 'antd';
import CreateOrUpdateEbookNew from './components/creatorEditEbook';
import { L } from '../../lib/abpUtility';
import Button from 'antd/es/button';


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
    maxResultCount: 3,
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
  render() {
    const {allPermissions,ebook} = this.props.ebookStore;
    const columns = [
      { title: L('EbookName'), dataIndex: 'ebookListDto.ebookName', key: 'ebookName', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('UserName'), dataIndex: 'userName', key: 'userName', width: 150, render: (text: string) => <div>{text}</div> },
      {
        title: L('Actions'),
        width: 150,
        render: (text: string, item: any) => (
          <div>
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                  <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item>
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon="setting">
                {L('Actions')}
              </Button>
            </Dropdown>
          </div>
        ),
      },
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
          <Button type="primary" shape="circle" icon="plus" onClick={() => this.createOrUpdateModalOpen({ id: 0 })} />
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
      </Card>
    );
  }
}
export default Book;
