export default function OverviewTable() {
  const rows = [
    { num: 1, section: 'Managing Large Spreadsheets', ts: '0:33–20:40', topics: 'Zoom, Split, Freeze Panes, Naming Cells' },
    { num: 2, section: 'Working with Multiple Worksheets', ts: '20:40–33:22', topics: 'Multi-sheet edit, Link Workbooks, Summary Sheet' },
    { num: 3, section: 'Working with Data', ts: '33:22–41:44', topics: 'Grouping, Importing CSV, Hyperlinks' },
    { num: 4, section: 'Advanced Chart Skills', ts: '41:44–56:33', topics: 'Chart Design, SmartArt / WordArt' },
    { num: 5, section: 'Data Lists', ts: '56:33–1:12:29', topics: 'Data Forms, Sort & Filter' },
    { num: 6, section: 'Documenting & Auditing', ts: '1:12:29–1:23:35', topics: 'Notes vs Comments, Watch Window' },
    { num: 7, section: 'Advanced Printing', ts: '1:23:35–1:29:56', topics: 'Page Layout, Print Formulas' },
  ];

  return (
    <div className="card" style={{ marginTop: 8 }}>
      <div className="card-hdr">
        <span className="ico">🗺️</span>
        <div><h3>Course Overview</h3><div className="cts">All sections at a glance</div></div>
      </div>
      <div className="card-body">
        <table className="ov-table">
          <thead>
            <tr><th>#</th><th>Section</th><th>Timestamp</th><th>Key Topics</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.num}>
                <td><b>{r.num}</b></td>
                <td>{r.section}</td>
                <td>{r.ts}</td>
                <td>{r.topics}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
