import * as React from 'react';
import * as ReactDom from 'react-dom';

export class RadialChartAdapt extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  resize = (e) => {
    const { ctx } = this.props;
    const { onResize } = this.props;
    const ratio = getPixelRatio(ctx);
    const $parentNode = ReactDom.findDOMNode(this).parentNode;
    const clientWidth = $parentNode.clientWidth;
    const clientHeight = $parentNode.clientHeight;
    const ratioWidth = clientWidth * ratio;
    const ratioHeight = clientHeight * ratio;
    if (onResize) onResize({ ratio, clientWidth, clientHeight, ratioWidth, ratioHeight }, e);
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    );
  }
}

export const getEventPosition = (event) => {
  let x = null;
  let y = null;
  if (event.layerX || event.layerX === 0) {
    x = event.layerX;
    y = event.layerY;
  } else if (event.offsetX || event.offsetX === 0) {
    x = event.offsetX;
    y = event.offsetY;
  }
  return { x, y };
};

export const getPixelRatio = (context) => {
  const backingStore = (
          context && (context.backingStorePixelRatio ||
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio)
        ) || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};
