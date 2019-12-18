import * as React from 'react';

import { L } from '../../lib/abpUtility';
import EbookStore from '../../stores/ebookStore';
import Stores from '../../stores/storeIdentifier';
import AppComponentBase from '../../components/AppComponentBase';
import { FormComponentProps } from 'antd/lib/form';

export interface IEbookProps extends FormComponentProps {
  ebookStore: EbookStore;
}

export interface IRoleState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  roleId: number;
  filter: string;
}
class Book extends AppComponentBase<IEbookProps, IRoleState> {

}
export default Book;