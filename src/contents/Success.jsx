import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const div = css`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const button = css`
  height: 50px;
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 30px;
`;

export function Success({ setIsSuccess }) {
  return (
    <div css={div}>
      <h1>Congratulations！</h1>
      <button css={button} onClick={() => setIsSuccess(false)}>
        ReTry
      </button>
    </div>
  );
}
