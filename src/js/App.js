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
                      '#172F3D', '#51ABB4', '#FBF7D7', '#BD4958', '#FF8A51' ]
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



