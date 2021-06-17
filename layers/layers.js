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

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 1.700 - 20.700<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 20.701 - 57.400<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 57.401 - 156.900<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 156.901 - 536.120<br />'
        });
var format_ViviendasenreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_4 = format_ViviendasenreasruralesINDEC_4.readFeatures(json_ViviendasenreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_4.addFeatures(features_ViviendasenreasruralesINDEC_4);
var lyr_ViviendasenreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_4, 
                style: style_ViviendasenreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_0.png" /> 300 - 1.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_1.png" /> 1.001 - 2.250<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_2.png" /> 2.251 - 4.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_3.png" /> 4.001 - 6.000<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 900 - 12.500<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 12.501 - 35.000<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 35.001 - 100.000<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 100.001 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 150 - 4.100<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 4.101 - 15.800<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 15.801 - 37.275<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_4.png" /> 37.276 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 975 - 6.875<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 6.876 - 17.975<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 17.976 - 41.725<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 41.726 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 725 - 4.825<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 4.826 - 10.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 10.001 - 20.205<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 20.206 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 900 - 14.200<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 14.201 - 36.500<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 36.501 - 75.875<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 75.876 - 164.615<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_5.png" /> 164.616 o más<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 120<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 121 - 300<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 301 - 1.375<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_4.png" /> 1.376 o más<br />'
        });
var format_HectreasdevidINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdevidINDEC_11 = format_HectreasdevidINDEC_11.readFeatures(json_HectreasdevidINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdevidINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdevidINDEC_11.addFeatures(features_HectreasdevidINDEC_11);
var lyr_HectreasdevidINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdevidINDEC_11, 
                style: style_HectreasdevidINDEC_11,
                interactive: true,
    title: 'Hectáreas de vid (INDEC)<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_1.png" /> 1 - 50<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_2.png" /> 51 - 500<br />\
    <img src="styles/legend/HectreasdevidINDEC_11_3.png" /> 501 o más<br />'
        });
var format_HectreasdecaadeazcarINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdecaadeazcarINDEC_12 = format_HectreasdecaadeazcarINDEC_12.readFeatures(json_HectreasdecaadeazcarINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecaadeazcarINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecaadeazcarINDEC_12.addFeatures(features_HectreasdecaadeazcarINDEC_12);
var lyr_HectreasdecaadeazcarINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecaadeazcarINDEC_12, 
                style: style_HectreasdecaadeazcarINDEC_12,
                interactive: true,
    title: 'Hectáreas de caña de azúcar (INDEC)<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_12_1.png" /> 1 - 1.000<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_12_2.png" /> 1.001 - 5.000<br />\
    <img src="styles/legend/HectreasdecaadeazcarINDEC_12_3.png" /> 5.001 o más<br />'
        });
var format_HectreasdelegumbresINDEC_13 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_13 = format_HectreasdelegumbresINDEC_13.readFeatures(json_HectreasdelegumbresINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_13.addFeatures(features_HectreasdelegumbresINDEC_13);
var lyr_HectreasdelegumbresINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_13, 
                style: style_HectreasdelegumbresINDEC_13,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_13_1.png" /> 1 - 300<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_13_2.png" /> 301 - 5.000<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_13_3.png" /> 5.001 - 45.000<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_13_4.png" /> 45.001 - 58.000<br />'
        });
var format_HectreasdectricosINDEC_14 = new ol.format.GeoJSON();
var features_HectreasdectricosINDEC_14 = format_HectreasdectricosINDEC_14.readFeatures(json_HectreasdectricosINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdectricosINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdectricosINDEC_14.addFeatures(features_HectreasdectricosINDEC_14);
var lyr_HectreasdectricosINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdectricosINDEC_14, 
                style: style_HectreasdectricosINDEC_14,
                interactive: true,
    title: 'Hectáreas de cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_1.png" /> 1 - 120<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_2.png" /> 121 - 2.000<br />\
    <img src="styles/legend/HectreasdectricosINDEC_14_3.png" /> 2.001 o más<br />'
        });
