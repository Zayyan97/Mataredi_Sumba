var wms_layers = [];

var format_TiangTambahan_0 = new ol.format.GeoJSON();
var features_TiangTambahan_0 = format_TiangTambahan_0.readFeatures(json_TiangTambahan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TiangTambahan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TiangTambahan_0.addFeatures(features_TiangTambahan_0);
var lyr_TiangTambahan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TiangTambahan_0, 
                style: style_TiangTambahan_0,
                interactive: false,
                title: '<img src="styles/legend/TiangTambahan_0.png" /> Tiang Tambahan'
            });
var format_TiangUtama_1 = new ol.format.GeoJSON();
var features_TiangUtama_1 = format_TiangUtama_1.readFeatures(json_TiangUtama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TiangUtama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TiangUtama_1.addFeatures(features_TiangUtama_1);
var lyr_TiangUtama_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TiangUtama_1, 
                style: style_TiangUtama_1,
                interactive: false,
                title: '<img src="styles/legend/TiangUtama_1.png" /> Tiang Utama'
            });

        var lyr_RupaBumiIndonesia_2 = new ol.layer.Tile({
            'title': 'Rupa Bumi Indonesia',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Badan Informasi Geospasial</a>',
                url: 'https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/INDONESIA/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Topographic_3 = new ol.layer.Tile({
            'title': 'Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_LightGray_5 = new ol.layer.Tile({
            'title': 'Light Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_DarkGray_6 = new ol.layer.Tile({
            'title': 'Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ImagerywithLabel_7 = new ol.layer.Tile({
            'title': 'Imagery with Label',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Imagery_8 = new ol.layer.Tile({
            'title': 'Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Contour_9 = new ol.layer.Tile({
            'title': 'Contour',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Terrain_10 = new ol.layer.Tile({
            'title': 'Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiDesa_11 = new ol.format.GeoJSON();
var features_BatasAdministrasiDesa_11 = format_BatasAdministrasiDesa_11.readFeatures(json_BatasAdministrasiDesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiDesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiDesa_11.addFeatures(features_BatasAdministrasiDesa_11);
var lyr_BatasAdministrasiDesa_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiDesa_11, 
                style: style_BatasAdministrasiDesa_11,
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiDesa_11.png" /> Batas Administrasi Desa'
            });
var format_CakupanSinyal_12 = new ol.format.GeoJSON();
var features_CakupanSinyal_12 = format_CakupanSinyal_12.readFeatures(json_CakupanSinyal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CakupanSinyal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CakupanSinyal_12.addFeatures(features_CakupanSinyal_12);
var lyr_CakupanSinyal_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CakupanSinyal_12, 
                style: style_CakupanSinyal_12,
                interactive: false,
    title: 'Cakupan Sinyal<br />\
    <img src="styles/legend/CakupanSinyal_12_0.png" /> Coverage 3G<br />\
    <img src="styles/legend/CakupanSinyal_12_1.png" /> Coverage 4G<br />'
        });
var format_Jalan_13 = new ol.format.GeoJSON();
var features_Jalan_13 = format_Jalan_13.readFeatures(json_Jalan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_13.addFeatures(features_Jalan_13);
var lyr_Jalan_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_13, 
                style: style_Jalan_13,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_13_0.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_13_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_13_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_13_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_13_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_13_5.png" /> <br />'
        });
var format_LokasiPLTS_14 = new ol.format.GeoJSON();
var features_LokasiPLTS_14 = format_LokasiPLTS_14.readFeatures(json_LokasiPLTS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPLTS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPLTS_14.addFeatures(features_LokasiPLTS_14);
var lyr_LokasiPLTS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiPLTS_14, 
                style: style_LokasiPLTS_14,
                interactive: false,
                title: '<img src="styles/legend/LokasiPLTS_14.png" /> Lokasi PLTS'
            });
var format_All_HH_15 = new ol.format.GeoJSON();
var features_All_HH_15 = format_All_HH_15.readFeatures(json_All_HH_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_HH_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_HH_15.addFeatures(features_All_HH_15);
var lyr_All_HH_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_All_HH_15, 
                style: style_All_HH_15,
                interactive: true,
                title: '<img src="styles/legend/All_HH_15.png" /> All_HH'
            });
var format_FasilitasUmum_16 = new ol.format.GeoJSON();
var features_FasilitasUmum_16 = format_FasilitasUmum_16.readFeatures(json_FasilitasUmum_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_16.addFeatures(features_FasilitasUmum_16);
var lyr_FasilitasUmum_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasilitasUmum_16, 
                style: style_FasilitasUmum_16,
                interactive: false,
    title: 'Fasilitas Umum<br />\
    <img src="styles/legend/FasilitasUmum_16_0.png" /> Fasilitas Kesehatan<br />\
    <img src="styles/legend/FasilitasUmum_16_1.png" /> Fasilitas Pendidikan<br />\
    <img src="styles/legend/FasilitasUmum_16_2.png" /> Gereja<br />\
    <img src="styles/legend/FasilitasUmum_16_3.png" /> Kantor<br />\
    <img src="styles/legend/FasilitasUmum_16_4.png" /> Penginapan<br />\
    <img src="styles/legend/FasilitasUmum_16_5.png" /> Perpustakaan<br />'
        });
