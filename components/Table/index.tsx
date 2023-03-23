import TableRow from "./TableRow";

type TableRow = (string | number)[];

interface TableProps<R> {
  rows: R[];
  head?: string[];
  renderRow?: (row: R) => React.ReactNode;
  renderCell?: (cell: any) => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  sortBy?: (a: R, b: R) => boolean;
}

export default function Table<T = TableRow>({
  rows,
  head,
  renderRow,
  renderCell,
  renderHeader
}: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      {renderHeader && renderHeader()}
      {!renderHeader && head && (
        <thead>
          <tr>
            {head?.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="divide-y divide-gray-200">
        {rows?.map((row, i) => (
          <TableRow
            key={i}
            row={row}
            renderCell={renderCell}
            renderRow={renderRow}
          />
        ))}
      </tbody>
    </table>
  );
}
