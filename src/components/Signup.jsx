import { useActionState } from "react";

import { handleSignupAction } from "../util/SignupAction.js";

export default function Signup() {
  const [formState, formAction] = useActionState(handleSignupAction, {
    errors: null,
  });

  let defaultEmailValue = formState.enteredValues?.email;
  let defaultPasswordValue = formState.enteredValues?.password;
  let defaultConfirmPasswordValue = formState.enteredValues?.confirmPassword;
  let defaultFirstNameValue = formState.enteredValues?.firstName;
  let defaultLastNameValue = formState.enteredValues?.lastName;
  let defaultRoleValue = formState.enteredValues?.role;
  let defaultTermsValue = formState.enteredValues?.terms;
  let defaultFirstAcquisitionValue =
    formState.enteredValues?.acquisitionChannel.includes("google");
  let defaultSecondAcquisitionValue =
    formState.enteredValues?.acquisitionChannel.includes("friend");
  let defaultThirdAcquisitionValue =
    formState.enteredValues?.acquisitionChannel.includes("other");

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={defaultEmailValue}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={defaultPasswordValue}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={defaultConfirmPasswordValue}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={defaultFirstNameValue}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={defaultLastNameValue}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select
          id="role"
          name="role"
          key={defaultRoleValue}
          defaultValue={defaultRoleValue}
        >
          <option value="empty">Options list:</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            key={defaultFirstAcquisitionValue}
            defaultChecked={defaultFirstAcquisitionValue}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            key={defaultSecondAcquisitionValue}
            defaultChecked={defaultSecondAcquisitionValue}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            key={defaultThirdAcquisitionValue}
            defaultChecked={defaultThirdAcquisitionValue}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            key={defaultTermsValue}
            defaultChecked={defaultTermsValue}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
