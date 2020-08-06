import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, withTheme } from 'emotion-theming';

import Table from './table';
import TableHead from './table-head';
import TableBody from './table-body';
import TableRow from './table-row';
import TableHeadRow from './table-head-row';
import TableBodyRow from './table-body-row';
import RenderIf from '../render-if/render-if';

const DynamicTable = ({ options, items = [], customTableBody, customTableBodyProps, ...rest }) => {
  const theme = useTheme();

  const renderTable = item => {
    const keys = Object.keys(item);
    return keys.map((key, index) => (
      <TableBodyRow key={`table-body-item-${key}-${index}`}>{item[key]}</TableBodyRow>
    ));
  };
  const CustomTableBody = customTableBody;

  return (
    <Table backgroundColor={theme.colors.white} {...rest}>
      <TableHead>
        <TableRow>
          {options.map(({ item }, index) => (
            <TableHeadRow key={`table-header-${index}-${item}`}>{item}</TableHeadRow>
          ))}
        </TableRow>
      </TableHead>
      <RenderIf show={customTableBody ? false : true}>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={`table-body-row-${index}`}>{renderTable(item)}</TableRow>
          ))}
        </TableBody>
      </RenderIf>
      <RenderIf show={customTableBody ? true : false}>
        <CustomTableBody {...customTableBodyProps} />
      </RenderIf>
    </Table>
  );
};

DynamicTable.propTypes = {
  options: PropTypes.array.isRequired,
  items: PropTypes.array,
  customTableBody: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default withTheme(DynamicTable);
