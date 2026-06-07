export default function Section5() {
  return (
    <div id="sec5" className="s5">
      <div className="sec-hdr">
        <div className="sec-num">5</div>
        <div>
          <h2>Data Lists</h2>
          <div className="ts">56:33 – 1:12:29</div>
          <p>Work efficiently with large lists using Data Forms for data entry, and Sort &amp; Filter for data exploration.</p>
        </div>
      </div>

      {/* 5.1 DATA FORMS */}
      <div id="forms" className="card">
        <div className="card-hdr"><span className="ico">📝</span><div><h3>Data Forms</h3><div className="cts">56:33 – 1:04:00</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Data Forms provide a simple form-based interface for entering, viewing, editing, and deleting records in a list — without needing to scroll horizontally across many columns. Ideal for wide data tables with 10+ columns.</p></div>

          <div className="mock-label">Visual — Data Form Dialog</div>
          <div className="form-dlg" style={{margin:'0 auto'}}>
            <div className="form-title"><span>EmployeeData.xlsx</span><span style={{color:'#AAA'}}>✕</span></div>
            <div className="form-body">
              <div className="form-fields">
                {[
                  {label:'Emp ID:', value:'E005', isNew:false},
                  {label:'Full Name:', value:'Emma Wilson', isNew:true},
                  {label:'Department:', value:'Marketing', isNew:true},
                  {label:'Salary:', value:'$82,000', isNew:false},
                  {label:'Start Date:', value:'2023-02-14', isNew:false},
                  {label:'Status:', value:'Active', isNew:false},
                ].map(f => (
                  <div key={f.label} className="form-row">
                    <label>{f.label}</label>
                    <input defaultValue={f.value} className={f.isNew ? 'new-val' : ''} />
                  </div>
                ))}
                <div style={{fontSize:10,color:'#999',marginTop:4}}>Record: 5 of 304</div>
              </div>
              <div className="form-actions">
                <div className="fa-btn ok">New</div>
                <div className="fa-btn">Delete</div>
                <div className="fa-btn">Restore</div>
                <div className="fa-btn" style={{marginTop:6}}>Find Prev</div>
                <div className="fa-btn">Find Next</div>
                <div className="fa-btn" style={{marginTop:6}}>Criteria</div>
                <div className="fa-btn">Close</div>
              </div>
            </div>
          </div>
          <div className="callout" style={{marginTop:12}}>📝 <strong>Green-highlighted fields</strong> show the new values being entered. The form shows one record at a time — use Find Prev/Next to navigate.</div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Add Form to Quick Access Toolbar</strong> — File → Options → Quick Access Toolbar → find "Form..." in All Commands → Add. (It's not on the ribbon by default.)</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Click inside your data table</strong> — ensure your list has headers in row 1 and no blank rows.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Click the Form button</strong> in your QAT — the Data Form dialog opens automatically populated with column names.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Navigate records</strong> — use Find Next/Find Prev buttons or press <kbd>↑</kbd>/<kbd>↓</kbd> to move between records.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Add new record</strong> — click "New", fill in the fields, then press Enter or click New again to save and move to next.</div></div>
            <div className="step"><div className="sn">6</div><div className="sc"><strong>Search with Criteria</strong> — click "Criteria", type a search value in any field (e.g. "Marketing" in Department), then Find Next to jump to matching records.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Press <kbd>Tab</kbd> to move between fields, <kbd>Enter</kbd> to confirm and advance to next record. Much faster than editing cells directly in wide tables.</div>
        </div>
      </div>

      {/* 5.2 SORT & FILTER */}
      <div id="sortfilter" className="card">
        <div className="card-hdr"><span className="ico">🔽</span><div><h3>Sort &amp; Filter</h3><div className="cts">1:04:00 – 1:12:29</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>Sort organises your data by one or multiple columns (e.g. by Department, then by Salary). AutoFilter adds dropdown arrows to headers, letting you instantly show/hide rows based on values, text, numbers, or date criteria.</p></div>

          <div className="mock-label">Visual — AutoFilter Dropdown</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">EmployeeList.xlsx</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs"><div className="xl-rtab">Home</div><div className="xl-rtab act">Data</div></div>
            <div className="xl-ribbon">
              <div className="rg hi"><div className="rg-lbl">Sort &amp; Filter</div><div className="rg-inner">
                <div className="rb">↑↓ Sort A→Z</div>
                <div className="rb">↓↑ Sort Z→A</div>
                <div className="rb hi">⚙️ Sort…</div>
                <div className="rb hi">🔽 Filter</div>
              </div></div>
            </div>
            <div style={{position:'relative',display:'flex',gap:16,alignItems:'flex-start',padding:'0 8px 8px'}}>
              <div className="xl-grid" style={{flex:1}}>
                <table className="xl-tbl">
                  <thead>
                    <tr>
                      <th></th>
                      <th>A <span style={{fontSize:9}}>▼</span></th>
                      <th style={{background:'#FFF9C4',borderColor:'#FF9800'}}>B <span style={{fontSize:9,color:'#E65100'}}>▼</span></th>
                      <th>C <span style={{fontSize:9}}>▼</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="rh">1</td><td className="hdr">Name</td><td className="hdr" style={{background:'#FFF9C4'}}>Department</td><td className="hdr">Salary</td></tr>
                    <tr><td className="rh">2</td><td>Alice</td><td style={{background:'#E8F5E9'}}>Engineering</td><td>$85,000</td></tr>
                    <tr><td className="rh">5</td><td>Eve</td><td style={{background:'#E8F5E9'}}>Engineering</td><td>$91,000</td></tr>
                    <tr><td className="rh">9</td><td>Ivan</td><td style={{background:'#E8F5E9'}}>Engineering</td><td>$78,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="flt-drop" style={{minWidth:160}}>
                <div className="flt-hdr">Department ▼</div>
                <div className="flt-search"><input placeholder="Search…" /></div>
                <div className="flt-item"><div className="chk on">✓</div>(Select All)</div>
                <div className="flt-item sel"><div className="chk on">✓</div>Engineering</div>
                <div className="flt-item"><div className="chk"></div>Finance</div>
                <div className="flt-item"><div className="chk"></div>HR</div>
                <div className="flt-item"><div className="chk"></div>Marketing</div>
                <div className="flt-item"><div className="chk"></div>Sales</div>
                <div className="flt-btns"><button className="btn-ok" style={{padding:'3px 8px',fontSize:11}}>OK</button><button className="btn-cancel" style={{padding:'3px 8px',fontSize:11}}>Cancel</button></div>
              </div>
            </div>
            <div className="xl-status"><span>3 of 304 records shown — Department = "Engineering"</span></div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step — AutoFilter</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Click inside your data table</strong>, then go to <span className="mpath"><span className="ms">Data</span><span className="ma">›</span><span className="ms">Sort &amp; Filter</span><span className="ma">›</span><span className="ms">Filter</span></span> (or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>). Drop-down arrows appear on headers.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Click a header dropdown</strong> — uncheck values to hide those rows, or use "Text Filters" / "Number Filters" for conditions like "greater than", "contains", etc.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Multiple filters</strong> — filter different columns to AND them together (only rows matching all criteria are shown).</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Clear a filter</strong> — click the column's dropdown → "Clear Filter From [Column]".</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Remove all filters</strong> — click Filter button again to toggle AutoFilter off and show all rows.</div></div>
          </div>
          <div className="steps-section" style={{marginTop:16}}>
            <h4>📋 Step-by-Step — Multi-Level Sort</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Go to Data → Sort</strong> (the advanced dialog, not A→Z button).</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Set Sort by</strong> — choose your primary column (e.g. Department) and order (A to Z).</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Add Level</strong> — click "Add Level" to add a secondary sort (e.g. then by Salary, Largest to Smallest).</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>My data has headers</strong> — ensure this checkbox is ticked so row 1 is treated as a header and not sorted.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Click OK</strong> — data sorts by Department first, and within each department, by Salary descending.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> You can sort by Cell Color or Font Color — useful if you've colour-coded rows to mark priorities or categories.</div>
        </div>
      </div>
    </div>
  );
}
