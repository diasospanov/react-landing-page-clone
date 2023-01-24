/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

const logoStyles = css`
  width: 35px;
`;

const companyNameStyles = css`
  height: 25px;
  margin-left: 15px;
`;

const navigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  list-style-type: none;
  gap: 12px;
`;

const downloadLinkStyles = css`
  border: 2px solid #161616;
  padding: 7px 15px;
  border-radius: 25px;
  font-weight: 700;
`;

const manWithPlane = css`
  width: 650px;
  margin: 0;
  margin-top: 0;
`;

const h1Styles = css`
  font-family: 'PT Serif Caption', sans-serif;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <a href="/#">
          <img
            src="https://wunderbucket.io/img/icon-white.svg?version=da05e9af8a2f66cd1fda286eae82c81e"
            alt="Company Logo"
            css={logoStyles}
          />
          {/* </a>
        <a href="/#"> */}
          <img
            src="https://wunderbucket.io/img/wunderbucket-type.svg?version=ebc27272259d6f56c03da7bf2cef1e12"
            alt="Company Name"
            css={companyNameStyles}
          />
        </a>
        <ul css={navigationStyles}>
          <li>Getting Started</li>
          <li>Pricing</li>
          <li className="download" css={downloadLinkStyles}>
            <b>Download</b>
          </li>
        </ul>
      </header>
      <section>
        <a href="/#">
          <img
            src="https://wunderbucket.io/img/hero@2x.png?version=6eb84737808a603b9b4fc9faaba3f87d
"
            alt="A man flies a paper airplane"
            css={manWithPlane}
          />
        </a>
        <h1 css={h1Styles}>Turn local folders into websites</h1>
      </section>
      <div></div>
    </>
  );
}

export default App;
