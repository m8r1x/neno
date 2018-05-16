import React from "react";
import PropTypes from "prop-types";

class MapArray extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.from !== this.props.from;
  }
  render() {
    const { children, from, map } = this.props;
    const child = React.Children.only(children);
    const mapped = from.map((childProps, index) =>
      React.cloneElement(child, {
        key: `${btoa(`no:${index} out of ${from.length}`)}`,
        ...map(
          childProps,
          `${btoa(`no:${index} out of ${from.length}`)}`
        )
      })
    );
    return <React.Fragment>{mapped}</React.Fragment>;
  }
}

MapArray.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.array.isRequired,
  map: PropTypes.func
};

MapArray.defaultProps = {
  map: e => e
};

export default MapArray;
