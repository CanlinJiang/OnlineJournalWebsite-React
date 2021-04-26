import PropTypes from "prop-types";
import React from "react";

const HTMLText = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
