import { storiesOf } from '@storybook/react';
import React from 'react';

import {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableRow,
  TableBodyRow,
  DynamicTable,
} from './index';

const tableHeaderOptions = [
  {
    item: 'First Name',
  },
  {
    item: 'Last Name',
  },
  {
    item: 'Year of Birth',
  },
];

const tableItems = [
  {
    first_name: 'Eldin',
    last_name: 'Soljic',
    year_of_birth: 1985,
  },
];

storiesOf('Table', module)
  .add('Basic', () => (
    <Table>
      <TableHead>
        <TableHeadRow>First Name</TableHeadRow>
        <TableHeadRow>Last Name</TableHeadRow>
        <TableHeadRow>Year of Birth</TableHeadRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableBodyRow>Eldin</TableBodyRow>
          <TableBodyRow>Soljic</TableBodyRow>
          <TableBodyRow>1985</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Nikola</TableBodyRow>
          <TableBodyRow>Majmunovic</TableBodyRow>
          <TableBodyRow>1986</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Ognjen</TableBodyRow>
          <TableBodyRow>Cetkovic</TableBodyRow>
          <TableBodyRow>1987</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Amar</TableBodyRow>
          <TableBodyRow>Hrvat</TableBodyRow>
          <TableBodyRow>1989</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Nedim</TableBodyRow>
          <TableBodyRow>Hadzialic</TableBodyRow>
          <TableBodyRow>1991</TableBodyRow>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('Stripped Table', () => (
    <Table stripped>
      <TableHead>
        <TableHeadRow>First Name</TableHeadRow>
        <TableHeadRow>Last Name</TableHeadRow>
        <TableHeadRow>Year of Birth</TableHeadRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableBodyRow>Eldin</TableBodyRow>
          <TableBodyRow>Soljic</TableBodyRow>
          <TableBodyRow>1985</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Nikola</TableBodyRow>
          <TableBodyRow>Majmunovic</TableBodyRow>
          <TableBodyRow>1986</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Ognjen</TableBodyRow>
          <TableBodyRow>Cetkovic</TableBodyRow>
          <TableBodyRow>1987</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Amar</TableBodyRow>
          <TableBodyRow>Hrvat</TableBodyRow>
          <TableBodyRow>1989</TableBodyRow>
        </TableRow>
        <TableRow>
          <TableBodyRow>Nedim</TableBodyRow>
          <TableBodyRow>Hadzijalic</TableBodyRow>
          <TableBodyRow>1991</TableBodyRow>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('Dynamic Table', () => <DynamicTable options={tableHeaderOptions} items={tableItems} />, {
    notes:
      'This is a dynamic table. To be rendered, this component expects "options" as prop, which are header items in the table. Body of the table to be rendered, component expects either array of "items" as a prop, or you can pass custom table body to the component.',
  });
