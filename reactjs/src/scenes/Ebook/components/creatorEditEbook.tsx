import RoleStore from "../../../stores/roleStore";
import {GetAllPermissionsOutput} from "../../../services/role/dto/getAllPermissionsOutput";
import * as React from "react";
import {Button} from "primereact/button";
import {Dialog} from 'primereact/dialog';
import {InputText} from "primereact/inputtext";

export interface ICreateOrUpdateEbook{
    item: RoleStore;
    visible: boolean;
    onCancel: () => void;
    modalType: string;
    onOk: () => void;
    permissions: GetAllPermissionsOutput[];
    havaId:boolean,
}
class CreateOrUpdateRole extends React.Component<ICreateOrUpdateEbook>{
    state={
        visible:true,
        value: ''
    }
    onHide() {
        this.setState({visible: false});
    }
    render(){
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
        return (
            <Dialog header="Godfather I" visible={this.state.visible} style={{width: '500px'}} footer={footer}
                    onHide={this.onHide} maximizable>
                <div className="p-grid">
                    <div className="p-lg-4 p-md-12">Ebook Name *</div>
                    <div className="p-lg-8 p-md-12">
                        <InputText value={this.state.value} onChange={(e) => this.setState({value: (e.target as HTMLInputElement).value})} validateOnly={true}/>
                    </div>
                </div>
            </Dialog>
        )
    }
}
export default CreateOrUpdateRole;