var group_TiangListrik = new ol.layer.Group({
                                layers: [lyr_TiangTambahan_0,lyr_TiangUtama_1,],
                                title: "Tiang Listrik"});

lyr_TiangTambahan_0.setVisible(true);lyr_TiangUtama_1.setVisible(true);lyr_RupaBumiIndonesia_2.setVisible(false);lyr_Topographic_3.setVisible(false);lyr_OpenStreetMap_4.setVisible(false);lyr_LightGray_5.setVisible(false);lyr_DarkGray_6.setVisible(false);lyr_ImagerywithLabel_7.setVisible(false);lyr_Imagery_8.setVisible(false);lyr_Contour_9.setVisible(false);lyr_Terrain_10.setVisible(true);lyr_BatasAdministrasiDesa_11.setVisible(false);lyr_CakupanSinyal_12.setVisible(false);lyr_Jalan_13.setVisible(false);lyr_LokasiPLTS_14.setVisible(true);lyr_All_HH_15.setVisible(true);lyr_FasilitasUmum_16.setVisible(true);
var layersList = [group_TiangListrik,lyr_RupaBumiIndonesia_2,lyr_Topographic_3,lyr_OpenStreetMap_4,lyr_LightGray_5,lyr_DarkGray_6,lyr_ImagerywithLabel_7,lyr_Imagery_8,lyr_Contour_9,lyr_Terrain_10,lyr_BatasAdministrasiDesa_11,lyr_CakupanSinyal_12,lyr_Jalan_13,lyr_LokasiPLTS_14,lyr_All_HH_15,lyr_FasilitasUmum_16];
lyr_TiangTambahan_0.set('fieldAliases', {'Name': 'Name', });
lyr_TiangUtama_1.set('fieldAliases', {'Name': 'Name', });
lyr_BatasAdministrasiDesa_11.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CakupanSinyal_12.set('fieldAliases', {'Name': 'Name', });
lyr_Jalan_13.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_LokasiPLTS_14.set('fieldAliases', {});
lyr_All_HH_15.set('fieldAliases', {'Labeltxt_1': 'Labeltxt_1', });
lyr_FasilitasUmum_16.set('fieldAliases', {'ID': 'ID', 'Kategori': 'Kategori', });
lyr_TiangTambahan_0.set('fieldImages', {'Name': 'TextEdit', });
lyr_TiangUtama_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_BatasAdministrasiDesa_11.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CakupanSinyal_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_Jalan_13.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_LokasiPLTS_14.set('fieldImages', {});
lyr_All_HH_15.set('fieldImages', {'Labeltxt_1': 'ExternalResource', });
lyr_FasilitasUmum_16.set('fieldImages', {'ID': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_TiangTambahan_0.set('fieldLabels', {});
lyr_TiangUtama_1.set('fieldLabels', {});
lyr_BatasAdministrasiDesa_11.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CakupanSinyal_12.set('fieldLabels', {'Name': 'no label', });
lyr_Jalan_13.set('fieldLabels', {'REMARK': 'no label', });
lyr_LokasiPLTS_14.set('fieldLabels', {});
lyr_All_HH_15.set('fieldLabels', {'Labeltxt_1': 'no label', });
lyr_FasilitasUmum_16.set('fieldLabels', {'ID': 'no label', 'Kategori': 'no label', });
lyr_FasilitasUmum_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});