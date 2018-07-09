import * as React from 'react';

import Pagination from '@/component/pagination';
import { Table } from '@/component/table';
import BusController from '@/api/BusController';
import schema from './schema';

interface TablePaginationViewStates {
  items: any[];
  paginedItems: any[];
  pageIndex: number;
  totalCount: number;
  limit: number;
}

class TablePaginationView extends React.Component<
  {},
  TablePaginationViewStates
> {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      paginedItems: [],
      pageIndex: 1,
      totalCount: 1000,
      limit: 10,
    };
  }

  componentWillMount() {
    BusController.selectList(1, 1000, 20170301).then((response) => {
      this.setState({
        items: response.data.CardBusStatisticsServiceNew.row,
        totalCount: response.data.CardBusStatisticsServiceNew.row.length,
      });
    });
  }

  handleChangePage = (num) => {
    this.setState({
      pageIndex: num,
    });
  };

  setPagingItems(pageIndex): any[] {
    if (pageIndex < 1 || pageIndex > this.state.totalCount) {
      return [];
    }
    const offset = (pageIndex - 1) * this.state.limit;
    const limit = this.state.pageIndex * this.state.limit;
    const paginedItems = this.state.items.slice(offset, limit);
    return paginedItems;
  }

  render() {
    return (
      <section>
        <div>
          <Pagination
            pageIndex={this.state.pageIndex}
            totalCount={this.state.totalCount}
            onClick={this.handleChangePage}
          />
        </div>
        <div>
          <Table
            items={this.setPagingItems(this.state.pageIndex)}
            schema={schema}
          />
        </div>
      </section>
    );
  }
}

export default TablePaginationView;