var format_HectreasdemazMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_15 = format_HectreasdemazMAGyP_15.readFeatures(json_HectreasdemazMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_15.addFeatures(features_HectreasdemazMAGyP_15);
var lyr_HectreasdemazMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_15, 
                style: style_HectreasdemazMAGyP_15,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_1.png" /> 1 - 2.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_2.png" /> 2.001 - 35.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_3.png" /> 35.001 - 50.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_15_4.png" /> 50.001 o más<br />'
        });
var format_HectreasdeporotossecosMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdeporotossecosMAGyP_16 = format_HectreasdeporotossecosMAGyP_16.readFeatures(json_HectreasdeporotossecosMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeporotossecosMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeporotossecosMAGyP_16.addFeatures(features_HectreasdeporotossecosMAGyP_16);
var lyr_HectreasdeporotossecosMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeporotossecosMAGyP_16, 
                style: style_HectreasdeporotossecosMAGyP_16,
                interactive: true,
    title: 'Hectáreas de porotos secos (MAGyP)<br />\
    <img src="styles/legend/HectreasdeporotossecosMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeporotossecosMAGyP_16_1.png" /> 1 - 3.000<br />\
    <img src="styles/legend/HectreasdeporotossecosMAGyP_16_2.png" /> 3.001 - 25.000<br />\
    <img src="styles/legend/HectreasdeporotossecosMAGyP_16_3.png" /> 25.001 - 75.000<br />\
    <img src="styles/legend/HectreasdeporotossecosMAGyP_16_4.png" /> 75.001 - 125.000<br />'
        });
var format_HectreasdetrigoMAGyP_17 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_17 = format_HectreasdetrigoMAGyP_17.readFeatures(json_HectreasdetrigoMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_17.addFeatures(features_HectreasdetrigoMAGyP_17);
var lyr_HectreasdetrigoMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_17, 
                style: style_HectreasdetrigoMAGyP_17,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_17_1.png" /> 100 - 1.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_17_2.png" /> 1.001 - 10.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_17_3.png" /> 10.001 - 20.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_17_4.png" /> 20.001 o más<br />'
        });
var format_HectreasdesojaMAGyP_18 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_18 = format_HectreasdesojaMAGyP_18.readFeatures(json_HectreasdesojaMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_18.addFeatures(features_HectreasdesojaMAGyP_18);
var lyr_HectreasdesojaMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_18, 
                style: style_HectreasdesojaMAGyP_18,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_1.png" /> 25 - 1.500<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_2.png" /> 1.501 - 20.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_3.png" /> 20.001 - 100.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_18_4.png" /> 100.001 - 238.000<br />'
        });
var format_Capacitaciones2020_19 = new ol.format.GeoJSON();
var features_Capacitaciones2020_19 = format_Capacitaciones2020_19.readFeatures(json_Capacitaciones2020_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020_19.addFeatures(features_Capacitaciones2020_19);
var lyr_Capacitaciones2020_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020_19, 
                style: style_Capacitaciones2020_19,
                interactive: true,
    title: 'Capacitaciones 2020<br />\
    <img src="styles/legend/Capacitaciones2020_19_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2020_19_1.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2020_19_2.png" /> Tecnica<br />'
        });
var format_Capacitaciones2019_20 = new ol.format.GeoJSON();
var features_Capacitaciones2019_20 = format_Capacitaciones2019_20.readFeatures(json_Capacitaciones2019_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019_20.addFeatures(features_Capacitaciones2019_20);
var lyr_Capacitaciones2019_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019_20, 
                style: style_Capacitaciones2019_20,
                interactive: true,
    title: 'Capacitaciones 2019<br />\
    <img src="styles/legend/Capacitaciones2019_20_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2019_20_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2018_21 = new ol.format.GeoJSON();
var features_Capacitaciones2018_21 = format_Capacitaciones2018_21.readFeatures(json_Capacitaciones2018_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_21.addFeatures(features_Capacitaciones2018_21);
var lyr_Capacitaciones2018_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_21, 
                style: style_Capacitaciones2018_21,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_21_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2018_21_1.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2018_21_2.png" /> Tecnica<br />'
        });
