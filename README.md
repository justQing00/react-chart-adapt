# react-chart-adapt
react chart adapt

### How to use
```javascript
import { RadialChartAdapt, getEventPosition, getPixelRatio } from 'react-chart-adapt';

position = getEventPosition(event) // Relative position
ratio = getPixelRatio(ctx) // ratio

<RadialChartAdapt />

```
### RadialBarChart Props
```javascript
{
  onResize : ({ ratio, clientWidth, clientHeight, ratioWidth, ratioHeight }, e) => {
    // handle
  },
  ctx, // canvas
}
```
