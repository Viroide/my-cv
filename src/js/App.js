window.myCv = window.myCv || {};

(function (myCv) {
  myCv.chart = null;

  myCv.bootstrap = function () {
    document.getElementById("tab-selector").addEventListener("click", myCv.tabChanger);
    myCv.knowledgeChart();
  };

  myCv.tabChanger = function(event){
    if (event.target !== event.currentTarget && event.target.getAttribute("tab") ) {
        var desireTab = event.target.getAttribute("tab");
        var tabs = document.getElementById("tabs").childNodes;
        Array.prototype.map.call(tabs, function(tab){
            tab.className = 'hide';
        });
        if (desireTab==="tab3"){
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['css', 90]
                    ]
                });
            }, 0);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['js', 90]
                    ]
                });
            }, 500);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['d3', 50],
                    ]
                });
            }, 1000);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['git', 80]
                    ]
                });
            }, 1500);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['gulp', 85],
                    ]
                });
            }, 2000);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['django', 95],
                    ]
                });
            }, 2500);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['python', 85],
                    ]
                });
            }, 3000);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['git', 80],
                    ]
                });
            }, 3500);
          setTimeout(function () {
                myCv.chart.load({
                    columns: [
                        ['gimp', 40],
                    ]
                });
            }, 3750);
        }
        document.getElementById(desireTab).className = "";

    }
  };
  myCv.knowledgeChart = function(){
    myCv.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['html5', 100],
          ],
          type: 'bar'
        },
        bar: {
          width: {
              ratio: 0.9 // this makes bar width 50% of length between ticks
          }
        },
        axis: {
          y: {
            max: 100,
             padding: {
                top: 0,
                bottom: 0
              }
          }
        }
    });

    
  };
}(window.myCv));