var format_Capacitaciones2017_22 = new ol.format.GeoJSON();
var features_Capacitaciones2017_22 = format_Capacitaciones2017_22.readFeatures(json_Capacitaciones2017_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017_22.addFeatures(features_Capacitaciones2017_22);
var lyr_Capacitaciones2017_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017_22, 
                style: style_Capacitaciones2017_22,
                interactive: true,
    title: 'Capacitaciones 2017<br />\
    <img src="styles/legend/Capacitaciones2017_22_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2017_22_1.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2017_22_2.png" /> Tecnica<br />'
        });
var format_LocalidadesSalta_23 = new ol.format.GeoJSON();
var features_LocalidadesSalta_23 = format_LocalidadesSalta_23.readFeatures(json_LocalidadesSalta_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesSalta_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesSalta_23.addFeatures(features_LocalidadesSalta_23);
var lyr_LocalidadesSalta_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesSalta_23, 
                style: style_LocalidadesSalta_23,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesSalta_23.png" /> Localidades Salta'
            });
var format_Agencia_24 = new ol.format.GeoJSON();
var features_Agencia_24 = format_Agencia_24.readFeatures(json_Agencia_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agencia_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agencia_24.addFeatures(features_Agencia_24);
var lyr_Agencia_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agencia_24, 
                style: style_Agencia_24,
                interactive: true,
                title: '<img src="styles/legend/Agencia_24.png" /> Agencia'
            });
var format_BER_25 = new ol.format.GeoJSON();
var features_BER_25 = format_BER_25.readFeatures(json_BER_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_25.addFeatures(features_BER_25);
var lyr_BER_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_25, 
                style: style_BER_25,
                interactive: true,
                title: '<img src="styles/legend/BER_25.png" /> BER'
            });
var format_BER_26 = new ol.format.GeoJSON();
var features_BER_26 = format_BER_26.readFeatures(json_BER_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_26.addFeatures(features_BER_26);
var lyr_BER_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_26, 
                style: style_BER_26,
                interactive: true,
                title: '<img src="styles/legend/BER_26.png" /> BER'
            });
var format_Delegacin_27 = new ol.format.GeoJSON();
var features_Delegacin_27 = format_Delegacin_27.readFeatures(json_Delegacin_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_27.addFeatures(features_Delegacin_27);
var lyr_Delegacin_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_27, 
                style: style_Delegacin_27,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_27.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_ViviendasenreasruralesINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdevidINDEC_11.setVisible(true);lyr_HectreasdecaadeazcarINDEC_12.setVisible(true);lyr_HectreasdelegumbresINDEC_13.setVisible(true);lyr_HectreasdectricosINDEC_14.setVisible(true);lyr_HectreasdemazMAGyP_15.setVisible(true);lyr_HectreasdeporotossecosMAGyP_16.setVisible(true);lyr_HectreasdetrigoMAGyP_17.setVisible(true);lyr_HectreasdesojaMAGyP_18.setVisible(true);lyr_Capacitaciones2020_19.setVisible(true);lyr_Capacitaciones2019_20.setVisible(true);lyr_Capacitaciones2018_21.setVisible(true);lyr_Capacitaciones2017_22.setVisible(true);lyr_LocalidadesSalta_23.setVisible(true);lyr_Agencia_24.setVisible(true);lyr_BER_25.setVisible(true);lyr_BER_26.setVisible(true);lyr_Delegacin_27.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_ViviendasenreasruralesINDEC_4,lyr_PEAINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdevidINDEC_11,lyr_HectreasdecaadeazcarINDEC_12,lyr_HectreasdelegumbresINDEC_13,lyr_HectreasdectricosINDEC_14,lyr_HectreasdemazMAGyP_15,lyr_HectreasdeporotossecosMAGyP_16,lyr_HectreasdetrigoMAGyP_17,lyr_HectreasdesojaMAGyP_18,lyr_Capacitaciones2020_19,lyr_Capacitaciones2019_20,lyr_Capacitaciones2018_21,lyr_Capacitaciones2017_22,lyr_LocalidadesSalta_23,lyr_Agencia_24,lyr_BER_25,lyr_BER_26,lyr_Delegacin_27];
