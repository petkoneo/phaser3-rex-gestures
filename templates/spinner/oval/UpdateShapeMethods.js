import Arc from '../../../plugins/gameobjects/shape/shapes/geoms/lines/arc/Arc.js';
import Circle from '../../../plugins/gameobjects/shape/shapes/geoms/lines/arc/Circle.js';

export default {
    buildShapes() {
        this.addShape((new Circle()).setName('track'));
        this.addShape((new Arc()).setName('arc'));
    },

    updateShapes() {
        var centerX = this.centerX;
        var centerY = this.centerY;
        var radius = this.radius;
        var lineWidth = Math.ceil(radius / 25);
        var maxRadius = radius - (lineWidth / 2);

        this.getShape('track')
            .lineStyle(lineWidth, this.color, 0.5)
            .setRadius(maxRadius)
            .setCenterPosition(centerX, centerY);

        var startAngle = this.value * 360;
        var endAngle = startAngle + 60;
        this.getShape('arc')
            .lineStyle(lineWidth, this.color, 1)
            .setRadius(maxRadius)
            .setCenterPosition(centerX, centerY)
            .setAngle(startAngle, endAngle);

    }
}