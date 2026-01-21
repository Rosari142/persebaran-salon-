var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JalanRaya_2 = new ol.format.GeoJSON();
var features_JalanRaya_2 = format_JalanRaya_2.readFeatures(json_JalanRaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_2.addFeatures(features_JalanRaya_2);
var lyr_JalanRaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_2, 
                style: style_JalanRaya_2,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_2.png" /> Jalan Raya'
            });
var format_JalanLokal_3 = new ol.format.GeoJSON();
var features_JalanLokal_3 = format_JalanLokal_3.readFeatures(json_JalanLokal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_3.addFeatures(features_JalanLokal_3);
var lyr_JalanLokal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_3, 
                style: style_JalanLokal_3,
                popuplayertitle: 'Jalan Lokal',
                interactive: true,
                title: '<img src="styles/legend/JalanLokal_3.png" /> Jalan Lokal'
            });
var format_JalanPerumahan_4 = new ol.format.GeoJSON();
var features_JalanPerumahan_4 = format_JalanPerumahan_4.readFeatures(json_JalanPerumahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_4.addFeatures(features_JalanPerumahan_4);
var lyr_JalanPerumahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_4, 
                style: style_JalanPerumahan_4,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_4.png" /> Jalan Perumahan'
            });
var format_JalanGang_5 = new ol.format.GeoJSON();
var features_JalanGang_5 = format_JalanGang_5.readFeatures(json_JalanGang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_5.addFeatures(features_JalanGang_5);
var lyr_JalanGang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_5, 
                style: style_JalanGang_5,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_5.png" /> Jalan Gang'
            });
var format_BatasKelurahan_6 = new ol.format.GeoJSON();
var features_BatasKelurahan_6 = format_BatasKelurahan_6.readFeatures(json_BatasKelurahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_6.addFeatures(features_BatasKelurahan_6);
var lyr_BatasKelurahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_6, 
                style: style_BatasKelurahan_6,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_6.png" /> Batas Kelurahan'
            });
var format_FasilitasUmum_7 = new ol.format.GeoJSON();
var features_FasilitasUmum_7 = format_FasilitasUmum_7.readFeatures(json_FasilitasUmum_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_7.addFeatures(features_FasilitasUmum_7);
var lyr_FasilitasUmum_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_7, 
                style: style_FasilitasUmum_7,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_7.png" /> Fasilitas Umum'
            });
var format_BatasPemukiman_8 = new ol.format.GeoJSON();
var features_BatasPemukiman_8 = format_BatasPemukiman_8.readFeatures(json_BatasPemukiman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemukiman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemukiman_8.addFeatures(features_BatasPemukiman_8);
var lyr_BatasPemukiman_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPemukiman_8, 
                style: style_BatasPemukiman_8,
                popuplayertitle: 'Batas Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/BatasPemukiman_8.png" /> Batas Pemukiman'
            });
var format_TitikSalondiTlogomas_9 = new ol.format.GeoJSON();
var features_TitikSalondiTlogomas_9 = format_TitikSalondiTlogomas_9.readFeatures(json_TitikSalondiTlogomas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSalondiTlogomas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSalondiTlogomas_9.addFeatures(features_TitikSalondiTlogomas_9);
var lyr_TitikSalondiTlogomas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSalondiTlogomas_9, 
                style: style_TitikSalondiTlogomas_9,
                popuplayertitle: 'Titik Salon di Tlogomas',
                interactive: true,
                title: '<img src="styles/legend/TitikSalondiTlogomas_9.png" /> Titik Salon di Tlogomas'
            });
var format_ADMINISTRASI_LN_25K_10 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_10 = format_ADMINISTRASI_LN_25K_10.readFeatures(json_ADMINISTRASI_LN_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_10.addFeatures(features_ADMINISTRASI_LN_25K_10);
var lyr_ADMINISTRASI_LN_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_10, 
                style: style_ADMINISTRASI_LN_25K_10,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_10.png" /> ADMINISTRASI_LN_25K'
            });
var format_BuildingAI_11 = new ol.format.GeoJSON();
var features_BuildingAI_11 = format_BuildingAI_11.readFeatures(json_BuildingAI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingAI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingAI_11.addFeatures(features_BuildingAI_11);
var lyr_BuildingAI_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingAI_11, 
                style: style_BuildingAI_11,
                popuplayertitle: 'Building AI',
                interactive: true,
                title: '<img src="styles/legend/BuildingAI_11.png" /> Building AI'
            });
var group_model_output = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'model_output'});

lyr_OpenStreetMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_JalanRaya_2.setVisible(true);lyr_JalanLokal_3.setVisible(true);lyr_JalanPerumahan_4.setVisible(true);lyr_JalanGang_5.setVisible(true);lyr_BatasKelurahan_6.setVisible(true);lyr_FasilitasUmum_7.setVisible(true);lyr_BatasPemukiman_8.setVisible(true);lyr_TitikSalondiTlogomas_9.setVisible(true);lyr_ADMINISTRASI_LN_25K_10.setVisible(true);lyr_BuildingAI_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenStreetMap_1,lyr_JalanRaya_2,lyr_JalanLokal_3,lyr_JalanPerumahan_4,lyr_JalanGang_5,lyr_BatasKelurahan_6,lyr_FasilitasUmum_7,lyr_BatasPemukiman_8,lyr_TitikSalondiTlogomas_9,lyr_ADMINISTRASI_LN_25K_10,lyr_BuildingAI_11];
lyr_JalanRaya_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'km': 'km', });
lyr_JalanLokal_3.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Panjang': 'Panjang', 'km': 'km', });
lyr_JalanPerumahan_4.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Panjang': 'Panjang', 'km': 'km', });
lyr_JalanGang_5.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Panjang': 'Panjang', 'KM': 'KM', });
lyr_BatasKelurahan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_FasilitasUmum_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'HK': 'HK', });
lyr_BatasPemukiman_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'HK': 'HK', });
lyr_TitikSalondiTlogomas_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_ADMINISTRASI_LN_25K_10.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BuildingAI_11.set('fieldAliases', {'fid': 'fid', });
lyr_JalanRaya_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'km': 'TextEdit', });
lyr_JalanLokal_3.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'Panjang': 'TextEdit', 'km': 'TextEdit', });
lyr_JalanPerumahan_4.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'Panjang': 'TextEdit', 'km': 'TextEdit', });
lyr_JalanGang_5.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'Panjang': 'TextEdit', 'KM': 'TextEdit', });
lyr_BatasKelurahan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_FasilitasUmum_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'HK': 'TextEdit', });
lyr_BatasPemukiman_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'HK': 'TextEdit', });
lyr_TitikSalondiTlogomas_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_10.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BuildingAI_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_JalanRaya_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'km': 'no label', });
lyr_JalanLokal_3.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', 'Panjang': 'no label', 'km': 'no label', });
lyr_JalanPerumahan_4.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', 'Panjang': 'no label', 'km': 'no label', });
lyr_JalanGang_5.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', 'Panjang': 'no label', 'KM': 'no label', });
lyr_BatasKelurahan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_FasilitasUmum_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'HK': 'no label', });
lyr_BatasPemukiman_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'HK': 'no label', });
lyr_TitikSalondiTlogomas_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_ADMINISTRASI_LN_25K_10.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BuildingAI_11.set('fieldLabels', {'fid': 'no label', });
lyr_BuildingAI_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});