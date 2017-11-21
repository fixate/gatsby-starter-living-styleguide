import React from 'react';

const Inputs = () => {
  return (
    <div>
      <h1>Inputs</h1>

      <form>
        <div className="field">
          <label htmlFor="">label</label>

          <input type="text" defaultValue="value text" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>

          <input type="text" defaultValue="" placeholder="placeholder text" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <input type="text" defaultValue="" placeholder="placeholder text" />
          <span>with suffix</span>
        </div>
      </form>

      <h2>Passwords</h2>
      <form>
        <div className="field">
          <label htmlFor="">label</label>
          <input type="password" defaultValue="password" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <input type="password" defaultValue="" placeholder="password" />
        </div>
      </form>

      <h2>Textareas</h2>

      <form>
        <div className="field">
          <label htmlFor="">label</label>
          <textarea
            id=""
            name=""
            cols="30"
            rows="10"
            defaultValue="value text"
          />
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <textarea
            id=""
            name=""
            cols="30"
            rows="10"
            placeholder="placeholder text"
            defaultValue=""
          />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
