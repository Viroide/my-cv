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
        ['gimp', 40]
  ];

  myCv.competencias2 = [
        ['tareas administrativas', 60], 
        ['facturacion', 60], 
        ['paciencia', 90],
        ['humor', 99],
        ['frikismo', 80],
        ['diseño', 1],
        ['conducir', 75],
        ['linux', 70]
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
    if (window.location.hash!==""){
      myCv.tabChanger(window.location.hash.slice(1));
    }
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
        document.getElementById("content").scrollTop = 0;
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




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibXktY3YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cubXlDdiA9IHdpbmRvdy5teUN2IHx8IHt9O1xuXG4oZnVuY3Rpb24gKG15Q3YpIHtcbiAgbXlDdi5jaGFydHMgPSBbY2hhcnQxPW51bGwsIGNoYXJ0Mj1udWxsXTtcbiAgbXlDdi5jb21wZXRlbmNpYXMgPSBbXG4gICAgICAgIFsnY3NzJywgOTBdLFxuICAgICAgICBbJ2pzJywgOTBdLFxuICAgICAgICBbJ2QzJywgMzVdLFxuICAgICAgICBbJ2dpdCcsIDgwXSxcbiAgICAgICAgWydndWxwJywgODVdLFxuICAgICAgICBbJ2RqYW5nbycsIDc1XSxcbiAgICAgICAgWydweXRob24nLCA3MF0sXG4gICAgICAgIFsnZ2l0JywgODBdLFxuICAgICAgICBbJ2dpbXAnLCA0MF1cbiAgXTtcblxuICBteUN2LmNvbXBldGVuY2lhczIgPSBbXG4gICAgICAgIFsndGFyZWFzIGFkbWluaXN0cmF0aXZhcycsIDYwXSwgXG4gICAgICAgIFsnZmFjdHVyYWNpb24nLCA2MF0sIFxuICAgICAgICBbJ3BhY2llbmNpYScsIDkwXSxcbiAgICAgICAgWydodW1vcicsIDk5XSxcbiAgICAgICAgWydmcmlraXNtbycsIDgwXSxcbiAgICAgICAgWydkaXNlw7FvJywgMV0sXG4gICAgICAgIFsnY29uZHVjaXInLCA3NV0sXG4gICAgICAgIFsnbGludXgnLCA3MF1cbiAgXTtcblxuICBteUN2LmJvb3RzdHJhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBteUN2Lmtub3dsZWRnZUNoYXJ0KFwiI2NoYXJ0XCIsIFtcImh0bWw1XCIsIDEwMF0sIDApO1xuICAgIG15Q3Yua25vd2xlZGdlQ2hhcnQoXCIjY2hhcnQyXCIsIFsnc2NydW0nLCA2MF0sIDEpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCE9PVwiXCIpe1xuICAgICAgbXlDdi50YWJDaGFuZ2VyKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcbiAgICB9XG4gICAgd2luZG93Lm9uaGFzaGNoYW5nZSA9IG15Q3YuaGFzaEV2ZW50SGFuZGxlOyBcbiAgICAvLyByZWNpdm8gZWwgZXZlbnRvIGVuIGVsIGNhbWJpbyBkZSBoYXNoIHBvciBsbyBxdWUgbm8gaGFjZSBmYWx0YSByZWdpc3RyYXIgZWwgZXZlbnRvIGNsaWNrXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItc2VsZWN0b3JcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15Q3YudGFiRXZlbnRIYW5kbGVyKTtcbiAgfTtcbiAgLy8gU2kgY2FtYmlvIGRlIHRhYiBhbCBjYW1iaWFyIGVsIGhhc2ggeWEgbm8gbWUgaGFjZSBmYWx0YSBlc3RlIEV2ZW50SGFuZGxlclxuICAvLyBteUN2LnRhYkV2ZW50SGFuZGxlciA9ZnVuY3Rpb24oZXZlbnQpe1xuICAvLyAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRhYlwiKSApIHtcbiAgLy8gICAgIHZhciBkZXNpcmVUYWJJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0YWJcIik7XG4gIC8vICAgICBteUN2LnRhYkNoYW5nZXIoZGVzaXJlVGFiSWQpO1xuICAvLyAgIH1cbiAgLy8gfTtcbiAgbXlDdi5oYXNoRXZlbnRIYW5kbGUgPSBmdW5jdGlvbigpe1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCE9PVwiXCIpe1xuICAgICAgbXlDdi50YWJDaGFuZ2VyKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcbiAgICB9XG4gIH07XG4gIG15Q3YudGFiQ2hhbmdlciA9IGZ1bmN0aW9uKGRlc2lyZVRhYklkKXtcbiAgICAgICAgdmFyIHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYnNcIikuY2hpbGROb2RlcztcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRhYnMsIGZ1bmN0aW9uKHRhYil7XG4gICAgICAgICAgICB0YWIuY2xhc3NOYW1lID0gJ2hpZGUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRlc2lyZVRhYklkPT09XCJjb25vY2ltaWVudG9zXCIpe1xuICAgICAgICAgIG15Q3YubG9hZENoYXJ0RGF0YShteUN2LmNvbXBldGVuY2lhcywgbXlDdi5jaGFydHNbMF0pOyBcbiAgICAgICAgICBteUN2LmxvYWRDaGFydERhdGEobXlDdi5jb21wZXRlbmNpYXMyLCBteUN2LmNoYXJ0c1sxXSk7IFxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlc2lyZVRhYklkKS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc2Nyb2xsVG9wID0gMDtcbiAgfTtcbiAgbXlDdi5rbm93bGVkZ2VDaGFydCA9IGZ1bmN0aW9uKGlkLCBpbml0aWFsLCBjaGFydE51bSl7XG4gICAgbXlDdi5jaGFydHNbY2hhcnROdW1dID0gYzMuZ2VuZXJhdGUoe1xuICAgICAgICBiaW5kdG86IGlkLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sdW1uczogW2luaXRpYWxdLFxuICAgICAgICAgIHR5cGU6ICdiYXInXG4gICAgICAgIH0sXG4gICAgICAgIGJhcjoge3dpZHRoOiB7cmF0aW86IDAuOSB9fSxcbiAgICAgICAgYXhpczoge1xuICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgcGFkZGluZzoge3RvcDogMCwgYm90dG9tOiAwfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pOyAgICBcbiAgfTtcbiAgbXlDdi5sb2FkQ2hhcnREYXRhID0gZnVuY3Rpb24oY29tcGV0ZW5jaWFzLCBjaGFydCl7XG4gICAgY29tcGV0ZW5jaWFzLm1hcChmdW5jdGlvbihlbGVtLCBpKXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFydC5sb2FkKHtjb2x1bW5zOiBbZWxlbV19KTtcbiAgICAgIH0sIDUwMCppKTtcbiAgICB9KTtcbiAgICBcbiAgfTtcbn0od2luZG93Lm15Q3YpKTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
