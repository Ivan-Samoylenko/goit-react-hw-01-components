import styled from 'styled-components';

export const TransactionsTable = styled.table`
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;

  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  font-size: 20px;
  font-weight: 700;

  color: #222c15;
  background-color: #c5fb73;

  border-bottom: 1px solid #506630;
`;
export const TableHeadCell = styled.th`
  width: 200px;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid #506630;
  }
`;

export const TableRow = styled.tr`
  background-color: #fcfcfc;

  :nth-child(even) {
    background-color: #94bc57;
  }

  :not(:last-child) {
    border-bottom: 1px solid #506630;
  }
`;

export const TableRowCell = styled.td`
  padding: 5px;

  font-size: 16px;
  font-weight: 500;

  color: #506630;

  :not(:last-child) {
    border-right: 1px solid #506630;
  }
`;
