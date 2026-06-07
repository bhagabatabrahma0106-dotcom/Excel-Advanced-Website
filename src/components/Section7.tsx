export default function Section7() {
  return (
    <div id="sec7" className="s7">
      <div className="sec-hdr">
        <div className="sec-num">7</div>
        <div>
          <h2>Advanced Printing</h2>
          <div className="ts">1:23:35 – 1:29:56</div>
          <p>Control exactly how your spreadsheet prints — from margins and page breaks to printing formulas instead of values.</p>
        </div>
      </div>

      {/* 7.1 PAGE LAYOUT */}
      <div id="pagelayout" className="card">
        <div className="card-hdr"><span className="ico">🖨️</span><div><h3>Page Layout &amp; Print Settings</h3><div className="cts">1:23:35 – 1:27:30</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Control orientation, margins, print area, headers/footers, and scaling so your spreadsheet prints cleanly on the exact number of pages you want — no cut-off columns, no blank pages.</p></div>

          <div className="mock-label">Visual — Page Layout Ribbon &amp; Print Preview</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">QuarterlyReport.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs">
              <div className="xl-rtab">Home</div>
              <div className="xl-rtab act">Page Layout</div>
              <div className="xl-rtab">View</div>
            </div>
            <div className="xl-ribbon">
              <div className="rg hi"><div className="rg-lbl">Page Setup</div><div className="rg-inner">
                <div className="rb hi">📐 Margins ▼</div>
                <div className="rb hi">📄 Orientation ▼</div>
                <div className="rb hi">📏 Size ▼</div>
                <div className="rb">🖨️ Print Area ▼</div>
                <div className="rb">📎 Breaks ▼</div>
              </div></div>
              <div className="rdiv"></div>
              <div className="rg"><div className="rg-lbl">Scale to Fit</div><div className="rg-inner">
                <div className="rb">Width: 1 page</div>
                <div className="rb">Height: Auto</div>
                <div className="rb">Scale: 100%</div>
              </div></div>
              <div className="rdiv"></div>
              <div className="rg"><div className="rg-lbl">Sheet Options</div><div className="rg-inner">
                <div className="rb">Gridlines</div>
                <div className="rb">Headings</div>
              </div></div>
            </div>
            <div style={{padding:16,background:'#7a7a7a',display:'flex',gap:16,justifyContent:'center'}}>
              <div>
                <div style={{fontSize:10,color:'#ddd',textAlign:'center',marginBottom:6}}>LANDSCAPE (current)</div>
                <div className="page-prev" style={{width:130,height:95}}>
                  <div className="page-margin">
                    {Array.from({length:8}).map((_,i) => <div key={i} className={`page-line${i%3===0?' sh':i%2===0?' md':''}`}></div>)}
                  </div>
                </div>
              </div>
              <div>
                <div style={{fontSize:10,color:'#ddd',textAlign:'center',marginBottom:6}}>PORTRAIT (option)</div>
                <div className="page-prev">
                  <div className="page-margin">
                    {Array.from({length:10}).map((_,i) => <div key={i} className={`page-line${i%3===0?' sh':i%2===0?' md':''}`}></div>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-status"><span>Page Layout View — blue dashed lines are page breaks</span></div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Switch to Page Layout View</strong>: <span className="mpath"><span className="ms">View</span><span className="ma">›</span><span className="ms">Page Layout</span></span> to see exactly how each page will print with rulers and margins visible.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Set Orientation</strong>: <span className="mpath"><span className="ms">Page Layout</span><span className="ma">›</span><span className="ms">Orientation</span></span> → Portrait or Landscape. Use Landscape for wide tables.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Set Margins</strong>: <span className="mpath"><span className="ms">Page Layout</span><span className="ma">›</span><span className="ms">Margins</span></span> → Normal, Narrow, or Custom. Narrow margins fit more data per page.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Set Print Area</strong> — select the cells you want to print, then <span className="mpath"><span className="ms">Page Layout</span><span className="ma">›</span><span className="ms">Print Area</span><span className="ma">›</span><span className="ms">Set Print Area</span></span>. Only that range will print.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Fit to pages</strong>: In Scale to Fit group, set Width = "1 page" to force all columns onto one page width. Height = Auto lets rows flow naturally.</div></div>
            <div className="step"><div className="sn">6</div><div className="sc"><strong>Print Row/Column Titles</strong>: <span className="mpath"><span className="ms">Page Layout</span><span className="ma">›</span><span className="ms">Page Setup</span><span className="ma">›</span><span className="ms">Print Titles</span></span> — set "Rows to repeat at top" (e.g. $1:$1) so headers print on every page.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> In Page Break Preview (<span className="mpath"><span className="ms">View</span><span className="ma">›</span><span className="ms">Page Break Preview</span></span>), you can drag the blue dashed lines to manually reposition page breaks — very useful for keeping logical groups together.</div>
        </div>
      </div>

      {/* 7.2 PRINT FORMULAS */}
      <div id="printformulas" className="card">
        <div className="card-hdr"><span className="ico">🔤</span><div><h3>Printing Formulas Instead of Values</h3><div className="cts">1:27:30 – 1:29:56</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>When auditing or documenting a spreadsheet for review, you need to print the actual formulas in cells rather than their calculated results. This shows exactly how calculations work — great for academic submissions or compliance audits.</p></div>

          <div className="mock-label">Visual — Normal View vs Formula View</div>
          <div className="two-col">
            <div>
              <div style={{fontSize:11,fontWeight:700,color:'var(--muted)',marginBottom:6}}>Normal View (Values)</div>
              <div className="xl-win">
                <div className="xl-grid">
                  <table className="xl-tbl">
                    <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                    <tbody>
                      <tr><td className="rh">1</td><td className="hdr">Item</td><td className="hdr">Qty</td><td className="hdr">Total</td></tr>
                      <tr><td className="rh">2</td><td>Widget A</td><td>10</td><td>$450</td></tr>
                      <tr><td className="rh">3</td><td>Widget B</td><td>5</td><td>$200</td></tr>
                      <tr><td className="rh">4</td><td><b>Grand Total</b></td><td></td><td><b>$650</b></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div style={{fontSize:11,fontWeight:700,color:'var(--orange)',marginBottom:6}}>Formula View (Formulas shown)</div>
              <div className="xl-win" style={{borderColor:'#FF9800'}}>
                <div className="xl-grid">
                  <table className="xl-tbl">
                    <thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead>
                    <tbody>
                      <tr><td className="rh">1</td><td className="hdr">Item</td><td className="hdr">Qty</td><td className="hdr">Total</td></tr>
                      <tr><td className="rh">2</td><td>Widget A</td><td>10</td><td style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#0D47A1'}}>=B2*45</td></tr>
                      <tr><td className="rh">3</td><td>Widget B</td><td>5</td><td style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#0D47A1'}}>=B3*40</td></tr>
                      <tr><td className="rh">4</td><td><b>Grand Total</b></td><td></td><td style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#1B5E20',fontWeight:700}}>=SUM(C2:C3)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Show formulas in all cells</strong> — press <kbd>Ctrl</kbd>+<kbd>`</kbd> (the backtick key, top-left of keyboard). All formulas become visible. Press again to revert.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Alternatively via ribbon</strong>: <span className="mpath"><span className="ms">Formulas</span><span className="ma">›</span><span className="ms">Formula Auditing</span><span className="ma">›</span><span className="ms">Show Formulas</span></span></div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Note: columns auto-widen</strong> — when formulas show, Excel automatically widens columns to fit formula text. Your layout will look different but is printable.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Set print options</strong>: <span className="mpath"><span className="ms">Page Layout</span><span className="ma">›</span><span className="ms">Sheet Options</span></span> → tick "Print Gridlines" and "Print Headings" so row/column references are visible when printed.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Print or export</strong> — use <kbd>Ctrl</kbd>+<kbd>P</kbd> to print, or File → Export → PDF. Toggle formulas OFF with <kbd>Ctrl</kbd>+<kbd>`</kbd> when done.</div></div>
          </div>
          <div className="warn">⚠️ <strong>Remember:</strong> Don't forget to press <kbd>Ctrl</kbd>+<kbd>`</kbd> again after printing to switch back to normal value view. Saving with formulas shown can confuse other users.</div>
        </div>
      </div>
    </div>
  );
}
