import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

export const RESIZER_DEFAULT_CLASSNAME = 'Resizer';

class Resizer extends React.PureComponent {
  render() {
    const {
      className,
      onClick,
      onDoubleClick,
      onMouseDown,
      onTouchEnd,
      onTouchStart,
      resizerClassName,
      split,
      style,
      active,
    } = this.props;
    const classes = [resizerClassName, split, className];

    if (active) {
      classes.push('active');
    }

    return (
      <span
        role="presentation"
        className={classes.join(' ')}
        style={style}
        onMouseDown={(event) => onMouseDown(event)}
        onTouchStart={(event) => {
          event.preventDefault();
          onTouchStart(event);
        }}
        onTouchEnd={(event) => {
          event.preventDefault();
          onTouchEnd(event);
        }}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault();
            onClick(event);
          }
        }}
        onDoubleClick={(event) => {
          if (onDoubleClick) {
            event.preventDefault();
            onDoubleClick(event);
          }
        }}
      />
    );
  }
}

Resizer.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onMouseDown: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  split: PropTypes.oneOf(['vertical', 'horizontal']),
  style: stylePropType,
  resizerClassName: PropTypes.string,
  active: PropTypes.bool,
};

Resizer.defaultProps = {
  onClick: null,
  onDoubleClick: null,
  split: undefined,
  style: {},
  resizerClassName: RESIZER_DEFAULT_CLASSNAME,
  active: false,
};

export default Resizer;
