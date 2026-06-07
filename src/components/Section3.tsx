export default function Section3() {
  return (
    <div id="sec3" className="s3">
      <div className="sec-hdr">
        <div className="sec-num">3</div>
        <div>
          <h2>Working with Data</h2>
          <div className="ts">33:22 – 41:44</div>
          <p>Organise, import, and navigate data with grouping, CSV import, and hyperlinks.</p>
        </div>
      </div>

      {/* 3.1 GROUPING DATA */}
      <div id="group" className="card">
        <div className="card-hdr"><span className="ico">📦</span><div><h3>Grouping &amp; Outlining Data</h3><div className="cts">33:22 – 37:00</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Grouping lets you collapse and expand sections of rows or columns — perfect for hiding detail rows while keeping subtotals visible. Great for quarterly breakdowns where you want to show/hide monthly detail.</p></div>

          <div className="mock-label">Visual — Row Grouping with Outline Controls</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">QuarterlySales.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs"><div className="xl-rtab">Home</div><div className="xl-rtab act">Data</div></div>
            <div className="xl-ribbon">
              <div className="rg hi"><div className="rg-lbl">Outline</div><div className="rg-inner"><div className="rb hi">📦 Group ▼</div><div className="rb">Ungroup</div><div className="rb">Subtotal</div></div></div>
            </div>
            <div className="outline-ctrl">
              <span style={{fontSize:9,color:'#888',marginRight:4}}>OUTLINE:</span>
              <div className="ol-btn">1</div>
              <div className="ol-btn">2</div>
              <div className="ol-btn" style={{background:'#D5E8D4',borderColor:'var(--green)',color:'var(--green-dark)'}}>3</div>
            </div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td></td><td className="hdr">Month</td><td className="hdr">Revenue</td><td className="hdr">Expenses</td></tr>
                  <tr><td className="rh">2</td><td style={{fontSize:12,color:'#888',paddingLeft:4}}>−</td><td className="grp">January</td><td className="grp">$42,000</td><td className="grp">$28,000</td></tr>
                  <tr><td className="rh">3</td><td style={{fontSize:12,color:'#888',paddingLeft:4}}>−</td><td className="grp">February</td><td className="grp">$38,500</td><td className="grp">$25,200</td></tr>
                  <tr><td className="rh">4</td><td style={{fontSize:12,color:'#888',paddingLeft:4}}>−</td><td className="grp">March</td><td className="grp">$45,700</td><td className="grp">$31,000</td></tr>
                  <tr><td className="rh">5</td><td></td><td className="hdr">Q1 Total</td><td className="hdr">$126,200</td><td className="hdr">$84,200</td></tr>
                  <tr><td className="rh">6</td><td style={{fontSize:12,color:'#888',paddingLeft:4}}>−</td><td className="grp">April</td><td className="grp">$51,000</td><td className="grp">$34,500</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-status"><span>Level 3 shown — click 1 or 2 to collapse detail rows</span></div>
          </div>
          <div className="callout">📦 The numbered buttons (1, 2, 3) in the outline control collapse or expand grouping levels. <strong>− buttons</strong> on rows collapse individual groups.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Select the rows to group</strong> — click and drag row numbers on the left (e.g. rows 2,3,4 for January–March).</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Go to Data → Group</strong>: <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">Outline</span><span className="ma">›</span><span className="ms">Group</span></span></div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Choose Rows or Columns</strong> in the dialog that appears, then click OK.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Collapse/Expand</strong> — use the <strong>−/+</strong> buttons that appear on the left margin, or click level buttons <strong>1, 2, 3</strong> above them.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Auto-outline</strong> — use <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">Group</span><span className="ma">›</span><span className="ms">Auto Outline</span></span> to let Excel detect and group based on your formula structure.</div></div>
          </div>
          <div className="tip">💡 <strong>Shortcut:</strong> <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> to Group, <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> to Ungroup selected rows/columns.</div>
        </div>
      </div>

      {/* 3.2 IMPORTING DATA */}
      <div id="import" className="card">
        <div className="card-hdr"><span className="ico">📥</span><div><h3>Importing External Data (CSV/Text)</h3><div className="cts">37:00 – 39:30</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>When you receive data from other systems (databases, web exports, accounting software) as a .csv or .txt file, use Excel's import wizard to control how columns are parsed, delimiters, and data types — rather than just opening which can misformat dates and numbers.</p></div>

          <div className="mock-label">Visual — Data Import Dialog (Text Import Wizard)</div>
          <div className="dialog" style={{maxWidth:420,margin:'0 auto'}}>
            <div className="dlg-title">
              <span>Text Import Wizard — Step 1 of 3</span>
              <span className="dlg-close">✕</span>
            </div>
            <div className="dlg-body">
              <div style={{fontSize:12,marginBottom:10,color:'#555'}}>The Text Wizard has determined that your data is <strong>Delimited</strong>.</div>
              <div style={{fontSize:11.5,marginBottom:8}}>Original data type:</div>
              <div style={{marginBottom:8,fontSize:12}}>
                <label style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}><input type="radio" defaultChecked /> <strong>Delimited</strong> — Characters such as commas or tabs separate each field</label>
                <label style={{display:'flex',alignItems:'center',gap:6}}><input type="radio" /> <strong>Fixed width</strong> — Fields are aligned in columns with spaces</label>
              </div>
              <div style={{background:'#F5F5F5',border:'1px solid #DDD',padding:'6px 8px',fontSize:11,fontFamily:'JetBrains Mono,monospace',marginTop:8}}>
                <div>Name,Department,Salary,StartDate</div>
                <div>Alice,Engineering,85000,2021-01-15</div>
                <div>Bob,Finance,72000,2020-03-22</div>
                <div>Carol,HR,65000,2022-07-01</div>
              </div>
              <div className="dlg-btns"><button className="btn-cancel">Back</button><button className="btn-ok">Next &gt;</button></div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Go to Data → Get External Data</strong>: <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">Get &amp; Transform Data</span><span className="ma">›</span><span className="ms">From Text/CSV</span></span></div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Browse to your file</strong> — navigate to the CSV or TXT file and click Import.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Step 1 — File type</strong>: Choose <strong>Delimited</strong> (most CSV files) or Fixed Width. Set the start row if there are header rows to skip.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Step 2 — Delimiters</strong>: Check <strong>Comma</strong> for CSV, or Tab for tab-separated. Preview updates live to confirm column splits.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Step 3 — Column formats</strong>: Click each column in the preview and set its data type (General, Text, Date). Set date columns to prevent misreading.</div></div>
            <div className="step"><div className="sn">6</div><div className="sc"><strong>Click Finish</strong> — choose where to put the data (existing sheet or new sheet) and click OK.</div></div>
          </div>
          <div className="tip">💡 <strong>Modern Excel:</strong> Use <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">From Text/CSV</span></span> (Power Query) for richer transformations and automatic refresh when the source file updates.</div>
        </div>
      </div>

      {/* 3.3 HYPERLINKS */}
      <div id="hyperlink" className="card">
        <div className="card-hdr"><span className="ico">🌐</span><div><h3>Creating Hyperlinks</h3><div className="cts">39:30 – 41:44</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Hyperlinks in Excel can jump to: a website URL, another cell in the same workbook, a different sheet, or even another file. Use them to build navigation menus in large workbooks or link to source documents.</p></div>

          <div className="mock-label">Visual — Insert Hyperlink Dialog</div>
          <div className="dialog" style={{maxWidth:440,margin:'0 auto'}}>
            <div className="dlg-title"><span>Insert Hyperlink</span><span className="dlg-close">✕</span></div>
            <div className="dlg-body">
              <div style={{display:'flex',gap:10,marginBottom:12}}>
                <div style={{display:'flex',flexDirection:'column',gap:2,width:120,fontSize:11,borderRight:'1px solid #DDD',paddingRight:10}}>
                  <div style={{padding:'4px 8px',background:'#E3F2FD',color:'#0D47A1',fontWeight:700,borderRadius:3}}>🌐 Existing File/URL</div>
                  <div style={{padding:'4px 8px',cursor:'pointer',borderRadius:3}}>📌 Place in Document</div>
                  <div style={{padding:'4px 8px',cursor:'pointer',borderRadius:3}}>📄 New Document</div>
                  <div style={{padding:'4px 8px',cursor:'pointer',borderRadius:3}}>✉️ E-mail Address</div>
                </div>
                <div style={{flex:1}}>
                  <div className="dlg-row"><label>Display text:</label><input defaultValue="Visit Our Website" style={{fontWeight:700}} /></div>
                  <div className="dlg-row"><label>Address:</label><input className="hi" defaultValue="https://example.com" /></div>
                  <div style={{marginTop:8,fontSize:11,color:'#777'}}>Tip: Click "ScreenTip..." to add a tooltip that appears on hover.</div>
                </div>
              </div>
              <div className="dlg-btns"><button className="btn-cancel">Cancel</button><button className="btn-ok">OK</button></div>
            </div>
          </div>
          <div style={{marginTop:12}}>
            <div className="mock-label">Result in spreadsheet</div>
            <div className="xl-win">
              <div className="xl-grid">
                <table className="xl-tbl">
                  <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                  <tbody>
                    <tr><td className="rh">1</td><td className="hdr">Resource</td><td className="hdr">Link</td><td className="hdr">Notes</td></tr>
                    <tr><td className="rh">2</td><td>Company Website</td><td className="lnk">Visit Our Website</td><td>Opens in browser</td></tr>
                    <tr><td className="rh">3</td><td>Q1 Data</td><td className="lnk">Jump to Q1 Sheet</td><td>Internal link</td></tr>
                    <tr><td className="rh">4</td><td>Source File</td><td className="lnk">Budget2024.xlsx</td><td>Opens file</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Select the cell</strong> where you want the hyperlink to appear.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Open Insert Hyperlink</strong>: <span className="mpath"><span className="ms">Insert</span><span className="ma">›</span><span className="ms">Links</span><span className="ma">›</span><span className="ms">Hyperlink</span></span> or press <kbd>Ctrl</kbd>+<kbd>K</kbd></div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Choose link type</strong> from the left panel: URL, cell reference ("Place in Document"), another file, or email.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Set display text</strong> — what the user sees in the cell (e.g. "Click here") and the actual address.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Click OK</strong> — the cell shows blue underlined text. <kbd>Ctrl</kbd>+Click to follow the link without editing.</div></div>
          </div>
          <div className="tip">💡 <strong>Edit a hyperlink:</strong> Right-click the cell → Edit Hyperlink. Don't just click — that follows the link!</div>
        </div>
      </div>
    </div>
  );
}
