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
    <>
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
      {/* {showFeedback ? <ErrorMessage component="span" name={name} /> : null} */}
      {showFeedback ? (
        <div id={`${id}-feedback`} aria-live="polite" className="feedback text-sm">
          {meta.error ? <ErrorMessage component="span" name={name} /> : null}
        </div>
      ) : null}
    </>
  );
};

export default TextInputLiveFeedback;
