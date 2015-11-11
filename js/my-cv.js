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




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJteS1jdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5teUN2ID0gd2luZG93Lm15Q3YgfHwge307XG5cbihmdW5jdGlvbiAobXlDdikge1xuICBteUN2LmNoYXJ0ID0gbnVsbDtcblxuICBteUN2LmJvb3RzdHJhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1zZWxlY3RvclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlDdi50YWJDaGFuZ2VyKTtcbiAgICBteUN2Lmtub3dsZWRnZUNoYXJ0KCk7XG4gIH07XG5cbiAgbXlDdi50YWJDaGFuZ2VyID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRhYlwiKSApIHtcbiAgICAgICAgdmFyIGRlc2lyZVRhYiA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0YWJcIik7XG4gICAgICAgIHZhciB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJzXCIpLmNoaWxkTm9kZXM7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWJzLCBmdW5jdGlvbih0YWIpe1xuICAgICAgICAgICAgdGFiLmNsYXNzTmFtZSA9ICdoaWRlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZXNpcmVUYWI9PT1cInRhYjNcIil7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlDdi5jaGFydC5sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydjc3MnLCA5MF1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlDdi5jaGFydC5sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydqcycsIDkwXVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG15Q3YuY2hhcnQubG9hZCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZDMnLCA1MF0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG15Q3YuY2hhcnQubG9hZCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2l0JywgODBdXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG15Q3YuY2hhcnQubG9hZCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZ3VscCcsIDg1XSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlDdi5jaGFydC5sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydkamFuZ28nLCA5NV0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG15Q3YuY2hhcnQubG9hZCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsncHl0aG9uJywgODVdLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBteUN2LmNoYXJ0LmxvYWQoe1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2dpdCcsIDgwXSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMzUwMCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlDdi5jaGFydC5sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgWydnaW1wJywgNDBdLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzNzUwKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZXNpcmVUYWIpLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICB9XG4gIH07XG4gIG15Q3Yua25vd2xlZGdlQ2hhcnQgPSBmdW5jdGlvbigpe1xuICAgIG15Q3YuY2hhcnQgPSBjMy5nZW5lcmF0ZSh7XG4gICAgICAgIGJpbmR0bzogJyNjaGFydCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICBbJ2h0bWw1JywgMTAwXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6ICdiYXInXG4gICAgICAgIH0sXG4gICAgICAgIGJhcjoge1xuICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgIHJhdGlvOiAwLjkgLy8gdGhpcyBtYWtlcyBiYXIgd2lkdGggNTAlIG9mIGxlbmd0aCBiZXR3ZWVuIHRpY2tzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBheGlzOiB7XG4gICAgICAgICAgeToge1xuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gIH07XG59KHdpbmRvdy5teUN2KSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
