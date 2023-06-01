var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_London_Ward_CityMerged_1 = new ol.format.GeoJSON();
var features_London_Ward_CityMerged_1 = format_London_Ward_CityMerged_1.readFeatures(json_London_Ward_CityMerged_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_London_Ward_CityMerged_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_London_Ward_CityMerged_1.addFeatures(features_London_Ward_CityMerged_1);
var lyr_London_Ward_CityMerged_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_London_Ward_CityMerged_1, 
                style: style_London_Ward_CityMerged_1,
                interactive: true,
    title: 'London_Ward_CityMerged<br />\
    <img src="styles/legend/London_Ward_CityMerged_1_0.png" /> 5 - 12.8<br />\
    <img src="styles/legend/London_Ward_CityMerged_1_1.png" /> 12.8 - 17.8<br />\
    <img src="styles/legend/London_Ward_CityMerged_1_2.png" /> 17.8 - 23.9<br />\
    <img src="styles/legend/London_Ward_CityMerged_1_3.png" /> 23.9 - 29.5<br />\
    <img src="styles/legend/London_Ward_CityMerged_1_4.png" /> 29.5 - 46.6<br />'
        });
var format_LondonERFscsv_2 = new ol.format.GeoJSON();
var features_LondonERFscsv_2 = format_LondonERFscsv_2.readFeatures(json_LondonERFscsv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LondonERFscsv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LondonERFscsv_2.addFeatures(features_LondonERFscsv_2);
var lyr_LondonERFscsv_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LondonERFscsv_2, 
                style: style_LondonERFscsv_2,
                interactive: true,
                title: '<img src="styles/legend/LondonERFscsv_2.png" /> London ERFs.csv'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_London_Ward_CityMerged_1.setVisible(true);lyr_LondonERFscsv_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_London_Ward_CityMerged_1,lyr_LondonERFscsv_2];
lyr_London_Ward_CityMerged_1.set('fieldAliases', {'NAME': 'NAME', 'GSS_CODE': 'GSS_CODE', 'DISTRICT': 'DISTRICT', 'LAGSSCODE': 'LAGSSCODE', 'HECTARES': 'HECTARES', 'NONLD_AREA': 'NONLD_AREA', 'IMD_SCORE': 'IMD_SCORE', });
lyr_LondonERFscsv_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Address': 'Address', 'unnamed__1_': 'unnamed__1_', 'unnamed__2_': 'unnamed__2_', 'unnamed__3_': 'unnamed__3_', 'unnamed__4_': 'unnamed__4_', 'unnamed__5_': 'unnamed__5_', });
lyr_London_Ward_CityMerged_1.set('fieldImages', {'NAME': 'TextEdit', 'GSS_CODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'LAGSSCODE': 'TextEdit', 'HECTARES': 'TextEdit', 'NONLD_AREA': 'TextEdit', 'IMD_SCORE': 'TextEdit', });
lyr_LondonERFscsv_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Address': '', 'unnamed__1_': '', 'unnamed__2_': '', 'unnamed__3_': '', 'unnamed__4_': '', 'unnamed__5_': '', });
lyr_London_Ward_CityMerged_1.set('fieldLabels', {'NAME': 'inline label', 'GSS_CODE': 'inline label', 'DISTRICT': 'inline label', 'LAGSSCODE': 'inline label', 'HECTARES': 'inline label', 'NONLD_AREA': 'inline label', 'IMD_SCORE': 'inline label', });
lyr_LondonERFscsv_2.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Address': 'no label', 'unnamed__1_': 'no label', 'unnamed__2_': 'no label', 'unnamed__3_': 'no label', 'unnamed__4_': 'no label', 'unnamed__5_': 'no label', });
lyr_LondonERFscsv_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});