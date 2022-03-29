import { useState, useImperativeHandle, forwardRef } from "react";
import Button from "../Button/Button";

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button
          backgroundColor="lightblue"
          name="Edit contact information"
          handleClick={toggleVisibility}
        >
          {props.buttonLabelShow}
        </Button>
      </div>
      <div style={showWhenVisible}>
        <Button
          backgroundColor="red"
          name="Cancel"
          handleClick={toggleVisibility}
        >
          {props.buttonLabelHide ? props.buttonLabelHide : "Cancel"}
        </Button>
        {props.children}
      </div>
    </div>
  );
});

export default Togglable;
