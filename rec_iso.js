var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'stackedAreaChart',
            height: 450,
            margin: {
                top: 20,
                right: 50,
                bottom: 30,
                left: 80
            },
            showValues: true,
            x: function (d) { return d[0]; },
            y: function (d) { return d[1]; },
            useVoronoi: false,
            clipEdge: true,
            duration: 100,
            useInteractiveGuideline: true,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
            xAxis: {
                showMaxMin: false,
                tickFormat: function (d) {
                    return d3.time.format('%x')(new Date(d))
                }
            },
            yAxis: {
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                }
            },
            zoom: {
                enabled: true,
                scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: true,
                unzoomEventType: 'dblclick.zoom'
            }
        }
    };

    $scope.data = [
        {
            "key": "Total recovered",
            "values": [[1652310000000, 162200], [1652396400000, 243620], [1652482800000, 496030], [1652569200000, 648630]]
        },

        {
            "key": "Total isolated patients",
            "values": [[1652310000000, 187800], [1652396400000, 280810], [1652482800000, 324550], [1652569200000, 564860]]
        },

    ]
});
