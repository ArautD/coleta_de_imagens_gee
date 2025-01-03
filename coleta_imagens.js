//Tempo Desejado
var dataInicio = '2013-01-01'
var dataFim = '2023-12-31'

var geometry = /* color: #d63000 */ee.Geometry.LineString(
        [[-42.81416659825316, -2.5438671219823052],
         [-42.7777743863391, -2.5493548610266057],
         [-42.7612948941516, -2.5445530906409437],
         [-42.74691825383177, -2.563331340586756],
         [-42.73773437016478, -2.5671898510388753],
         [-42.72988094560987, -2.5718200053598084],
         [-42.71803622715941, -2.577136179771035],
         [-42.6976085165595, -2.5800515770948693],
         [-42.68954043858519, -2.586739457911745],
         [-42.67477756016722, -2.595313751954582],
         [-42.656238131456284, -2.6131480970398124]]);


var imageVisParam2 = {"opacity":1, "bands": ["B6","B5","B4"], "min": 129, "max": 202, "gama": 1};

var region_target = geometry.buffer(2500)
Map.addLayer(region_target)
Map.centerObject(region_target)

var s = 1
var rand = ee.FeatureCollection.randomPoints(region_target, 1, s*10);//s*10 é o seed randomico
Map.addLayer(rand,{},"Random Point"+s,false)

// create square tile for vizualization
var tileName = "tile_"+s
var sq = ee.Feature(rand.first()).geometry().buffer(3000, 0.5).bounds()
Map.addLayer(sq,{},tileName,false)


for(var i = 1; i <= 12; i++){
  var mes = '0'+i 
  if((i == 10) || (i == 11) || (i == 12 )){
    var mes = i.toString()
  }
  
  var imgColl = landsat8_c2
  .filterBounds(geometry)
  .filterDate(dataInicio,dataFim)
  Map.addLayer(imgColl,{},'Teste',false)
  //print(imgColl)
  var img = imgColl.first().select(["B6","B5","B4"]).clip(sq)
  img = img.add(1).multiply(127.5).toByte();
  var maxImg =  img.reduceRegion(ee.Reducer.max(),img.geometry()).getInfo()
  var minImg =  img.reduceRegion(ee.Reducer.min(),img.geometry()).getInfo()
  print(maxImg,minImg)
  var imageVis = {bands: ["B6","B5","B4"],gamma: 1,max: maxImg,min:minImg ,opacity: 1}
  Map.addLayer(img)
  var min = img.reduceRegion(ee.Reducer.min(), img.geometry(), 30)
  print(min)
  print(min.values())
  var imagemCalculada = img.visualize({max:174, min:135, opacity:1, gamma:1})
  Map.addLayer(img)
  Map.addLayer({eeObject:imagemCalculada, name :'Teste Img'})
  print(imagemCalculada)
  
  
  Export.image.toDrive({
        image: imagemCalculada,
        description: "tile_"+s+"_"+mes,
        folder: 'Marapanim',
        fileNamePrefix: "tile_"+s+"_"+mes,
        region:  imagemCalculada.geometry(),
        scale: 30,
        maxPixels: 1e13
      });
      
  
}


