var deaths = angular.module('plunker', ['nvd3']);

deaths.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            //useInteractiveGuideline: true,
            duration: 500,
            showValues: true,
            valueFormat: function (d) {
                return d3.time.format('%x')(new Date(d));
            },
            xAxis: {
                axisLabel: 'Date',
                tickFormat: function (d) {
                    return d3.time.format('%x')(new Date(d));
                }
            },
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                },
            },
            yAxis2: {
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                },
                showMaxMin: true,
            },
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },

        }
    };

    $scope.data = [{ key: 'Daily change in deaths', type: 'bar', values: [{ 'x': 1652310000000, 'y': 0, 'series': 0 }, { 'x': 1652396400000, 'y': 21, 'series': 0 }, { 'x': 1652482800000, 'y': 15, 'series': 0 }, { 'x': 1652569200000, 'y': 8, 'series': 0 }], yAxis: 2 }, { key: 'Cumulative deaths', type: 'line', values: [{ 'x': 1652310000000, 'y': 6, 'series': 0 }, { 'x': 1652396400000, 'y': 27, 'series': 0 }, { 'x': 1652482800000, 'y': 42, 'series': 0 }, { 'x': 1652569200000, 'y': 50, 'series': 0 }], yAxis: 1 }];

});

