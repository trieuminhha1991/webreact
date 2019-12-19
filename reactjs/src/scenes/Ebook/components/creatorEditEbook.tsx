import {GetAllPermissionsOutput} from "../../../services/role/dto/getAllPermissionsOutput";
import * as React from "react";
import {Form, Input, Modal, Tabs} from "antd";
import {FormComponentProps} from "antd/lib/form";
import EbookStore from "../../../stores/ebookStore";
import {L} from "../../../lib/abpUtility";
import FormItem from "antd/lib/form/FormItem";


const TabPane = Tabs.TabPane;
export interface ICreateOrUpdateEbookProps extends FormComponentProps {
    ebookStore: EbookStore;
    visible: boolean;
    onCancel: () => void;
    modalType: string;
    onOk: () => void;
    permissions: GetAllPermissionsOutput[];
}
class CreateOrUpdateEbookNew extends React.Component<ICreateOrUpdateEbookProps>{
    state = {
        confirmDirty: false,
    };
    render() {
        /*const { permissions } = this.props;*/

        /*const options = permissions.map((x: GetAllPermissionsOutput) => {
            return { label: x.displayName, value: x.name };
        });*/

        const formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 6 },
                md: { span: 6 },
                lg: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 18 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 },
            },
        };

        /*const tailFormItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 6 },
                md: { span: 6 },
                lg: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 18 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 },
            },
        };*/

        const { getFieldDecorator } = this.props.form;

        return (
            <Modal
                visible={this.props.visible}
                cancelText={L('Cancel')}
                okText={L('OK')}
                onCancel={this.props.onCancel}
                title={L('Ebook')}
                onOk={this.props.onOk}
            >
                <Tabs defaultActiveKey={'role'} size={'small'} tabBarGutter={64}>
                    <TabPane tab={L('RoleDetails')} key={'role'}>
                        <FormItem label={L('EbookName')} {...formItemLayout}>
                            {getFieldDecorator('ebookName')(<Input />)}
                        </FormItem>
                        <FormItem label={L('Link')} {...formItemLayout}>
                            {getFieldDecorator('link')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookDateStart')} {...formItemLayout}>
                            {getFieldDecorator('ebookDateStart')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookPrice')} {...formItemLayout}>
                            {getFieldDecorator('ebookPrice')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookView')} {...formItemLayout}>
                            {getFieldDecorator('ebookView')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookLike')} {...formItemLayout}>
                            {getFieldDecorator('ebookLike')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookDislike')} {...formItemLayout}>
                            {getFieldDecorator('ebookDislike')(<Input />)}
                        </FormItem>
                        <FormItem label={L('Description')} {...formItemLayout}>
                            {getFieldDecorator('discription')(<Input />)}
                        </FormItem>
                        <FormItem label={L('EbookCover')} {...formItemLayout}>
                            {getFieldDecorator('ebookCover')(<Input />)}
                        </FormItem>
                        <FormItem label={L('BookPage')} {...formItemLayout}>
                            {getFieldDecorator('bookPage')(<Input />)}
                        </FormItem>
                        <FormItem label={L('UserId')} {...formItemLayout}>
                            {getFieldDecorator('userId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbClassId')} {...formItemLayout}>
                            {getFieldDecorator('pbClassId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbPlaceId')} {...formItemLayout}>
                            {getFieldDecorator('pbPlaceId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbRankId')} {...formItemLayout}>
                            {getFieldDecorator('pbRankId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbStatusId')} {...formItemLayout}>
                            {getFieldDecorator('pbStatusId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbTypeEbookId')} {...formItemLayout}>
                            {getFieldDecorator('pbTypeEbookId')(<Input />)}
                        </FormItem>
                        <FormItem label={L('PbTypeFileId')} {...formItemLayout}>
                            {getFieldDecorator('pbTypeFileId')(<Input />)}
                        </FormItem>
                    </TabPane>
                </Tabs>
            </Modal>
        );
    }
}

export default Form.create<ICreateOrUpdateEbookProps>()(CreateOrUpdateEbookNew);
