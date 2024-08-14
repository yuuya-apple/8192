import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const whole = css`
  display: flex;
  flex-flow: column;
  height: 100vh;
  width: 100%;
`;

const header = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid;
  font-size: 50px;
`;

const title = css`
  margin: 10px 50px;
`;

const content = css`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const button = css`
  height: 200px;
  width: 200px;
  font-size: 70px;
  border-radius: 50%;
`;

export function Main({ setIsSuccess }) {
  const [tryCount, setTryCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  const answer = Math.random() < 0.5;

  const tryLuck = (selecter) => {
    if (selecter === answer) {
      setSuccessCount(successCount + 1);
    } else {
      setSuccessCount(0);
    }
    setTryCount(tryCount + 1);

    if (successCount === 12) {
      console.log("success");
      setIsSuccess(true);
    }
  };

  return (
    <div css={whole}>
      <div css={header}>
        <div css={title}>試行回数：{tryCount}</div>
        <div css={title}>確率：1/{2 ** successCount}</div>
      </div>
      <div css={content}>
        <button css={button} onClick={() => tryLuck(true)}>
          A
        </button>
        <button css={button} onClick={() => tryLuck(false)}>
          B
        </button>
      </div>
    </div>
  );
}
