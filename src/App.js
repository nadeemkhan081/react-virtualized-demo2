import React from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; 

import faker from 'faker';

const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const item = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      age: Math.floor(Math.random() * 40) + 20, 
    };
    data.push(item);
  }
  return data;
};

const App = () => {
  const rowCount = 10000; // Number of rows to generate
  const rowHeight = 50; 

  const data = generateRandomData(rowCount);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={rowHeight}
            rowHeight={rowHeight}
            rowCount={rowCount}
            rowGetter={({ index }) => data[index]}
          >
            <Column dataKey="name" label="Name" width={200} />
            <Column dataKey="email" label="Email" width={300} />
            <Column dataKey="age" label="Age" width={100} />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default App;
