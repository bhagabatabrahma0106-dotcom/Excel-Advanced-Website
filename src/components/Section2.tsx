export default function Section2() {
  return (
    <div id="sec2" className="s2">
      <div className="sec-hdr">
        <div className="sec-num">2</div>
        <div>
          <h2>Working with Multiple Worksheets</h2>
          <div className="ts">20:40 – 33:22</div>
          <p>Manage complex workbooks — edit many sheets at once, pull data between files, and build master summary sheets.</p>
        </div>
      </div>

      {/* 2.1 EDITING MULTIPLE SHEETS */}
      <div id="multiedit" className="card">
        <div className="card-hdr"><span className="ico">📑</span><div><h3>Editing Multiple Sheets Simultaneously</h3><div className="cts">21:23 – 27:54</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>You have 12 monthly sheets and need to add a "Total" row to all of them. Select all sheet tabs first — any change you make applies to every selected sheet at once.</p></div>

          <div className="mock-label">Visual — Selected Sheet Tabs (Ctrl+Click for non-adjacent)</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">AnnualReport.xlsx – [Group]</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-fbar"><div className="xl-nb">A1</div><span className="xl-fx">fx</span><div className="xl-formula">Monthly Revenue Report</div></div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="hi" colSpan={3}>Monthly Revenue Report</td></tr>
                  <tr><td className="rh">2</td><td className="hdr">Product</td><td className="hdr">Units</td><td className="hdr">Revenue</td></tr>
                  <tr><td className="rh">3</td><td>Product X</td><td>120</td><td>$6,000</td></tr>
                  <tr><td className="rh">4</td><td>Product Y</td><td>85</td><td>$4,250</td></tr>
                  <tr><td className="rh">5</td><td><b>TOTAL</b></td><td>=SUM(B3:B4)</td><td>=SUM(C3:C4)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-stabs">
              <div className="xl-stab sel">Jan</div>
              <div className="xl-stab">Feb</div>
              <div className="xl-stab">Mar</div>
              <div className="xl-stab sel">Apr</div>
              <div className="xl-stab">May</div>
              <div className="xl-stab sel">Jun</div>
              <div className="xl-stab add">⊕</div>
            </div>
            <div className="xl-status"><span>[Group] — Jan, Apr, Jun selected. Changes apply to all.</span></div>
          </div>
          <div className="callout">📑 <strong>Green tabs</strong> (Jan, Apr, Jun) are the grouped sheets. The title bar shows <strong>[Group]</strong>. Edits apply to ALL selected sheets.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Select adjacent sheets</strong> — click the first tab, hold <kbd>Shift</kbd>, click the last tab. All tabs between are selected.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Select non-adjacent sheets</strong> — hold <kbd>Ctrl</kbd> and click each individual tab you want.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Make your changes</strong> — type data, apply formatting, write formulas. The title bar shows "[Group]" to remind you.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Ungroup sheets</strong> — click any unselected tab, or right-click any tab and choose "Ungroup Sheets".</div></div>
          </div>
          <div className="warn">⚠️ <strong>Caution:</strong> If you delete data while in Group mode, it deletes from ALL grouped sheets. Always ungroup when done editing.</div>
        </div>
      </div>

      {/* 2.2 LINK WORKBOOKS */}
      <div id="link" className="card">
        <div className="card-hdr"><span className="ico">🔗</span><div><h3>Linking Workbooks</h3><div className="cts">27:54 – 30:15</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Pull a value from a completely separate Excel file into your current workbook. When the source file updates, your linked cell automatically reflects the new value — no copy-pasting needed.</p></div>

          <div className="mock-label">Visual — Cross-Workbook Formula</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">MasterBudget.xlsx – Excel</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-fbar">
              <div className="xl-nb">B3</div><span className="xl-fx">fx</span>
              <div className="xl-formula hi">=[Q1Sales.xlsx]Sheet1!$B$12</div>
            </div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="hdr" colSpan={3}>Master Budget Summary</td></tr>
                  <tr><td className="rh">2</td><td className="hdr">Source</td><td className="hdr">Value</td><td className="hdr">Note</td></tr>
                  <tr><td className="rh">3</td><td>Q1 Sales Total</td><td className="act" style={{color:'#1565C0',fontWeight:700}}>$142,500</td><td className="lnk">From Q1Sales.xlsx</td></tr>
                  <tr><td className="rh">4</td><td>Q2 Sales Total</td><td style={{color:'#1565C0',fontWeight:700}}>$168,200</td><td className="lnk">From Q2Sales.xlsx</td></tr>
                  <tr><td className="rh">5</td><td><b>Combined Total</b></td><td><b>=B3+B4</b></td><td></td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-status"><span>External links active — update when source files change</span></div>
          </div>
          <div className="callout">🔗 The formula <code>=[Q1Sales.xlsx]Sheet1!$B$12</code> pulls data directly from another workbook file.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Open both workbooks</strong> — open the source file and the destination file in Excel simultaneously.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>In the destination file</strong>, click the cell where you want the linked value to appear.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Type = then switch to the source file</strong> — press <kbd>=</kbd>, then click the source workbook in the taskbar.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Click the source cell</strong> — click the exact cell you want to reference. Excel automatically writes the full path formula.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Press Enter</strong> — the linked value appears. When the source file is closed, the formula shows the full file path.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Use <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">Edit Links</span></span> to see all external links in your workbook and update or break them.</div>
        </div>
      </div>

      {/* 2.3 SUMMARY WORKSHEETS */}
      <div id="summary" className="card">
        <div className="card-hdr"><span className="ico">📋</span><div><h3>Creating Summary Worksheets</h3><div className="cts">30:15 – 33:22</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>A Summary sheet consolidates key figures from multiple sheets. Use 3D references like <code>=SUM(Jan:Dec!B10)</code> to sum the same cell across all month sheets automatically.</p></div>

          <div className="mock-label">Visual — 3D Reference Across Sheets</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">AnnualReport.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-fbar">
              <div className="xl-nb">B4</div><span className="xl-fx">fx</span>
              <div className="xl-formula hi">=SUM(Jan:Dec!B10)</div>
            </div>
            <div className="xl-grid">
              <table className="xl-tbl">
                <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                <tbody>
                  <tr><td className="rh">1</td><td className="hdr" colSpan={3}>Annual Summary</td></tr>
                  <tr><td className="rh">3</td><td className="hdr">Metric</td><td className="hdr">Annual Total</td><td className="hdr">Monthly Avg</td></tr>
                  <tr><td className="rh">4</td><td>Total Revenue</td><td className="act" style={{color:'#1B5E20',fontWeight:700}}>$1,842,600</td><td>$153,550</td></tr>
                  <tr><td className="rh">5</td><td>Total Units Sold</td><td>24,810</td><td>2,067</td></tr>
                  <tr><td className="rh">6</td><td>Total Expenses</td><td>$1,204,300</td><td>$100,358</td></tr>
                </tbody>
              </table>
            </div>
            <div className="xl-stabs">
              <div className="xl-stab sel">Summary</div>
              <div className="xl-stab">Jan</div>
              <div className="xl-stab">Feb</div>
              <div className="xl-stab">Mar</div>
              <div className="xl-stab">...</div>
              <div className="xl-stab">Dec</div>
            </div>
            <div className="xl-status"><span>3D formula spans Jan through Dec sheets</span></div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Ensure consistent layout</strong> — all source sheets must have data in the same cell positions (e.g. Total in B10 on every sheet).</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Create a Summary sheet</strong> — add a new sheet tab and name it "Summary".</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Write a 3D formula</strong> — type <code>=SUM(</code>, click the first sheet tab (Jan), hold <kbd>Shift</kbd>, click the last sheet (Dec), then click the cell (B10), close with <code>)</code> and press Enter.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>The formula reads:</strong> <code>=SUM(Jan:Dec!B10)</code> — Excel sums that cell across every sheet between Jan and Dec.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Works with AVERAGE, COUNT, MAX, MIN too — just replace SUM with any aggregate function.</div>
        </div>
      </div>
    </div>
  );
}
