// 编辑本文件即可替换内容。image 为本地图片路径；source 为原文网址。
window.MAGAZINE = {
  title: '材料新生', subtitle: '从天然结构到循环未来', issue: '01', date: '2026 / 10',
  articles: [
    {page:3, layout:'alternating-media', secondary:{image:'assets/wood-thermal.png',imageAlt:'木质碳海绵复合材料热导率、红外热成像和压缩循环实验图',caption:'图 5 · 隔热与压缩回弹的多方向表现。'}, category:'结构与功能', english:'STRUCTURE & FUNCTION', title:'一块木头的\n三种可能', deck:'让天然的方向感，成为材料设计的参数。', image:'assets/CSxNFv6z0f53abgIuKs6QQ.png', imageAlt:'木质碳海绵与二氧化硅气凝胶复合材料的制备流程及多方向微观结构研究图', caption:'图 1 · 木质碳海绵的制备与结构表征。', institution:'国防科技大学', journal:'Advanced Science', source:'https://mp.weixin.qq.com/s/CSxNFv6z0f53abgIuKs6QQ', doi:'10.1002/advs.77888',
      paragraphs:['轻木保留下来的多级孔道，可以不只是碳材料的“模板”。研究团队通过脱木质素、冻干与碳化获得木质碳海绵，再将 SiO₂ 气凝胶引入层状孔道，构建兼顾微波吸收、弹性回弹和隔热的复合材料。','轴向、径向与切向，为电磁波提供不同的进入和耗散路径。SiO₂ 适度降低碳骨架的导电性，改善阻抗匹配，并增加异质界面的极化损耗。研究中径向更利于宽频吸收，切向则表现出更强的吸收峰。'],
      metrics:[['11.6','GHz','径向有效吸收带宽 · 4.95 mm'],['−64.1','dB','切向最小反射损耗 · 3.15 mm']], takeaway:'从调控化学组成，走向继承天然结构、选择方向与协同功能。'},
    {page:4, layout:'diagram-first', category:'智能设计', english:'INTELLIGENT DESIGN', title:'尾矿的下一站，\n低碳胶凝材料', deck:'把强度、成本和碳排放放进同一个设计问题。', image:'assets/_ncLxFEIt8T2pWfqnjrzqQ.png', imageAlt:'矿山尾矿胶凝材料机器学习预测和多目标优化的研究框架', caption:'图 1 · 数据、模型与多目标配比优化的研究框架。', institution:'University of Alberta', journal:'Cement and Concrete Composites', source:'https://mp.weixin.qq.com/s/_ncLxFEIt8T2pWfqnjrzqQ', doi:'10.1016/j.cemconcomp.2025.106363',
      paragraphs:['矿山尾矿作为辅助胶凝材料，既关乎固废利用，也涉及水泥替代后的强度变化。团队从 25 篇文献中建立数据库，覆盖 11 类尾矿与 14 项输入特征，用 TabPFN 预测胶凝材料的单轴抗压强度。','在研究的测试集上，TabPFN 的 R² 为 0.973，RMSE 为 2.115 MPa。SHAP 分析用于解释养护时间、水含量、水泥与尾矿组成等因素的影响；模型随后与 NSGA-II 联用，寻找强度、成本和碳排放之间的 Pareto 最优配比。'],
      metrics:[['399','组','文献实验数据'],['0.973','R²','测试集预测结果']], takeaway:'模型不仅预测性能，也参与材料配比决策。结果适用性仍需结合数据范围和实验验证。'},
    {page:5, layout:'feature-band', category:'土壤修复', english:'SOIL RESTORATION', title:'让盐碱土\n自己长出矿物', deck:'MgFe 生物炭：脱钠降碱，也让碳走向稳定。', image:'assets/7io2KJ7PxMDHdP4o6wcryQ.png', imageAlt:'镁铁工程化生物炭诱导矿化修复苏打盐碱土的研究图', caption:'图 1 · MgFe 生物炭的结构与原位矿化表征。', institution:'上海交通大学', journal:'Nature Communications', source:'https://mp.weixin.qq.com/s/7io2KJ7PxMDHdP4o6wcryQ',
      paragraphs:['苏打盐碱土的高碱环境，也可以成为材料原位生长的条件。团队构建镁铁工程化生物炭 MgFeBC，诱导 Mg–Fe 层状双金属氢氧化物在土壤中自组装，将活性碳酸盐固定到矿物结构中。','据原文介绍，活性碳酸盐降低 19.8%，Na⁺ 置换能力提高 55.5%，玉米鲜重提高约 2.6 倍。与此同时，颗粒有机碳和矿物结合态有机碳增加，展示出盐碱胁迫缓解与碳稳定化的协同路径。'],
      metrics:[['19.8','%','活性碳酸盐降低'],['55.5','%','Na⁺ 置换能力提高']], takeaway:'让环境条件参与材料形成，将修复与矿化过程连接起来。'},
    {page:6, layout:'lead-side-image', secondary:{image:'assets/adsorption-mechanism.png',imageAlt:'四环素在富钙环糊精改性生物炭上的吸附机制示意图',caption:'图 5 · Ca 配位与 β-CD 包合 / 氢键协同。'}, category:'循环与净化', english:'CIRCULAR MATERIALS', title:'两种农业废物，\n一种净水材料', deck:'废棉秆与废蛋壳，携手捕获四环素。', image:'assets/92Z02TXyEIwMjwn7TZcqcw.png', imageAlt:'富钙环糊精改性生物炭吸附四环素的性能、动力学与循环研究图', caption:'图 1 · 吸附剂性能、动力学与五次循环表现。', institution:'塔里木大学等', journal:'Biochar', source:'https://mp.weixin.qq.com/s/92Z02TXyEIwMjwn7TZcqcw',
      paragraphs:['废棉秆提供碳骨架，废蛋壳提供富钙组分。团队通过 Ca 改性和微波辅助 β-环糊精接枝制备 Ca@CBC/β-CD，将农业废弃物转化为面向四环素污染的吸附材料。','材料的去除作用来自多种相互作用：Ca²⁺ 配位与桥联、β-环糊精的主客体包合，以及氢键协同。研究在 45 ℃ 下报告最大吸附容量为 161.91 mg/g，并结合机器学习、密度泛函理论和生命周期评价，分析预测表现、吸附机制与环境效益。'],
      metrics:[['161.91','mg/g','最大吸附容量 · 45 ℃'],['0.9914','R²','GBDT 模型测试集结果']], takeaway:'从“废物做吸附剂”进一步走向组分、分子识别与环境评价的共同设计。'},
    {page:7, layout:'solar-zones', secondary:{image:'assets/solar-performance.png',imageAlt:'水凝胶光吸收、孔结构、温度及水分蒸发对比实验图',caption:'图 2 · 光吸收、孔结构与蒸发表现。'}, category:'太阳能与水', english:'SOLAR & WATER', title:'让每一束光，\n更靠近一滴水', deck:'生物炭与水凝胶一起，重新组织能量和水。', image:'assets/Htqz9tWGCIWbQJwr1M5sPA.png', imageAlt:'生物炭杂化水凝胶与普通水凝胶的光热增强机制对比研究图', caption:'图 1 · 生物炭杂化水凝胶的光热增强机制。', institution:'哈尔滨工业大学（深圳）', journal:'Biochar', source:'https://mp.weixin.qq.com/s/Htqz9tWGCIWbQJwr1M5sPA', doi:'10.1007/s42773-026-00604-0',
      paragraphs:['高效蒸发不只需要吸光，还要减少热量流失并持续供水。团队将生物炭引入聚两性离子水凝胶，利用多孔碳结构增强光吸收与局域加热，协同调控孔结构和水分输运。','生物炭表面官能团参与水凝胶网络相互作用，改变水分子的氢键状态，促进易蒸发的中间态水形成。原文报告蒸发速率达到 3.57 kg·m⁻²·h⁻¹，接触角由 64.5° 降至 17.9°，呈现光热与非光热路径的协同增强。'],
      metrics:[['3.57','kg·m⁻²·h⁻¹','研究报告的蒸发速率'],['17.9','°','杂化水凝胶接触角']], takeaway:'生物炭从辅助填料，成为调控界面能量与水分状态的功能骨架。'}
  ]
};
