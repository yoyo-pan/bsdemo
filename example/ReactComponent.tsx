import * as React from 'react'
import { compose } from 'recompose'
import autobind from 'autobind-decorator'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import styles from './Records.styles'
import {
  Grid,
  Paper,
  Avatar,
  CircularProgress,
  Button
} from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router'
import dayjs from 'dayjs'
import { connect } from 'react-redux'
import blockies from 'blockies'

import { getRecords, clearRecords } from '../../redux/actions'
import { IRecord } from '../../redux/reducers/records'
import { IGlobalState } from '../../../store/rootReducer'
import { IRequestStatusStoreState } from 'react-utils/build/reducers/buildRequestStatusReducer'
import { IDataStoreState } from 'react-utils/build/reducers/buildDataStoreReducers'
import { IRouterParams } from '../../constants/Route'
import TokenWhite from '../../assets/tokenWhite.png'
import TokenGray from '../../assets/tokenGray.png'
import AvatarUnknown from '../../assets/unknown.png'

import { isNil } from '../../../util/helper'
import { track } from '../../../util/tracking'

interface IRecordsProps
  extends IRecordsOwnProps,
    RouteComponentProps<IRouterParams>,
    WithStyles {
  records: IDataStoreState<IRecord>
  anchor: string | null
  requestStatus: IRequestStatusStoreState
}

interface IRecordsOwnProps {}

interface IRecordsState {
  requestId: string
}


export class Records extends React.PureComponent<IRecordsProps, IRecordsState> {
  

  handleClick = () => {
    // 當元件on click時的邏輯
  }

  componentDidMount() {
      //這個component出現在DOM之後可以發一些api取資料
    getRecords.dispatch(
      ... // api的參數
    )
  }

  componentWillUnmount() {
      // 這個component消失在DOM之前可以做一些邏輯處理
    clearRecords.dispatch({})
  }

  render() {
    const { classes, records } = this.props

    // 最後產生的html會是
    // <div>
    //   <div>record 1</div>
    //   <div>record2</div>
    //   ....
    // </div>
    return (
      <div className={classes.recordContainer}>
        {records.map(record => <div onClick={this.handleClick}>{record}</div>)}
      </div>
    )
  }
}

// 在這裡指定哪些api拿回來的資料是這個component需要的
const mapStateToProps = (state: IGlobalState) => ({
  records: state.records
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose<IRecordsProps, IRecordsOwnProps>(
    withRouter,
    withStyles(styles)
  )(Records)
)
