export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sb-logo">
        <div className="xl-icon">X</div>
        <h1>Excel Intermediate</h1>
        <p>Complete Visual Reference Guide</p>
      </div>

      <div className="sb-sec">
        <div className="sb-sec-title">Sections</div>
        <a className="sb-link" href="#sec1"><span className="badge">1</span> Managing Large Spreadsheets</a>
        <a className="sb-link" href="#sec2"><span className="badge">2</span> Multiple Worksheets</a>
        <a className="sb-link" href="#sec3"><span className="badge">3</span> Working with Data</a>
        <a className="sb-link" href="#sec4"><span className="badge">4</span> Advanced Chart Skills</a>
        <a className="sb-link" href="#sec5"><span className="badge">5</span> Data Lists</a>
        <a className="sb-link" href="#sec6"><span className="badge">6</span> Documenting &amp; Auditing</a>
        <a className="sb-link" href="#sec7"><span className="badge">7</span> Advanced Printing</a>
      </div>

      <div className="sb-sec">
        <div className="sb-sec-title">Topics</div>
        <a className="sb-link" href="#zoom">🔍 Zoom Options</a>
        <a className="sb-link" href="#split">✂️ Split Windows</a>
        <a className="sb-link" href="#freeze">❄️ Freeze Panes</a>
        <a className="sb-link" href="#name">🏷️ Naming Cells</a>
        <a className="sb-link" href="#multiedit">📑 Edit Multiple Sheets</a>
        <a className="sb-link" href="#link">🔗 Link Workbooks</a>
        <a className="sb-link" href="#summary">📋 Summary Worksheets</a>
        <a className="sb-link" href="#group">📦 Grouping Data</a>
        <a className="sb-link" href="#import">📥 Importing Data</a>
        <a className="sb-link" href="#hyperlink">🌐 Hyperlinking</a>
        <a className="sb-link" href="#chartcust">📊 Chart Customisation</a>
        <a className="sb-link" href="#smartart">🎨 SmartArt / WordArt</a>
        <a className="sb-link" href="#forms">📝 Data Forms</a>
        <a className="sb-link" href="#sortfilter">🔽 Sort &amp; Filter</a>
        <a className="sb-link" href="#comments">💬 Comments &amp; Notes</a>
        <a className="sb-link" href="#watch">👁️ Watch Window</a>
        <a className="sb-link" href="#pagelayout">🖨️ Page Layout</a>
        <a className="sb-link" href="#printformulas">🔤 Print Formulas</a>
      </div>
    </nav>
  );
}
