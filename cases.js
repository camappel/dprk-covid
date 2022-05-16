var cases = angular.module('plunker', ['nvd3']);

cases.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin: {
                top: 20,
                right: 50,
                bottom: 60,
                left: 100
            },
            duration: 50,
            showValues: true,
            valueFormat: function (d) {
                return d3.format(',f')(d);
            },
            xAxis: {
                axisLabel: 'Date',
                tickFormat: function (d) {
                    return d3.time.format('%x')(new Date(d));
                },
                rotateXLabel: true

            },
            x2Axis: {
                tickFormat: function (d) {
                    return d3.time.format('%b-%Y')(new Date(d));
                },
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Cumulative cases',
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                },
                rotateYLabel: false
            },
            y2Axis: {
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                }
            }
        }
    };

    $scope.data = [{
        key: 'Cases', values: [{ 'x': 1652310000000, 'y': 350000, 'series': 0 }, { 'x': 1652396400000, 'y': 524440, 'series': 0 }, { 'x': 1652482800000, 'y': 820620, 'series': 0 }, { 'x': 1652569200000, 'y': 1213540, 'series': 0 },]
    }]
});
