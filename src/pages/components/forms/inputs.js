import React from 'react';

const Inputs = ({data}) => {
  return (
    <div>
      <h1>Inputs</h1>

      <form>
        <div className="field">
          <label htmlFor="">label</label>

          <input type="text" value="value text" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>

          <input type="text" value="" placeholder="placeholder text" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <input type="text" value="" placeholder="placeholder text" />
          <span>with suffix</span>
        </div>
      </form>

      <h2>Passwords</h2>
      <form>
        <div className="field">
          <label htmlFor="">label</label>
          <input type="password" value="password" />
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <input type="password" value="" placeholder="password" />
        </div>
      </form>

      <h2>Textareas</h2>

      <form>
        <div className="field">
          <label htmlFor="">label</label>
          <textarea id="" name="" cols="30" rows="10">
            value text
          </textarea>
        </div>

        <div className="field">
          <label htmlFor="">label</label>
          <textarea
            id=""
            name=""
            cols="30"
            rows="10"
            placeholder="placeholder text"
          />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
