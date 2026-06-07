export default function Section1() {
  return (
    <div id="sec1" className="s1">
      <div className="sec-hdr">
        <div className="sec-num">1</div>
        <div>
          <h2>Managing Large Spreadsheets</h2>
          <div className="ts">0:33 – 20:40</div>
          <p>Tools to navigate, focus, and stay oriented inside massive workbooks — without changing any data.</p>
        </div>
      </div>

      {/* 1.1 ZOOM */}
      <div id="zoom" className="card">
        <div className="card-hdr"><span className="ico">🔍</span><div><h3>Zoom Options</h3><div className="cts">0:33 – 2:12</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Use Zoom when you have a dataset so wide or dense that you need to see more columns at once (zoom out), or when you need to examine cell details or formula accuracy (zoom in). "Zoom to Selection" is especially handy for presenting.</p></div>

          <div className="mock-label">Visual — Excel Status Bar &amp; View Ribbon</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">SalesData.xlsx – Excel</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs">
              <div className="xl-rtab">File</div><div className="xl-rtab">Home</div>
              <div className="xl-rtab act">View</div>
              <div className="xl-rtab">Formulas</div>
            </div>
            <div className="xl-ribbon">
              <div className="rg"><div className="rg-lbl">Workbook Views</div><div className="rg-inner"><div className="rb">Normal</div><div className="rb">Page Layout</div><div className="rb">Page Break</div></div></div>
              <div className="rdiv"></div>
              <div className="rg hi"><div className="rg-lbl">Zoom</div><div className="rg-inner"><div className="rb hi">🔍 Zoom</div><div className="rb hi">Zoom to Selection</div><div className="rb">100%</div></div></div>
              <div className="rdiv"></div>
              <div className="rg"><div className="rg-lbl">Window</div><div className="rg-inner"><div className="rb">New Window</div><div className="rb">Arrange All</div><div className="rb">Freeze Panes</div></div></div>
            </div>
            <div className="xl-fbar"><div className="xl-nb">B4</div><span className="xl-fx">fx</span><div className="xl-formula">5200</div></div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="hdr">Region</td><td className="hdr">Q1</td><td className="hdr">Q2</td><td className="hdr">Q3</td><td className="hdr">Q4</td></tr>
                  <tr><td className="rh">2</td><td>North</td><td>4200</td><td>3800</td><td>5100</td><td>4700</td></tr>
                  <tr><td className="rh">3</td><td>South</td><td>3600</td><td>4100</td><td>3900</td><td>5200</td></tr>
                  <tr><td className="rh">4</td><td>East</td><td className="act">5200</td><td>4600</td><td>4800</td><td>5500</td></tr>
                  <tr><td className="rh">5</td><td>West</td><td>3100</td><td>3700</td><td>4300</td><td>4900</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-status"><span>Ready</span><div className="xl-zoom"><span>−</span><div className="xl-zoom-slider"><div className="xl-zoom-thumb"></div></div><span>+</span><span style={{fontSize:11,marginLeft:4}}>75%</span></div></div>
          </div>
          <div className="callout">⬆️ The highlighted <strong>View → Zoom</strong> group and the <strong>Zoom Slider</strong> in the bottom-right status bar are both active controls.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Open the View tab</strong> — click <span style={{fontWeight:700,color:'var(--green)'}}>View</span> in the ribbon at the top of Excel.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Click "Zoom"</strong> — a dialog opens. Pick a preset (25%, 50%, 75%, 100%, 200%) or type a custom percentage, then click OK.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Zoom to Selection</strong> — first <em>select the cells</em> you want to fill the screen, then click <span style={{fontWeight:700,color:'var(--green)'}}>View → Zoom to Selection</span>.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Use the Zoom Slider</strong> — drag the slider in the <em>bottom-right corner</em> for instant live zooming. <span className="shortcut">Ctrl + Scroll Wheel</span></div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Reset to 100%</strong> — click the <strong>100%</strong> button in View → Zoom group.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Hold <kbd>Ctrl</kbd> and scroll your mouse wheel — this is the fastest way to zoom in/out without leaving the keyboard.</div>
        </div>
      </div>

      {/* 1.2 SPLIT WINDOWS */}
      <div id="split" className="card">
        <div className="card-hdr"><span className="ico">✂️</span><div><h3>Split Windows</h3><div className="cts">4:07 – 8:57</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>When your spreadsheet has hundreds of rows and you need to compare row 3 with row 300, Split Windows lets you scroll two (or four) panes independently — all within the same sheet.</p></div>

          <div className="mock-label">Visual — Split Spreadsheet View (4 panes)</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">InventoryTracker.xlsx – Excel</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs"><div className="xl-rtab">File</div><div className="xl-rtab">Home</div><div className="xl-rtab act">View</div></div>
            <div className="xl-ribbon">
              <div className="rg"><div className="rg-lbl">Workbook Views</div><div className="rg-inner"><div className="rb">Normal</div></div></div>
              <div className="rdiv"></div>
              <div className="rg hi"><div className="rg-lbl">Window</div><div className="rg-inner"><div className="rb hi">✂️ Split</div><div className="rb">Freeze Panes</div><div className="rb">Arrange All</div></div></div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'auto auto'}}>
              <div style={{borderRight:'3px solid #1565C0',borderBottom:'3px solid #1565C0'}}>
                <table className="xl-tbl"><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
                  <tr><td className="rh">1</td><td className="hdr">Item</td><td className="hdr">Stock</td><td className="hdr">Unit Cost</td></tr>
                  <tr><td className="rh">2</td><td>Widget A</td><td>150</td><td>$4.50</td></tr>
                  <tr><td className="rh">3</td><td>Widget B</td><td>80</td><td>$8.00</td></tr>
                </tbody></table>
              </div>
              <div style={{borderBottom:'3px solid #1565C0'}}>
                <table className="xl-tbl"><thead><tr><th></th><th>D</th><th>E</th><th>F</th></tr></thead><tbody>
                  <tr><td className="rh">1</td><td className="hdr">Supplier</td><td className="hdr">Lead Days</td><td className="hdr">Reorder?</td></tr>
                  <tr><td className="rh">2</td><td>AlphaCo</td><td>7</td><td>No</td></tr>
                  <tr><td className="rh">3</td><td>BetaCo</td><td>14</td><td>Yes</td></tr>
                </tbody></table>
              </div>
              <div style={{borderRight:'3px solid #1565C0'}}>
                <table className="xl-tbl"><tbody>
                  <tr><td className="rh">298</td><td>Widget Z</td><td>22</td><td>$12.00</td></tr>
                  <tr><td className="rh">299</td><td>Widget AA</td><td>5</td><td>$19.99</td></tr>
                  <tr><td className="rh">300</td><td className="sel">Widget AB</td><td className="sel">3</td><td className="sel">$25.00</td></tr>
                </tbody></table>
              </div>
              <div>
                <table className="xl-tbl"><tbody>
                  <tr><td className="rh">298</td><td>Gamma</td><td>10</td><td>No</td></tr>
                  <tr><td className="rh">299</td><td>Delta</td><td>21</td><td>Yes</td></tr>
                  <tr><td className="rh">300</td><td className="sel">Epsilon</td><td className="sel">30</td><td className="sel">⚠️ Yes</td></tr>
                </tbody></table>
              </div>
            </div>
            <div className="xl-status"><span>Row 300 compared with Row 1 in split view</span></div>
          </div>
          <div className="callout">🔵 The <strong>blue bold lines</strong> are the split dividers — drag them to reposition. Each quadrant scrolls independently.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Add Split to Quick Access Toolbar</strong> — Go to <span className="mpath"><span className="ms">File</span><span className="ma">›</span><span className="ms">Options</span><span className="ma">›</span><span className="ms">Quick Access Toolbar</span></span> and search for "Split".</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Position your cursor</strong> — click the cell where you want the split. The split appears above and to the left of this cell.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Click Split</strong> — from QAT or <span className="mpath"><span className="ms">View</span><span className="ma">›</span><span className="ms">Window</span><span className="ma">›</span><span className="ms">Split</span></span>. Four scrollable panes appear.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Drag the split bars</strong> to resize each pane freely.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Remove the split</strong> — click Split again or double-click the divider bar.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Clicking Split while on A1 creates a 2-pane horizontal split only. A cell in column A creates a vertical split only. Any other cell creates all 4 panes.</div>
        </div>
      </div>

      {/* 1.3 FREEZE PANES */}
      <div id="freeze" className="card">
        <div className="card-hdr"><span className="ico">❄️</span><div><h3>Freeze Panes</h3><div className="cts">8:57 – 14:36</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>When scrolling through hundreds of rows, column headers disappear off-screen. Freeze Panes locks your header row (or first column, or both) so they always stay visible — like a permanent anchor.</p></div>

          <div className="mock-label">Visual — Frozen Row &amp; Column (green freeze line)</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">EmployeeData.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs"><div className="xl-rtab">Home</div><div className="xl-rtab act">View</div></div>
            <div className="xl-ribbon">
              <div className="rg hi"><div className="rg-lbl">Window</div><div className="rg-inner"><div className="rb hi">❄️ Freeze Panes ▼</div></div></div>
              <div style={{marginLeft:12,fontSize:11}}>
                <div style={{border:'1px solid #CCC',borderRadius:3,background:'#fff',fontSize:11.5,overflow:'hidden',width:220}}>
                  <div style={{padding:'6px 12px',background:'#E8F5E9',color:'#1B5E20',fontWeight:700,borderBottom:'1px solid #DDD'}}>❄️ Freeze Panes</div>
                  <div style={{padding:'5px 12px',cursor:'pointer',borderBottom:'1px solid #F0F0F0'}}>Freeze Top Row</div>
                  <div style={{padding:'5px 12px',cursor:'pointer',borderBottom:'1px solid #F0F0F0'}}>Freeze First Column</div>
                  <div style={{padding:'5px 12px',cursor:'pointer',background:'#FFF3E0',color:'#BF360C',fontWeight:700}}>Unfreeze Panes</div>
                </div>
              </div>
            </div>
            <div className="xl-fbar"><div className="xl-nb">B5</div><span className="xl-fx">fx</span><div className="xl-formula">Marketing</div></div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="frz hdr">Emp ID</td><td className="frz-row hdr">Department</td><td className="frz-row hdr">Salary</td><td className="frz-row hdr">Start Date</td><td className="frz-row hdr">Status</td></tr>
                  <tr><td className="rh">2</td><td className="frz">E001</td><td>Engineering</td><td>$85,000</td><td>Jan 2021</td><td>Active</td></tr>
                  <tr><td className="rh">3</td><td className="frz">E002</td><td>Finance</td><td>$72,000</td><td>Mar 2020</td><td>Active</td></tr>
                  <tr><td className="rh">4</td><td className="frz">E003</td><td>HR</td><td>$65,000</td><td>Jul 2022</td><td>Leave</td></tr>
                  <tr><td className="rh">5</td><td className="frz">E004</td><td className="act">Marketing</td><td>$78,000</td><td>Nov 2019</td><td>Active</td></tr>
                  <tr><td className="rh">...</td><td className="frz" style={{color:'#AAA'}}>...</td><td style={{color:'#AAA'}}>...</td><td style={{color:'#AAA'}}>...</td><td style={{color:'#AAA'}}>...</td><td style={{color:'#AAA'}}>...</td></tr>
                  <tr><td className="rh">302</td><td className="frz">E301</td><td>Sales</td><td>$91,000</td><td>Feb 2018</td><td>Active</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-status"><span>Scroll down — Row 1 and Column A remain frozen ❄️</span></div>
          </div>
          <div className="callout">❄️ The <strong>thick green borders</strong> on Row 1 and Column A are the freeze lines — everything above/left stays fixed while you scroll.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Decide what to freeze:</strong><br/>— Freeze only top row: no selection needed<br/>— Freeze only first column: no selection needed<br/>— Freeze both: click cell <strong>B2</strong></div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Go to View → Freeze Panes:</strong> <span className="mpath"><span className="ms">View</span><span className="ma">›</span><span className="ms">Window</span><span className="ma">›</span><span className="ms">Freeze Panes</span></span></div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Choose an option:</strong><br/>• <em>Freeze Panes</em> — freezes above and left of selected cell<br/>• <em>Freeze Top Row</em> — locks row 1<br/>• <em>Freeze First Column</em> — locks column A</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Verify</strong> — a dark line appears at the freeze boundary.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Unfreeze</strong> — <span className="mpath"><span className="ms">View</span><span className="ma">›</span><span className="ms">Freeze Panes</span><span className="ma">›</span><span className="ms">Unfreeze Panes</span></span></div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> The most common setup is clicking cell <strong>B2</strong> and using "Freeze Panes" — keeps Row 1 headers AND Column A IDs visible at all times.</div>
        </div>
      </div>

      {/* 1.4 NAMING CELLS */}
      <div id="name" className="card">
        <div className="card-hdr"><span className="ico">🏷️</span><div><h3>Naming Cells &amp; Ranges</h3><div className="cts">14:36 – 20:40</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Instead of writing <code>=B2*C12</code>, name cell C12 "HourlyWage" and write <code>=B2*HourlyWage</code>. Named ranges make formulas self-documenting and easier to audit.</p></div>

          <div className="mock-label">Visual — Name Box in Formula Bar</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">PayrollCalc.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs"><div className="xl-rtab act">Home</div><div className="xl-rtab">Formulas</div></div>
            <div className="xl-fbar">
              <div className="xl-nb hi">HourlyWage</div>
              <span className="xl-fx">fx</span>
              <div className="xl-formula">24.50</div>
            </div>
            <div className="callout" style={{margin:0,borderRadius:0}}>⬆️ The <strong>Name Box</strong> shows "HourlyWage" — cell C2 now has a friendly name.</div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="hdr">Employee</td><td className="hdr">Hours</td><td className="hdr">Hourly Rate</td><td className="hdr">Gross Pay</td></tr>
                  <tr><td className="rh">2</td><td>Alice</td><td>40</td><td className="hi act">$24.50</td><td>=B2*HourlyWage</td></tr>
                  <tr><td className="rh">3</td><td>Bob</td><td>35</td><td></td><td>=B3*HourlyWage</td></tr>
                  <tr><td className="rh">4</td><td>Carol</td><td>45</td><td></td><td>=B4*HourlyWage</td></tr>
                  <tr><td className="rh">5</td><td>Dan</td><td>38</td><td></td><td>=B5*HourlyWage</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-status"><span>Named Range: HourlyWage → $C$2</span></div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Select the cell or range</strong> you want to name (e.g. C2).</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Click the Name Box</strong> — the white box on the left of the formula bar. Click it and the text highlights.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Type your name</strong> — e.g. <code>HourlyWage</code>. Names must start with a letter, no spaces (use underscores).</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Press Enter</strong> — the name is registered. Clicking away without Enter will NOT save it.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Use it in formulas</strong> — type <code>=B2*HourlyWage</code>. Excel auto-suggests names as you type.</div></div>
            <div className="step"><div className="sn">6</div><div className="sc"><strong>Manage all names</strong> — <span className="mpath"><span className="ms">Formulas</span><span className="ma">›</span><span className="ms">Name Manager</span></span> <kbd>Ctrl+F3</kbd></div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Use <span className="mpath"><span className="ms">Formulas</span><span className="ma">›</span><span className="ms">Create from Selection</span></span> to auto-name entire rows/columns from their header text at once.</div>
        </div>
      </div>
    </div>
  );
}
