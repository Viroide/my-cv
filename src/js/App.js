window.myCv = window.myCv || {};

(function (myCv) {
  myCv.charts = [chart1=null, chart2=null];
  myCv.competencias = [
        ['css', 90],
        ['js', 90],
        ['d3', 35],
        ['git', 80],
        ['gulp', 85],
        ['django', 75],
        ['python', 70],
        ['git', 80],
        ['gimp', 40],
        ['linux', 70],
  ];

  myCv.competencias2 = [
        ['ventas', 10], 
        ['facturacion', 60], 
        ['paciencia', 90],
        ['humor', 99],
        ['frikismo', 80],
        ['diseño', 20],
        ['conducir', 75]
  ];

  myCv.bootstrap = function () {
    myCv.knowledgeChart("#chart", ["html5", 100], 0);
    myCv.knowledgeChart("#chart2", ['scrum', 60], 1);
    if (window.location.hash!==""){
      myCv.tabChanger(window.location.hash.slice(1));
    }
    window.onhashchange = myCv.hashEventHandle; 
    // recivo el evento en el cambio de hash por lo que no hace falta registrar el evento click
    // document.getElementById("tab-selector").addEventListener("click", myCv.tabEventHandler);
  };
  // Si cambio de tab al cambiar el hash ya no me hace falta este EventHandler
  // myCv.tabEventHandler =function(event){
  //   if (event.target !== event.currentTarget && event.target.getAttribute("tab") ) {
  //     var desireTabId = event.target.getAttribute("tab");
  //     myCv.tabChanger(desireTabId);
  //   }
  // };
  myCv.hashEventHandle = function(){
    myCv.tabChanger(window.location.hash.slice(1));
  };
  myCv.tabChanger = function(desireTabId){
        var tabs = document.getElementById("tabs").childNodes;
        Array.prototype.map.call(tabs, function(tab){
            tab.className = 'hide';
        });
        if (desireTabId==="conocimientos"){
          myCv.loadChartData(myCv.competencias, myCv.charts[0]); 
          myCv.loadChartData(myCv.competencias2, myCv.charts[1]); 
        }
        document.getElementById(desireTabId).className = "";
  };
  myCv.knowledgeChart = function(id, initial, chartNum){
    myCv.charts[chartNum] = c3.generate({
        bindto: id,
        data: {
          columns: [initial],
          type: 'bar'
        },
        bar: {width: {ratio: 0.9 }},
        axis: {
          y: {
            max: 100,
            padding: {top: 0, bottom: 0}
          }
        }
    });    
  };
  myCv.loadChartData = function(competencias, chart){
    competencias.map(function(elem, i){
      setTimeout(function () {
        chart.load({columns: [elem]});
      }, 500*i);
    });
    
  };
}(window.myCv));



