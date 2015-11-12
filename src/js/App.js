window.myCv = window.myCv || {};

(function (myCv) {
  myCv.chart = null;
  myCv.chart2 = null;

  myCv.bootstrap = function () {
    document.getElementById("tab-selector").addEventListener("click", myCv.tabChanger);
    // document.getElementById("historial").addEventListener("click", myCv.nodoExpander);
    myCv.knowledgeChart();
    myCv.knowledgeChart2();
  };

  myCv.tabChanger = function(event){
    if (event.target !== event.currentTarget && event.target.getAttribute("tab") ) {
        var desireTabId = event.target.getAttribute("tab");
        var tabs = document.getElementById("tabs").childNodes;
        Array.prototype.map.call(tabs, function(tab){
            tab.className = 'hide';
        });
        if (desireTabId==="tab3"){
          myCv.loadChartData(); 
          myCv.loadChartData2();
        }
        document.getElementById(desireTabId).className = "";

    }
  };
  // myCv.nodoExpander = function (event){
  //   if (event.target !== event.currentTarget 
  //   && event.target.className == "fa fa-circle-o" ) {
  //     var nodoToExpand = event.target.parentNode.parentNode;
  //     nodoToExpand.getElementsByClassName("nodo-texto")[0].className="nodo-texto";
  //   }
  // };
  myCv.knowledgeChart = function(id){
    myCv.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [['html5', 100],],
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
  myCv.knowledgeChart2 = function(id){
    myCv.chart2 = c3.generate({
        bindto: '#chart2',
        data: {
          columns: [
            ['scrum', 90],
          ],
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
  myCv.loadChartData = function(){
    setTimeout(function () {
      myCv.chart.load({columns: [['css', 90]]});
    }, 0);
    setTimeout(function () {
          myCv.chart.load({columns: [['js', 90]]});
    }, 500);
    setTimeout(function () {
      myCv.chart.load({columns: [['d3', 50],]});
    }, 1000);
    setTimeout(function () {
      myCv.chart.load({columns: [['git', 80]]});
    }, 1500);
    setTimeout(function () {
      myCv.chart.load({columns: [['gulp', 85],]});
    }, 2000);
    setTimeout(function () {
      myCv.chart.load({columns: [['django', 95],]});
    }, 2500);
    setTimeout(function () {
      myCv.chart.load({columns: [['python', 85],]});
    }, 3000);
    setTimeout(function () {
      myCv.chart.load({columns: [['git', 80],]});
    }, 3500);
    setTimeout(function () {
      myCv.chart.load({columns: [['gimp', 40],]});
    }, 3750);
  };
  myCv.loadChartData2 = function(){
    setTimeout(function () {
      myCv.chart2.load({columns: [['ventas', 10]]});
    }, 0);
    setTimeout(function () {
          myCv.chart2.load({columns: [['facturacion', 60]]});
    }, 500);
    setTimeout(function () {
      myCv.chart2.load({columns: [['paciendia', 100],]});
    }, 1000);
    setTimeout(function () {
      myCv.chart2.load({columns: [['humor', 100]]});
    }, 1500);
    setTimeout(function () {
      myCv.chart2.load({columns: [['frikismo', 100],]});
    }, 2000);
    setTimeout(function () {
      myCv.chart2.load({columns: [['diseño', 20],]});
    }, 2500);
    setTimeout(function () {
      myCv.chart2.load({columns: [['conducir', 75],]});
    }, 3000);
  };
}(window.myCv));



