import React from "react";
import PropTypes from "prop-types";

class MapArray extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.useDataToUpdate) {
      return nextProps.from.length !== this.props.from.length;
    }
    return true;
  }
  render() {
    const { children, from, map, propAsKey } = this.props;
    var keyProp = propAsKey;
    const child = React.Children.only(children);
    const mapped = from.map((childProps, index) => {
      const key = childProps[keyProp] ||
        `${btoa(`${child.type}${index}${from.length}`)}`;
      return React.cloneElement(child, {
        key,
        ...map(childProps, key)
      })
    });
    return <React.Fragment>{mapped}</React.Fragment>;
  }
}

MapArray.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.array.isRequired,
  map: PropTypes.func,
  propAsKey: PropTypes.string,
  useDataToUpdate: PropTypes.bool
};

MapArray.defaultProps = {
  map: e => e,
  useDataToUpdate: false
};

export default MapArray;
