var wms_layers = [];


        var lyr_RBI2019BIG_0 = new ol.layer.Tile({
            'title': 'RBI 2019 BIG',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Badan Informasi Geospasial</a>',
                url: 'https://portal.ina-sdi.or.id/arcgis/rest/services/RBI/INDONESIA/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdminDesa_4 = new ol.format.GeoJSON();
var features_BatasAdminDesa_4 = format_BatasAdminDesa_4.readFeatures(json_BatasAdminDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdminDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminDesa_4.addFeatures(features_BatasAdminDesa_4);
var lyr_BatasAdminDesa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminDesa_4, 
                style: style_BatasAdminDesa_4,
                interactive: false,
                title: '<img src="styles/legend/BatasAdminDesa_4.png" /> Batas Admin Desa'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                interactive: false,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_5_0.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_5_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_5_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_5_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_5_5.png" /> <br />'
        });
var format_Data_with_Image_attach_6 = new ol.format.GeoJSON();
var features_Data_with_Image_attach_6 = format_Data_with_Image_attach_6.readFeatures(json_Data_with_Image_attach_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_with_Image_attach_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_with_Image_attach_6.addFeatures(features_Data_with_Image_attach_6);
var lyr_Data_with_Image_attach_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_with_Image_attach_6, 
                style: style_Data_with_Image_attach_6,
                interactive: true,
                title: '<img src="styles/legend/Data_with_Image_attach_6.png" /> Data_with_Image_attach'
            });

lyr_RBI2019BIG_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleTerrain_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_BatasAdminDesa_4.setVisible(false);lyr_Jalan_5.setVisible(true);lyr_Data_with_Image_attach_6.setVisible(true);
var layersList = [lyr_RBI2019BIG_0,lyr_OSMStandard_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_BatasAdminDesa_4,lyr_Jalan_5,lyr_Data_with_Image_attach_6];
lyr_BatasAdminDesa_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Data_with_Image_attach_6.set('fieldAliases', {'Alamat_Len': 'Alamat Lengkap', 'Jumlah_lam': 'Jumlah lampu', 'Jumlah_han': 'Jumlah handphone', 'Tipe_handp': 'Tipe handphone', 'Jumlah_spe': 'Jumlah speaker', 'Keterangan': 'Keterangan', 'Jumlah_TV': 'Jumlah TV', 'Jenis_TV': 'Jenis TV', 'Jumlah_kom': 'Jumlah komputer/ laptop/ printer/ scanner', 'Detail_jum': 'Detail jumlah komputer, laptop, printer, dan scanner', 'Jumlah_set': 'Jumlah setrika listrik', 'Jumlah_ric': 'Jumlah rice cooker/ magic jar/ magic com', 'Jumlah_kul': 'Jumlah kulkas', 'Jumlah_kip': 'Jumlah kipas angin', 'Jumlah_mes': 'Jumlah mesin jahit elektrik', 'Jumlah_m_1': 'Jumlah mesin parut/ giling', 'Jumlah_Per': 'Jumlah Perlengkapan memasak (mixer, blender, dst)', 'Labeltxt_1': 'Foto bangunan rumah', });
lyr_BatasAdminDesa_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Data_with_Image_attach_6.set('fieldImages', {'Alamat_Len': 'TextEdit', 'Jumlah_lam': 'TextEdit', 'Jumlah_han': 'TextEdit', 'Tipe_handp': 'TextEdit', 'Jumlah_spe': 'TextEdit', 'Keterangan': 'TextEdit', 'Jumlah_TV': 'TextEdit', 'Jenis_TV': 'TextEdit', 'Jumlah_kom': 'TextEdit', 'Detail_jum': 'TextEdit', 'Jumlah_set': 'TextEdit', 'Jumlah_ric': 'TextEdit', 'Jumlah_kul': 'TextEdit', 'Jumlah_kip': 'TextEdit', 'Jumlah_mes': 'TextEdit', 'Jumlah_m_1': 'TextEdit', 'Jumlah_Per': 'TextEdit', 'Labeltxt_1': 'ExternalResource', });
lyr_BatasAdminDesa_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Data_with_Image_attach_6.set('fieldLabels', {'Alamat_Len': 'inline label', 'Jumlah_lam': 'inline label', 'Jumlah_han': 'inline label', 'Tipe_handp': 'inline label', 'Jumlah_spe': 'inline label', 'Keterangan': 'inline label', 'Jumlah_TV': 'inline label', 'Jenis_TV': 'inline label', 'Jumlah_kom': 'inline label', 'Detail_jum': 'inline label', 'Jumlah_set': 'inline label', 'Jumlah_ric': 'inline label', 'Jumlah_kul': 'inline label', 'Jumlah_kip': 'inline label', 'Jumlah_mes': 'inline label', 'Jumlah_m_1': 'inline label', 'Jumlah_Per': 'inline label', 'Labeltxt_1': 'header label', });
lyr_Data_with_Image_attach_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});