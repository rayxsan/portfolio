import React, { FunctionComponent } from "react";
import { useField, Field, ErrorMessage } from "formik";

interface Props {
  name: string;
  id?: string;
  placeholder?: string;
}

const TextInputLiveFeedback: FunctionComponent<Props> = ({ name, id, placeholder, ...props }) => {
  const [field, meta] = useField(name);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div>
      <label htmlFor={id} />
      <Field
        {...props}
        {...field}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-describedby={`${id}-feedback ${id}-help`}
        onFocus={handleFocus}
      />
      {meta.error && showFeedback ? <ErrorMessage component="span" name={name} /> : null}
    </div>
  );
};

export default TextInputLiveFeedback;
