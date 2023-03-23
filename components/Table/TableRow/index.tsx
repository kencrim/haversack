interface TableRowProps<R = (string | number)[]> {
  row: R;
  renderRow?: (row: R) => React.ReactNode;
  renderCell?: (cell: any) => React.ReactNode;
}

export default function TableRow<R>({
  row,
  renderCell,
  renderRow
}: TableRowProps<R>) {
  return (
    <tr>
      {renderRow && renderRow(row)}

      {!renderRow &&
        Array.isArray(row) &&
        row.map((cell) => {
          if (renderCell) {
            return renderCell(cell);
          }
          if (typeof cell === "string" || typeof cell === "number") {
            return (
              <td
                key={cell}
                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
              >
                {cell}
              </td>
            );
          }

          throw new Error(
            "Invalid cell type. Must be string or number. Did you mean to use a custom renderCell?"
          );
        })}
    </tr>
  );
}
