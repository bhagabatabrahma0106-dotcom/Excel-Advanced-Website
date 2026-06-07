export default function Section6() {
  return (
    <div id="sec6" className="s6">
      <div className="sec-hdr">
        <div className="sec-num">6</div>
        <div>
          <h2>Documenting &amp; Auditing</h2>
          <div className="ts">1:12:29 – 1:23:35</div>
          <p>Add context to cells and monitor formula values with Comments, Notes, and the Watch Window.</p>
        </div>
      </div>

      {/* 6.1 COMMENTS & NOTES */}
      <div id="comments" className="card">
        <div className="card-hdr"><span className="ico">💬</span><div><h3>Comments &amp; Notes</h3><div className="cts">1:12:29 – 1:19:00</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Excel has two annotation types: <strong>Notes</strong> (the classic yellow sticky — one-way, no reply) and <strong>Comments</strong> (threaded conversations — supports replies, @mentions, and discussion). Use Notes for private reminders, Comments for team collaboration.</p></div>

          <div className="mock-label">Visual — Notes vs Comments Comparison</div>
          <div className="two-col" style={{gap:20,marginBottom:16}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <span className="chip note">📌 NOTE (Legacy)</span>
                <span style={{fontSize:11,color:'var(--muted)'}}>Red triangle indicator</span>
              </div>
              <div className="xl-win">
                <div className="xl-grid">
                  <table className="xl-tbl">
                    <thead><tr><th></th><th>A</th><th>B</th></tr></thead>
                    <tbody>
                      <tr><td className="rh">3</td><td>Q3 Revenue</td><td style={{position:'relative'}}>$45,700 <div className="cm-corner"></div></td></tr>
                      <tr><td className="rh" colSpan={3} style={{padding:0,border:'none'}}>
                        <div className="cm-bubble" style={{margin:'4px 8px'}}>
                          Revised figure — includes October bonus allocation. Check with finance before publishing.
                        </div>
                      </td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{fontSize:11.5,marginTop:8,color:'#555'}}>
                <strong>Insert Note:</strong> Right-click → Insert Note, or <kbd>Shift</kbd>+<kbd>F2</kbd>
              </div>
            </div>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <span className="chip comment">💬 COMMENT (Threaded)</span>
                <span style={{fontSize:11,color:'var(--muted)'}}>Green triangle indicator</span>
              </div>
              <div className="xl-win">
                <div className="xl-grid">
                  <table className="xl-tbl">
                    <thead><tr><th></th><th>A</th><th>B</th></tr></thead>
                    <tbody>
                      <tr><td className="rh">3</td><td>Q3 Revenue</td><td style={{position:'relative'}}>$45,700 <div className="cm-corner-c"></div></td></tr>
                      <tr><td className="rh" colSpan={3} style={{padding:0,border:'none'}}>
                        <div style={{margin:'4px 8px',border:'1px solid #C8E6C9',borderRadius:5,background:'#fff',fontSize:11,overflow:'hidden'}}>
                          <div style={{background:'#E8F5E9',padding:'5px 8px',borderBottom:'1px solid #C8E6C9',fontWeight:700,color:'#1B5E20'}}>💬 Sarah Johnson</div>
                          <div style={{padding:'5px 8px'}}>Can you confirm this includes the bonus?</div>
                          <div style={{padding:'4px 8px',background:'#F9FFF9',borderTop:'1px solid #EEE',color:'#555'}}>↩ Reply... </div>
                          <div style={{padding:'4px 8px',borderTop:'1px solid #EEE',fontSize:10.5}}>
                            <span style={{fontWeight:700,color:'#1565C0'}}>Mark T:</span> Yes, confirmed ✓
                          </div>
                        </div>
                      </td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{fontSize:11.5,marginTop:8,color:'#555'}}>
                <strong>Insert Comment:</strong> Right-click → New Comment, or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd>
              </div>
            </div>
          </div>

          <table className="ov-table" style={{fontSize:12}}>
            <thead><tr><th>Feature</th><th>📌 Note</th><th>💬 Comment</th></tr></thead>
            <tbody>
              <tr><td>Replies</td><td>❌ No</td><td>✅ Yes — threaded</td></tr>
              <tr><td>@Mentions</td><td>❌ No</td><td>✅ Yes — sends email</td></tr>
              <tr><td>Indicator</td><td>🔴 Red triangle</td><td>🟢 Green triangle</td></tr>
              <tr><td>Shows always</td><td>On hover only (default)</td><td>On hover only</td></tr>
              <tr><td>Best for</td><td>Private reminders</td><td>Team collaboration</td></tr>
            </tbody>
          </table>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Insert a Note</strong> — right-click the cell → "New Note" (or Shift+F2). Type your note in the yellow box. Click outside to close. A red triangle marks the cell.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Edit a Note</strong> — right-click the cell → "Edit Note". Or hover over the red triangle to read it.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Insert a Comment</strong> — right-click → "New Comment" (or Ctrl+Alt+M). Type your message, @mention colleagues, and press Ctrl+Enter to post.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Reply to a Comment</strong> — click the green triangle, then click in the "Reply..." box and type. Team members get notified.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Show All Notes</strong> — <span className="mpath"><span className="ms">Review</span><span className="ma">›</span><span className="ms">Notes</span><span className="ma">›</span><span className="ms">Show All Notes</span></span> to keep all notes visible simultaneously.</div></div>
          </div>
        </div>
      </div>

      {/* 6.2 WATCH WINDOW */}
      <div id="watch" className="card">
        <div className="card-hdr"><span className="ico">👁️</span><div><h3>Watch Window</h3><div className="cts">1:19:00 – 1:23:35</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>The Watch Window is a floating panel that shows the current value of key cells — even when those cells are on a different sheet or scrolled out of view. Essential for monitoring KPI totals while editing detail data elsewhere.</p></div>

          <div className="mock-label">Visual — Watch Window Panel</div>
          <div className="watch-win">
            <div className="watch-title">
              <span>👁️ Watch Window</span>
              <div style={{display:'flex',gap:8,fontSize:12}}>
                <span style={{color:'var(--blue)',cursor:'pointer',fontWeight:600}}>+ Add Watch</span>
                <span style={{color:'#E53935',cursor:'pointer'}}>Delete Watch</span>
              </div>
            </div>
            <table className="watch-tb">
              <thead><tr><th>Book</th><th>Sheet</th><th>Name</th><th>Cell</th><th>Value</th><th>Formula</th></tr></thead>
              <tbody>
                <tr className="hi"><td>MasterBudget</td><td>Summary</td><td>AnnualTotal</td><td>B4</td><td style={{fontWeight:700,color:'#1B5E20'}}>$1,842,600</td><td>=SUM(Jan:Dec!B10)</td></tr>
                <tr><td>MasterBudget</td><td>Summary</td><td>—</td><td>B5</td><td>$1,204,300</td><td>=SUM(Jan:Dec!C10)</td></tr>
                <tr><td>MasterBudget</td><td>Summary</td><td>NetProfit</td><td>B6</td><td style={{color:'#1565C0',fontWeight:700}}>$638,300</td><td>=B4-B5</td></tr>
                <tr><td>Q1Sales</td><td>Sheet1</td><td>—</td><td>B12</td><td>$142,500</td><td>=SUM(B2:B11)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="callout" style={{marginTop:12}}>👁️ <strong>Highlighted row</strong> is the currently selected watched cell. Values update live as you edit the spreadsheet — even across sheets.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Open Watch Window</strong>: <span className="mpath"><span className="ms">Formulas</span><span className="ma">›</span><span className="ms">Formula Auditing</span><span className="ma">›</span><span className="ms">Watch Window</span></span></div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Add a cell to watch</strong> — navigate to the cell you want to monitor, then click "Add Watch" in the Watch Window panel. Click Add in the dialog.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Navigate to a watched cell</strong> — double-click any entry in the Watch Window to jump to that cell instantly, regardless of which sheet it's on.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Remove a watch</strong> — select the entry and click "Delete Watch".</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Dock the panel</strong> — drag the Watch Window to the top or bottom of the screen so it stays visible while you work.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Add your final summary totals (Grand Total, Profit %, etc.) to the Watch Window before doing a bulk data edit — you can instantly see the impact of every change in real-time.</div>
        </div>
      </div>
    </div>
  );
}
