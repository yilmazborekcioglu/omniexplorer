/*
 * TransactionListHeader Messages
 *
 * This contains all the text for the TransactionListHeader component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.TransactionListHeader.header',
    defaultMessage: 'Transactions',
    one: 'Transaction',
    other: 'Transactions',
    zero: 'Transactions',
  },
  count: {
    id: 'app.components.TransactionListHeader.header',
    defaultMessage: 'Pages',
    one: 'Page',
    other: 'Pages',
    zero: 'Pages',
  },
  transactionTypes: {
    id: 'app.components.TransactionListHeader.paginationTitle',
    defaultMessage: 'Show All Transaction Types',
  },
});
