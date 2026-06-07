export default function Section4() {
  return (
    <div id="sec4" className="s4">
      <div className="sec-hdr">
        <div className="sec-num">4</div>
        <div>
          <h2>Advanced Chart Skills</h2>
          <div className="ts">41:44 – 56:33</div>
          <p>Customise charts to professional standards and add visual impact with SmartArt and WordArt.</p>
        </div>
      </div>

      {/* 4.1 CHART CUSTOMISATION */}
      <div id="chartcust" className="card">
        <div className="card-hdr"><span className="ico">📊</span><div><h3>Chart Customisation</h3><div className="cts">41:44 – 52:00</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>A default Excel chart is functional but plain. Customisation lets you match your brand colours, add data labels, change chart types, add trend lines, and make charts presentation-ready in minutes.</p></div>

          <div className="mock-label">Visual — Chart with Design Tools Active</div>
          <div className="xl-win">
            <div className="xl-title"><span>🟢</span><span className="fname">SalesReport.xlsx – Chart Tools</span><div className="wctrl"><span></span><span></span><span></span></div></div>
            <div className="xl-rtabs">
              <div className="xl-rtab">Home</div><div className="xl-rtab">Insert</div>
              <div className="xl-rtab act" style={{color:'var(--purple)',borderTopColor:'var(--purple)'}}>Chart Design</div>
              <div className="xl-rtab" style={{color:'var(--purple)'}}>Format</div>
            </div>
            <div className="xl-ribbon">
              <div className="rg hi"><div className="rg-lbl">Type</div><div className="rg-inner"><div className="rb hi">Change Chart Type</div></div></div>
              <div className="rdiv"></div>
              <div className="rg"><div className="rg-lbl">Data</div><div className="rg-inner"><div className="rb">Select Data</div><div className="rb">Switch Row/Col</div></div></div>
              <div className="rdiv"></div>
              <div className="rg hi"><div className="rg-lbl">Chart Layouts</div><div className="rg-inner"><div className="rb hi">Add Chart Element ▼</div><div className="rb">Quick Layout</div></div></div>
              <div className="rdiv"></div>
              <div className="rg"><div className="rg-lbl">Chart Styles</div><div className="rg-inner">
                {[1,2,3,4,5].map(i => <div key={i} className="rb" style={{padding:'3px 6px',background:i===2?'#D5E8D4':'#F5F5F5'}}>{i===2?'✓':''} Style {i}</div>)}
              </div></div>
            </div>
            <div style={{padding:16,background:'#F9F9F9'}}>
              <div className="chart-mock">
                <div className="chart-ttl">📊 Quarterly Sales by Region</div>
                <div className="chart-area">
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className="c-bar" style={{height:72,background:'#1D6F42',width:24}}></div>
                    <div className="c-bar-lbl">North</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className="c-bar" style={{height:58,background:'#1565C0',width:24}}></div>
                    <div className="c-bar-lbl">South</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className="c-bar" style={{height:82,background:'#E65100',width:24}}></div>
                    <div className="c-bar-lbl">East</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className="c-bar" style={{height:45,background:'#6A1B9A',width:24}}></div>
                    <div className="c-bar-lbl">West</div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="cl-item"><div className="cl-dot" style={{background:'#1D6F42'}}></div>Q1</div>
                  <div className="cl-item"><div className="cl-dot" style={{background:'#1565C0'}}></div>Q2</div>
                  <div className="cl-item"><div className="cl-dot" style={{background:'#E65100'}}></div>Q3</div>
                  <div className="cl-item"><div className="cl-dot" style={{background:'#6A1B9A'}}></div>Q4</div>
                </div>
              </div>
            </div>
            <div className="xl-status"><span>Chart selected — Chart Design and Format tabs available</span></div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 Step-by-Step Instructions</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Select your data range</strong> including headers, then go to <span className="mpath"><span className="ms">Insert</span><span className="ma">›</span><span className="ms">Charts</span></span> and pick a chart type.</div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Click the chart</strong> — the "Chart Design" and "Format" tabs appear in the ribbon.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Change Chart Type</strong> — click "Change Chart Type" to switch between Bar, Line, Pie, etc. without recreating.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Add Chart Elements</strong> — "Add Chart Element" button lets you add/remove: axis titles, data labels, gridlines, legend, trendlines.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Apply a Chart Style</strong> — click a style from the gallery to instantly change color palette and layout.</div></div>
            <div className="step"><div className="sn">6</div><div className="sc"><strong>Format individual parts</strong> — double-click any chart element (bar, axis, title) to open the Format pane on the right.</div></div>
          </div>
          <div className="tip">💡 <strong>Pro Tip:</strong> Right-click any data series → "Add Trendline" to add linear, exponential, or polynomial trend overlays to your chart.</div>
        </div>
      </div>

      {/* 4.2 SMARTART / WORDART */}
      <div id="smartart" className="card">
        <div className="card-hdr"><span className="ico">🎨</span><div><h3>SmartArt &amp; WordArt</h3><div className="cts">52:00 – 56:33</div></div></div>
        <div className="card-body">
          <div className="uc"><div className="uc-title">📌 When &amp; Why to Use</div><p>SmartArt turns plain text into professional process diagrams, org charts, or cycle diagrams. WordArt adds styled decorative text for headings and titles — both are great for making reports visually appealing.</p></div>

          <div className="mock-label">Visual — SmartArt Gallery</div>
          <div className="dialog" style={{maxWidth:460}}>
            <div className="dlg-title"><span>Choose a SmartArt Graphic</span><span className="dlg-close">✕</span></div>
            <div className="dlg-body">
              <div style={{display:'flex',gap:12}}>
                <div style={{display:'flex',flexDirection:'column',gap:2,width:100,fontSize:11}}>
                  {['All','List','Process','Cycle','Hierarchy','Relationship','Matrix','Pyramid','Picture'].map((c,i) => (
                    <div key={c} style={{padding:'3px 8px',background:i===2?'#E3F2FD':'transparent',color:i===2?'#0D47A1':'#555',borderRadius:3,cursor:'pointer',fontWeight:i===2?700:400}}>{c}</div>
                  ))}
                </div>
                <div style={{flex:1}}>
                  <div className="sa-gallery">
                    {[
                      {shape:'→→→',label:'Basic Process'},
                      {shape:'⬡⬡⬡',label:'Hexagon'},
                      {shape:'↻↻',label:'Cycle'},
                      {shape:'▽▽▽',label:'Funnel'},
                    ].map(s => (
                      <div key={s.label} className={`sa-item${s.label==='Basic Process'?' sel':''}`}>
                        <div className="sa-prev" style={{fontSize:14,gap:2}}>{s.shape}</div>
                        <div className="sa-lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:10,background:'#E3F2FD',border:'1px solid #BBDEFB',borderRadius:3,padding:8,fontSize:11}}>
                    <strong>Basic Process</strong>
                    <p style={{marginTop:3,color:'#555'}}>Use to show a progression or sequential steps in a task, process, or workflow.</p>
                  </div>
                </div>
              </div>
              <div className="dlg-btns"><button className="btn-cancel">Cancel</button><button className="btn-ok">OK</button></div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="steps-section">
            <h4>📋 SmartArt Steps</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Insert SmartArt</strong>: <span className="mpath"><span className="ms">Insert</span><span className="ma">›</span><span className="ms">Illustrations</span><span className="ma">›</span><span className="ms">SmartArt</span></span></div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Choose a category</strong> (Process, Cycle, Hierarchy, etc.) and pick a style, then click OK.</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Edit text</strong> — click the text pane on the left side or click directly on each shape to type your content.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Add/remove shapes</strong> — click a shape and press <kbd>Enter</kbd> to add a sibling, or use the SmartArt Design tab.</div></div>
            <div className="step"><div className="sn">5</div><div className="sc"><strong>Change colours</strong> — "Change Colors" in the SmartArt Design tab applies theme color sets instantly.</div></div>
          </div>
          <div className="steps-section" style={{marginTop:16}}>
            <h4>🎨 WordArt Steps</h4>
            <div className="step"><div className="sn">1</div><div className="sc"><strong>Insert WordArt</strong>: <span className="mpath"><span className="ms">Insert</span><span className="ma">›</span><span className="ms">Text</span><span className="ma">›</span><span className="ms">WordArt</span></span></div></div>
            <div className="step"><div className="sn">2</div><div className="sc"><strong>Pick a style</strong> from the gallery (fill colour, outline, glow, shadow options).</div></div>
            <div className="step"><div className="sn">3</div><div className="sc"><strong>Type your text</strong> and resize the text box as needed.</div></div>
            <div className="step"><div className="sn">4</div><div className="sc"><strong>Apply effects</strong> — use Shape Format tab → Text Effects for 3D rotation, shadow, reflection, etc.</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
