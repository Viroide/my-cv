window.myCv = window.myCv || {};

(function (myCv) {
  myCv.charts = [chart1=null, chart2=null];
  myCv.competencias = [
        ["html5", 100],
        ['css', 90],
        ['js', 90],
        ['d3', 35],
        ['git', 80],
        ['gulp', 85],
        ['django', 75],
        ['python', 70],
        ['gimp', 40]
  ];

  myCv.subCompetencias = {
      html5: [['html5', 90], ['jade', 90], ['xhtml4.1', 75]],
      css: [['css vanilla', 90], ['stylus', 75], ['Saas', 50]],
      js: [['js vanilla', 70], ['jQuery', 90], ['react', 35]],
      d3: [['pure d3', 20], ['d3 +c3', 75]],
      git: [['git del dia a dia', 80], ['git rebase', 60], ['github', 75],   ["Gitlab", 80]],
      gulp: [['gulp', 85], ['grunt', 85], ['webapp', 40]],
      django: [['programar en django', 75], ['configurar apache2/unicorn', 40]],
      python: [['python 2.7', 80], ['python 3.0', 10]],
      gimp: [['abrir PSD y etraer imagenes', 80], ["edicion de fotos", 15]]
  };

  myCv.competenciasTransversales = [
        ['scrum', 65],
        ['tareas administrativas', 60], 
        ['paciencia', 90],
        ['humor', 99],
        ['frikismo', 80],
        ['diseño', 1],
        ['conducir', 75],
        ['linux', 70]
  ];
  
  // Funcion de entrada de la app, creamos los listeners los chart iniciales y poco mas. 
  myCv.bootstrap = function () {
    myCv.knowledgeChart("#chart", ["html5", 100], 0);
    myCv.knowledgeChart("#chart2", ['scrum', 65], 1);
    if (window.location.hash!==""){
      myCv.tabChanger(window.location.hash.slice(1));
    }
    window.onhashchange = myCv.hashEventHandle; 
    Array.prototype.forEach.call(document.getElementsByClassName("nodo-historia"), function(elem){
      elem.addEventListener("click", myCv.nodoClickEventHandler);
    });
    document.getElementById("back").addEventListener("click", myCv.reloadChartInitialData);
  };

  // Si cambio de tab al cambiar el hash ya no me hace falta este EventHandler
  // myCv.tabEventHandler =function(event){
  //   if (event.target !== event.currentTarget && event.target.getAttribute("tab") ) {
  //     var desireTabId = event.target.getAttribute("tab");
  //     myCv.tabChanger(desireTabId);
  //   }
  // };

  //  para ver los detalles de cada nodo del historial
  myCv.nodoClickEventHandler = function(event){
    Array.prototype.forEach.call(document.getElementsByClassName("nodo-historia"), function(elem){
      elem.className = "nodo-historia";
    });
    event.currentTarget.className = "nodo-historia selected";
  };  

  // Evento de cambio de hash (#ancla)
  myCv.hashEventHandle = function(){
    if (window.location.hash!==""){
      myCv.tabChanger(window.location.hash.slice(1));
    }
  };

  // cambiar de tab y lanzar el load de las graficas si corresponde
  myCv.tabChanger = function(desireTabId){
        var tabs = document.getElementById("tabs").childNodes;
        Array.prototype.map.call(tabs, function(tab){
            tab.className = 'hide';
        });
        if (desireTabId==="conocimientos"){
          myCv.loadChartData(myCv.competencias, myCv.charts[0]); 
          myCv.loadChartData(myCv.competenciasTransversales, myCv.charts[1]); 
        }
        document.getElementById(desireTabId).className = "";
        document.getElementById("content").scrollTop = 0;
  };

  // Crear el/los charts iniciales con su conf
  myCv.knowledgeChart = function(id, initial, chartNum){
    myCv.charts[chartNum] = c3.generate({
        bindto: id,
        data: {
          columns: [initial],
          type: 'bar',
          onclick: myCv.loadSubcompetencias
        },
        bar: {width: {ratio: 0.9 }},
        axis: {
          y: {
            max: 100,
            padding: {top: 0, bottom: 0}
          }
        },
        color: {
            pattern: ['#F8555E', '#4C6A8D', '#0C9DA9', '#FBC38D', '#F14440', 
                      '#172F3D', '#51ABB4', '#FBF7D7', '#FF8A51', '#BD4958']
        }
    });    
  };

  // Cargar los datos cada 500ms en el chart que toque.
  myCv.loadChartData = function(competencias, chart){
    competencias.map(function(elem, i){
      setTimeout(function () {
        chart.load({columns: [elem]});
      }, 500*i);
    });
    
  };

  // recargar los datos iniciales en el chart de competencias1 
  myCv.reloadChartInitialData = function(){
    myCv.charts[0].load({
          columns: myCv.competencias,
          unload: myCv.charts[0].columns
        });
    document.getElementById("back").className = "hide";
  };

  // Cargar los datos de cada subCompentecia
  myCv.loadSubcompetencias = function (d, element) { 
      if (myCv.subCompetencias[d.id]){
        myCv.charts[0].load({
          columns: myCv.subCompetencias[d.id],
          unload: myCv.charts[0].columns
        });
        document.getElementById("back").className = " ";
      }

  };
}(window.myCv));




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJteS1jdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5teUN2ID0gd2luZG93Lm15Q3YgfHwge307XG5cbihmdW5jdGlvbiAobXlDdikge1xuICBteUN2LmNoYXJ0cyA9IFtjaGFydDE9bnVsbCwgY2hhcnQyPW51bGxdO1xuICBteUN2LmNvbXBldGVuY2lhcyA9IFtcbiAgICAgICAgW1wiaHRtbDVcIiwgMTAwXSxcbiAgICAgICAgWydjc3MnLCA5MF0sXG4gICAgICAgIFsnanMnLCA5MF0sXG4gICAgICAgIFsnZDMnLCAzNV0sXG4gICAgICAgIFsnZ2l0JywgODBdLFxuICAgICAgICBbJ2d1bHAnLCA4NV0sXG4gICAgICAgIFsnZGphbmdvJywgNzVdLFxuICAgICAgICBbJ3B5dGhvbicsIDcwXSxcbiAgICAgICAgWydnaW1wJywgNDBdXG4gIF07XG5cbiAgbXlDdi5zdWJDb21wZXRlbmNpYXMgPSB7XG4gICAgICBodG1sNTogW1snaHRtbDUnLCA5MF0sIFsnamFkZScsIDkwXSwgWyd4aHRtbDQuMScsIDc1XV0sXG4gICAgICBjc3M6IFtbJ2NzcyB2YW5pbGxhJywgOTBdLCBbJ3N0eWx1cycsIDc1XSwgWydTYWFzJywgNTBdXSxcbiAgICAgIGpzOiBbWydqcyB2YW5pbGxhJywgNzBdLCBbJ2pRdWVyeScsIDkwXSwgWydyZWFjdCcsIDM1XV0sXG4gICAgICBkMzogW1sncHVyZSBkMycsIDIwXSwgWydkMyArYzMnLCA3NV1dLFxuICAgICAgZ2l0OiBbWydnaXQgZGVsIGRpYSBhIGRpYScsIDgwXSwgWydnaXQgcmViYXNlJywgNjBdLCBbJ2dpdGh1YicsIDc1XSwgICBbXCJHaXRsYWJcIiwgODBdXSxcbiAgICAgIGd1bHA6IFtbJ2d1bHAnLCA4NV0sIFsnZ3J1bnQnLCA4NV0sIFsnd2ViYXBwJywgNDBdXSxcbiAgICAgIGRqYW5nbzogW1sncHJvZ3JhbWFyIGVuIGRqYW5nbycsIDc1XSwgWydjb25maWd1cmFyIGFwYWNoZTIvdW5pY29ybicsIDQwXV0sXG4gICAgICBweXRob246IFtbJ3B5dGhvbiAyLjcnLCA4MF0sIFsncHl0aG9uIDMuMCcsIDEwXV0sXG4gICAgICBnaW1wOiBbWydhYnJpciBQU0QgeSBldHJhZXIgaW1hZ2VuZXMnLCA4MF0sIFtcImVkaWNpb24gZGUgZm90b3NcIiwgMTVdXVxuICB9O1xuXG4gIG15Q3YuY29tcGV0ZW5jaWFzVHJhbnN2ZXJzYWxlcyA9IFtcbiAgICAgICAgWydzY3J1bScsIDY1XSxcbiAgICAgICAgWyd0YXJlYXMgYWRtaW5pc3RyYXRpdmFzJywgNjBdLCBcbiAgICAgICAgWydwYWNpZW5jaWEnLCA5MF0sXG4gICAgICAgIFsnaHVtb3InLCA5OV0sXG4gICAgICAgIFsnZnJpa2lzbW8nLCA4MF0sXG4gICAgICAgIFsnZGlzZcOxbycsIDFdLFxuICAgICAgICBbJ2NvbmR1Y2lyJywgNzVdLFxuICAgICAgICBbJ2xpbnV4JywgNzBdXG4gIF07XG4gIFxuICAvLyBGdW5jaW9uIGRlIGVudHJhZGEgZGUgbGEgYXBwLCBjcmVhbW9zIGxvcyBsaXN0ZW5lcnMgbG9zIGNoYXJ0IGluaWNpYWxlcyB5IHBvY28gbWFzLiBcbiAgbXlDdi5ib290c3RyYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgbXlDdi5rbm93bGVkZ2VDaGFydChcIiNjaGFydFwiLCBbXCJodG1sNVwiLCAxMDBdLCAwKTtcbiAgICBteUN2Lmtub3dsZWRnZUNoYXJ0KFwiI2NoYXJ0MlwiLCBbJ3NjcnVtJywgNjVdLCAxKTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ghPT1cIlwiKXtcbiAgICAgIG15Q3YudGFiQ2hhbmdlcih3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG4gICAgfVxuICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBteUN2Lmhhc2hFdmVudEhhbmRsZTsgXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibm9kby1oaXN0b3JpYVwiKSwgZnVuY3Rpb24oZWxlbSl7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUN2Lm5vZG9DbGlja0V2ZW50SGFuZGxlcik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUN2LnJlbG9hZENoYXJ0SW5pdGlhbERhdGEpO1xuICB9O1xuXG4gIC8vIFNpIGNhbWJpbyBkZSB0YWIgYWwgY2FtYmlhciBlbCBoYXNoIHlhIG5vIG1lIGhhY2UgZmFsdGEgZXN0ZSBFdmVudEhhbmRsZXJcbiAgLy8gbXlDdi50YWJFdmVudEhhbmRsZXIgPWZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0YWJcIikgKSB7XG4gIC8vICAgICB2YXIgZGVzaXJlVGFiSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGFiXCIpO1xuICAvLyAgICAgbXlDdi50YWJDaGFuZ2VyKGRlc2lyZVRhYklkKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgLy8gIHBhcmEgdmVyIGxvcyBkZXRhbGxlcyBkZSBjYWRhIG5vZG8gZGVsIGhpc3RvcmlhbFxuICBteUN2Lm5vZG9DbGlja0V2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJub2RvLWhpc3RvcmlhXCIpLCBmdW5jdGlvbihlbGVtKXtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gXCJub2RvLWhpc3RvcmlhXCI7XG4gICAgfSk7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgPSBcIm5vZG8taGlzdG9yaWEgc2VsZWN0ZWRcIjtcbiAgfTsgIFxuXG4gIC8vIEV2ZW50byBkZSBjYW1iaW8gZGUgaGFzaCAoI2FuY2xhKVxuICBteUN2Lmhhc2hFdmVudEhhbmRsZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoIT09XCJcIil7XG4gICAgICBteUN2LnRhYkNoYW5nZXIod2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBjYW1iaWFyIGRlIHRhYiB5IGxhbnphciBlbCBsb2FkIGRlIGxhcyBncmFmaWNhcyBzaSBjb3JyZXNwb25kZVxuICBteUN2LnRhYkNoYW5nZXIgPSBmdW5jdGlvbihkZXNpcmVUYWJJZCl7XG4gICAgICAgIHZhciB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJzXCIpLmNoaWxkTm9kZXM7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0YWJzLCBmdW5jdGlvbih0YWIpe1xuICAgICAgICAgICAgdGFiLmNsYXNzTmFtZSA9ICdoaWRlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZXNpcmVUYWJJZD09PVwiY29ub2NpbWllbnRvc1wiKXtcbiAgICAgICAgICBteUN2LmxvYWRDaGFydERhdGEobXlDdi5jb21wZXRlbmNpYXMsIG15Q3YuY2hhcnRzWzBdKTsgXG4gICAgICAgICAgbXlDdi5sb2FkQ2hhcnREYXRhKG15Q3YuY29tcGV0ZW5jaWFzVHJhbnN2ZXJzYWxlcywgbXlDdi5jaGFydHNbMV0pOyBcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZXNpcmVUYWJJZCkuY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgLy8gQ3JlYXIgZWwvbG9zIGNoYXJ0cyBpbmljaWFsZXMgY29uIHN1IGNvbmZcbiAgbXlDdi5rbm93bGVkZ2VDaGFydCA9IGZ1bmN0aW9uKGlkLCBpbml0aWFsLCBjaGFydE51bSl7XG4gICAgbXlDdi5jaGFydHNbY2hhcnROdW1dID0gYzMuZ2VuZXJhdGUoe1xuICAgICAgICBiaW5kdG86IGlkLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sdW1uczogW2luaXRpYWxdLFxuICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgIG9uY2xpY2s6IG15Q3YubG9hZFN1YmNvbXBldGVuY2lhc1xuICAgICAgICB9LFxuICAgICAgICBiYXI6IHt3aWR0aDoge3JhdGlvOiAwLjkgfX0sXG4gICAgICAgIGF4aXM6IHtcbiAgICAgICAgICB5OiB7XG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IHt0b3A6IDAsIGJvdHRvbTogMH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiBbJyNGODU1NUUnLCAnIzRDNkE4RCcsICcjMEM5REE5JywgJyNGQkMzOEQnLCAnI0YxNDQ0MCcsIFxuICAgICAgICAgICAgICAgICAgICAgICcjMTcyRjNEJywgJyM1MUFCQjQnLCAnI0ZCRjdENycsICcjRkY4QTUxJywgJyNCRDQ5NTgnXVxuICAgICAgICB9XG4gICAgfSk7ICAgIFxuICB9O1xuXG4gIC8vIENhcmdhciBsb3MgZGF0b3MgY2FkYSA1MDBtcyBlbiBlbCBjaGFydCBxdWUgdG9xdWUuXG4gIG15Q3YubG9hZENoYXJ0RGF0YSA9IGZ1bmN0aW9uKGNvbXBldGVuY2lhcywgY2hhcnQpe1xuICAgIGNvbXBldGVuY2lhcy5tYXAoZnVuY3Rpb24oZWxlbSwgaSl7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhcnQubG9hZCh7Y29sdW1uczogW2VsZW1dfSk7XG4gICAgICB9LCA1MDAqaSk7XG4gICAgfSk7XG4gICAgXG4gIH07XG5cbiAgLy8gcmVjYXJnYXIgbG9zIGRhdG9zIGluaWNpYWxlcyBlbiBlbCBjaGFydCBkZSBjb21wZXRlbmNpYXMxIFxuICBteUN2LnJlbG9hZENoYXJ0SW5pdGlhbERhdGEgPSBmdW5jdGlvbigpe1xuICAgIG15Q3YuY2hhcnRzWzBdLmxvYWQoe1xuICAgICAgICAgIGNvbHVtbnM6IG15Q3YuY29tcGV0ZW5jaWFzLFxuICAgICAgICAgIHVubG9hZDogbXlDdi5jaGFydHNbMF0uY29sdW1uc1xuICAgICAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIikuY2xhc3NOYW1lID0gXCJoaWRlXCI7XG4gIH07XG5cbiAgLy8gQ2FyZ2FyIGxvcyBkYXRvcyBkZSBjYWRhIHN1YkNvbXBlbnRlY2lhXG4gIG15Q3YubG9hZFN1YmNvbXBldGVuY2lhcyA9IGZ1bmN0aW9uIChkLCBlbGVtZW50KSB7IFxuICAgICAgaWYgKG15Q3Yuc3ViQ29tcGV0ZW5jaWFzW2QuaWRdKXtcbiAgICAgICAgbXlDdi5jaGFydHNbMF0ubG9hZCh7XG4gICAgICAgICAgY29sdW1uczogbXlDdi5zdWJDb21wZXRlbmNpYXNbZC5pZF0sXG4gICAgICAgICAgdW5sb2FkOiBteUN2LmNoYXJ0c1swXS5jb2x1bW5zXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIikuY2xhc3NOYW1lID0gXCIgXCI7XG4gICAgICB9XG5cbiAgfTtcbn0od2luZG93Lm15Q3YpKTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
