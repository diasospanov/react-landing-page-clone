/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
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
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  list-style-type: none;
  gap: 25px;
`;

const downloadLinkStyles = css`
  border: 2px solid #161616;
  padding: 7px 15px;
  border-radius: 25px;
  font-weight: 700;
`;

const sectionOneStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-weight: 300;
    font-size: 18px;
  }
`;

const manWithPlane = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  margin: 0;
  margin-top: 0;
`;

const h1Styles = css`
  font-family: 'PT Serif Caption', sans-serif;
  font-size: 65px;
  font-weight: 400;
  margin: 0;
  padding: 10px;
  border: 0;
`;

const macAndVideoStyles = css`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const macStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-size: 19px;
  font-weight: 700;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 35px;
  vertical-align: baseline;
  gap: 15px;
`;

const underMacParagraph = css`
  display: flex;
  color: inherit;
  text-decoration: none;
  font-weight: 200;
  font-size: 14px;
  vertical-align: baseline;
`;

const videoStyles = css`
  display: flex;
  align-self: auto;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  vertical-align: baseline;
  gap: 15px;
  margin-bottom: 35px;
`;

const pBeforeSectionTwoStyles = css`
  font-weight: 300;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 26px 0;
  /* ::before {
    display: block;
    background-image: url('https://wunderbucket.io/img/pattern.png?version=c5a55f285d805811dbd500e645586c37');
    width: 800px;
    background-position: bottom;
    top: 18;
    height: 3px;
    position: absolute;
    content: '';
    transform: rotate(-1deg);
  } */
`;

const sectionTwoStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sectionTwoImageStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
  }
`;

const subSectionTwoStyles = css`
  > h2 {
    display: block;
    /* align-items: center;
    justify-content: center; */
    font-family: 'PT Serif Caption', sans-serif;
    font-size: 25px;
    font-weight: 400;
  }

  > p {
    display: block;
    font-weight: 300;
    font-size: 18px;
  }
`;

const footerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`;

const webDesignerStyles = css`
  display: block;
  /* align-items: center;
  justify-content: space-between; */
  text-decoration: none;
  font-family: inherit;
  color: inherit;

  > a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }
`;

const footerNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  list-style-type: none;
  gap: 50px;
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
      <section css={sectionOneStyles}>
        <a href="/#">
          <img
            src="https://wunderbucket.io/img/hero@2x.png?version=6eb84737808a603b9b4fc9faaba3f87d
"
            alt="A man flies a paper airplane"
            css={manWithPlane}
          />
        </a>
        <h1 css={h1Styles}>
          Turn local folders
          <br />
          into websites
        </h1>
        <p>
          For designers & developers who want fast, secure websites without
          <br />
          command lines, or configs. It’s like if Dropbox had a cute little
          static
          <br />
          hosting service baby.
        </p>
      </section>
      <div css={macAndVideoStyles}>
        <div>
          <a href="/#" css={macStyles}>
            <img
              src="https://wunderbucket.io/img/apple-logo.svg?version=c00abf15cc86c91ecc3bc722fc4a2b94"
              alt="Download for Mac link"
            />
            Download for Mac
          </a>
          <p css={underMacParagraph}>Available on Setapp & the App Store</p>
        </div>
        <div>
          <a href="/#" css={videoStyles}>
            <img
              src="https://wunderbucket.io/img/play.svg?version=4fd9564999a4c8a470b4f2f2bc4f2cc4"
              alt="See how it works link"
            />
            See how it works
          </a>
          <p css={underMacParagraph} />
        </div>
      </div>
      <div css={pBeforeSectionTwoStyles}>
        <p>
          Here's some of the highlights of the features you get when you build
          sites
          <br />
          with Wunderbucket.
        </p>
      </div>
      <section css={sectionTwoStyles}>
        <div css={sectionTwoImageStyles}>
          <img
            src="https://wunderbucket.io/img/cloud-hosted.png?version=cae378b9f7e1cceb9d18c8649f0e9eae"
            alt="A man with a baloon"
          />
        </div>
        <div css={subSectionTwoStyles}>
          <h2>Cloud Hosted</h2>
          <p>
            All your content is hosted on Amazon's Cloud. This is the
            <br />
            infrastructure that powers the world's biggest websites, not a<br />
            server running out of a garage. You're in good hands.
          </p>
        </div>
      </section>
      <footer css={footerStyles}>
        <p css={webDesignerStyles}>
          © 2022
          <a href="https://smmall.site/">
            <b> Smmall Inc.</b>
          </a>
          <br />
          Illustrations by
          <a href="https://humanities.studio/">
            <b> Humanities</b>
          </a>
        </p>
        <ul css={footerNavigationStyles}>
          <li>About</li>
          <li>Blog</li>
          <li>Docs</li>
          <li>System Status</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
