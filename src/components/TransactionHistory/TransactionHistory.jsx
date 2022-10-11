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
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