lyr_Departamentos_2.set('fieldAliases', {'depto': 'depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldAliases', {'viv rur': 'viv rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdevidINDEC_11.set('fieldAliases', {'vid': 'vid', });
lyr_HectreasdecaadeazcarINDEC_12.set('fieldAliases', {'Azucar': 'Azucar', });
lyr_HectreasdelegumbresINDEC_13.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdectricosINDEC_14.set('fieldAliases', {'Citricos': 'Citricos', });
lyr_HectreasdemazMAGyP_15.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreasdeporotossecosMAGyP_16.set('fieldAliases', {'poroto': 'poroto', });
lyr_HectreasdetrigoMAGyP_17.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreasdesojaMAGyP_18.set('fieldAliases', {'soja': 'soja', });
lyr_Capacitaciones2020_19.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2019_20.set('fieldAliases', {'localidad': 'localidad', 'tipo capa': 'tipo capa', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2018_21.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2017_22.set('fieldAliases', {'localidad': 'localidad', 'tipo': 'tipo', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_LocalidadesSalta_23.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_Agencia_24.set('fieldAliases', {'localidad': 'localidad', });
lyr_BER_25.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BER_26.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Delegacin_27.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'depto': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldImages', {'viv rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdevidINDEC_11.set('fieldImages', {'vid': 'TextEdit', });
lyr_HectreasdecaadeazcarINDEC_12.set('fieldImages', {'Azucar': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_13.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdectricosINDEC_14.set('fieldImages', {'Citricos': 'TextEdit', });
lyr_HectreasdemazMAGyP_15.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreasdeporotossecosMAGyP_16.set('fieldImages', {'poroto': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_17.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreasdesojaMAGyP_18.set('fieldImages', {'soja': 'TextEdit', });
lyr_Capacitaciones2020_19.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2019_20.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2018_21.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'TextEdit', });
lyr_Capacitaciones2017_22.set('fieldImages', {'localidad': 'TextEdit', 'tipo': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'TextEdit', });
lyr_LocalidadesSalta_23.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_Agencia_24.set('fieldImages', {'localidad': 'TextEdit', });
lyr_BER_25.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BER_26.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Delegacin_27.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldLabels', {'viv rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdevidINDEC_11.set('fieldLabels', {'vid': 'inline label', });
lyr_HectreasdecaadeazcarINDEC_12.set('fieldLabels', {'Azucar': 'inline label', });
lyr_HectreasdelegumbresINDEC_13.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdectricosINDEC_14.set('fieldLabels', {'Citricos': 'inline label', });
lyr_HectreasdemazMAGyP_15.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreasdeporotossecosMAGyP_16.set('fieldLabels', {'poroto': 'inline label', });
lyr_HectreasdetrigoMAGyP_17.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreasdesojaMAGyP_18.set('fieldLabels', {'soja': 'inline label', });
lyr_Capacitaciones2020_19.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2019_20.set('fieldLabels', {'localidad': 'inline label', 'tipo capa': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2018_21.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2017_22.set('fieldLabels', {'localidad': 'inline label', 'tipo': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_LocalidadesSalta_23.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_Agencia_24.set('fieldLabels', {'localidad': 'inline label', });
lyr_BER_25.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BER_26.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Delegacin_27.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});