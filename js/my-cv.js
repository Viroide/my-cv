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




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibXktY3YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cubXlDdiA9IHdpbmRvdy5teUN2IHx8IHt9O1xuXG4oZnVuY3Rpb24gKG15Q3YpIHtcbiAgbXlDdi5jaGFydHMgPSBbY2hhcnQxPW51bGwsIGNoYXJ0Mj1udWxsXTtcbiAgbXlDdi5jb21wZXRlbmNpYXMgPSBbXG4gICAgICAgIFsnY3NzJywgOTBdLFxuICAgICAgICBbJ2pzJywgOTBdLFxuICAgICAgICBbJ2QzJywgMzVdLFxuICAgICAgICBbJ2dpdCcsIDgwXSxcbiAgICAgICAgWydndWxwJywgODVdLFxuICAgICAgICBbJ2RqYW5nbycsIDc1XSxcbiAgICAgICAgWydweXRob24nLCA3MF0sXG4gICAgICAgIFsnZ2l0JywgODBdLFxuICAgICAgICBbJ2dpbXAnLCA0MF0sXG4gICAgICAgIFsnbGludXgnLCA3MF0sXG4gIF07XG5cbiAgbXlDdi5jb21wZXRlbmNpYXMyID0gW1xuICAgICAgICBbJ3ZlbnRhcycsIDEwXSwgXG4gICAgICAgIFsnZmFjdHVyYWNpb24nLCA2MF0sIFxuICAgICAgICBbJ3BhY2llbmNpYScsIDkwXSxcbiAgICAgICAgWydodW1vcicsIDk5XSxcbiAgICAgICAgWydmcmlraXNtbycsIDgwXSxcbiAgICAgICAgWydkaXNlw7FvJywgMjBdLFxuICAgICAgICBbJ2NvbmR1Y2lyJywgNzVdXG4gIF07XG5cbiAgbXlDdi5ib290c3RyYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgbXlDdi5rbm93bGVkZ2VDaGFydChcIiNjaGFydFwiLCBbXCJodG1sNVwiLCAxMDBdLCAwKTtcbiAgICBteUN2Lmtub3dsZWRnZUNoYXJ0KFwiI2NoYXJ0MlwiLCBbJ3NjcnVtJywgNjBdLCAxKTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ghPT1cIlwiKXtcbiAgICAgIG15Q3YudGFiQ2hhbmdlcih3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBteUN2Lmhhc2hFdmVudEhhbmRsZTsgXG4gICAgLy8gcmVjaXZvIGVsIGV2ZW50byBlbiBlbCBjYW1iaW8gZGUgaGFzaCBwb3IgbG8gcXVlIG5vIGhhY2UgZmFsdGEgcmVnaXN0cmFyIGVsIGV2ZW50byBjbGlja1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLXNlbGVjdG9yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUN2LnRhYkV2ZW50SGFuZGxlcik7XG4gIH07XG4gIC8vIFNpIGNhbWJpbyBkZSB0YWIgYWwgY2FtYmlhciBlbCBoYXNoIHlhIG5vIG1lIGhhY2UgZmFsdGEgZXN0ZSBFdmVudEhhbmRsZXJcbiAgLy8gbXlDdi50YWJFdmVudEhhbmRsZXIgPWZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0YWJcIikgKSB7XG4gIC8vICAgICB2YXIgZGVzaXJlVGFiSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGFiXCIpO1xuICAvLyAgICAgbXlDdi50YWJDaGFuZ2VyKGRlc2lyZVRhYklkKTtcbiAgLy8gICB9XG4gIC8vIH07XG4gIG15Q3YuaGFzaEV2ZW50SGFuZGxlID0gZnVuY3Rpb24oKXtcbiAgICBteUN2LnRhYkNoYW5nZXIod2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICB9O1xuICBteUN2LnRhYkNoYW5nZXIgPSBmdW5jdGlvbihkZXNpcmVUYWJJZCl7XG4gICAgICAgIHZhciB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJzXCIpLmNoaWxkTm9kZXM7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWJzLCBmdW5jdGlvbih0YWIpe1xuICAgICAgICAgICAgdGFiLmNsYXNzTmFtZSA9ICdoaWRlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZXNpcmVUYWJJZD09PVwiY29ub2NpbWllbnRvc1wiKXtcbiAgICAgICAgICBteUN2LmxvYWRDaGFydERhdGEobXlDdi5jb21wZXRlbmNpYXMsIG15Q3YuY2hhcnRzWzBdKTsgXG4gICAgICAgICAgbXlDdi5sb2FkQ2hhcnREYXRhKG15Q3YuY29tcGV0ZW5jaWFzMiwgbXlDdi5jaGFydHNbMV0pOyBcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZXNpcmVUYWJJZCkuY2xhc3NOYW1lID0gXCJcIjtcbiAgfTtcbiAgbXlDdi5rbm93bGVkZ2VDaGFydCA9IGZ1bmN0aW9uKGlkLCBpbml0aWFsLCBjaGFydE51bSl7XG4gICAgbXlDdi5jaGFydHNbY2hhcnROdW1dID0gYzMuZ2VuZXJhdGUoe1xuICAgICAgICBiaW5kdG86IGlkLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sdW1uczogW2luaXRpYWxdLFxuICAgICAgICAgIHR5cGU6ICdiYXInXG4gICAgICAgIH0sXG4gICAgICAgIGJhcjoge3dpZHRoOiB7cmF0aW86IDAuOSB9fSxcbiAgICAgICAgYXhpczoge1xuICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgcGFkZGluZzoge3RvcDogMCwgYm90dG9tOiAwfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyAgICBcbiAgfTtcbiAgbXlDdi5sb2FkQ2hhcnREYXRhID0gZnVuY3Rpb24oY29tcGV0ZW5jaWFzLCBjaGFydCl7XG4gICAgY29tcGV0ZW5jaWFzLm1hcChmdW5jdGlvbihlbGVtLCBpKXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFydC5sb2FkKHtjb2x1bW5zOiBbZWxlbV19KTtcbiAgICAgIH0sIDUwMCppKTtcbiAgICB9KTtcbiAgICBcbiAgfTtcbn0od2luZG93Lm15Q3YpKTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
