import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YouTubeForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  // const { name, onBlur, onChange, ref, required } = register("username"); // register form into the hook

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {" "}
        {/* noValidate prevents browser validation allowing to react-hook-form custom validation */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          {/* <input type="text" id="username" name={name} placeholder="john_doe" onChange={onChange} onBlur={onBlur} ref={ref}/> */}
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          {<p className="field-error">{errors.username?.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="john_doe@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9, !#$%&'*+/=?^_'{|}`~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // regex pattern
                message: "Invalid Email",
              },
            //   validate: (fieldValue) =>{
            //     return fieldValue !== "admin@example.com" || "Enter a different email"
            //   },

            // multiple custom validation inside object
            validate: {
                notAdmin: (fieldValue) =>{
                    return fieldValue !== "admin@example.com" || "Enter a different email"
                  },

                notBlackListed: (fieldValue) =>{
                    return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                  },
            }
            })}
          />
          {<p className="field-error">{errors.email?.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            placeholder="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          {<p className="field-error">{errors.channel?.message}</p>}
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
