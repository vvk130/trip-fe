const Table = <TRow extends Record<number, unknown>>(props: {
  rows: TRow[];
  renderRow: React.FC<TRow>;
}) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <props.renderRow {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
