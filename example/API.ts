import {
  getRecords,
  recordsStoreActions,
  IGetRecordsPayload
} from '../redux/actions';
import { handleAsyncAction } from 'react-utils/build/rxjs';

import { map } from 'rxjs/operators';
import { AnyAction } from 'redux';
import { batchActions } from 'redux-batched-actions';
import { IAction } from 'react-utils/build/actions';
import api from '../../util/api';
import { IRecord } from '../redux/reducers/records';
import { setAnchor } from '../redux/actions';

export function getRecordsHandler(action: IAction<IGetRecordsPayload>) {
  const { gameId, anchor, size } = action.payload;

  return api({
    method: 'get', // api GET PUT POST等等
    url: 'api/records', // api的url
    withCredentials: true
  }).pipe(
    map(resp => {
      if (!resp.response) {
        throw new Error('no records in response');
      }

      // api資料取回後的邏輯處理

      // 寫入處理完的資料，並在想要讀取的component用connect拿出來即可
      return batchActions(resp.response.data, 'batch_record_set');
    })
  );
}

export const getRecordsEpic = handleAsyncAction({
  asyncAction: getRecords,
  actionHandler: getRecordsHandler
});
