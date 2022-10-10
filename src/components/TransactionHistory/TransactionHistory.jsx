import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableHeadCell,
  TableRow,
  TableRowCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableRowCell>{item.type}</TableRowCell>
              <TableRowCell>{item.amount}</TableRowCell>
              <TableRowCell>{item.currency}</TableRowCell>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default TransactionHistory;
