// Libraries
import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

// Images
import welcomeHero from 'images/welcome-hero.svg';
import metamaskLogo from 'images/metamask-logo.svg';
import parityLogo from 'images/parity-logo.png';
import ledgerNanoLogo from 'images/ledger-nano-logo.png';
import trezorLogo from 'images/trezor-logo.png';

class Landing extends React.Component {
  render() {
    function PrevButton(props) {
      const { className, style, onClick } = props;
      return (
        <svg className={className} style={{ ...style }} onClick={onClick} enableBackground="new 0 0 240.823 240.823" viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
          <path d="m57.633 129.007 108.297 108.261c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.297 108.26c-4.679 4.691-4.679 12.511.012 17.191z"/>
        </svg>
      );
    }
    function NextButton(props) {
      const { className, style, onClick } = props;
      return (
        <svg className={className} style={{ ...style }} onClick={onClick} enableBackground="new 0 0 240.823 240.823" viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
          <path d="m183.189 111.816-108.297-108.261c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z" />
        </svg>
      );
    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
    };
    return (
      <div className="landing">

        <div className="landing-body">
          <h1>Welcome to the<br />Collateralized Debt Position Portal</h1>
          <Slider {...settings} className="landing-slider">
            <div className="first-slide">
              <div style={ {textAlign: "center"} }>
                <p className="align-center">
                  This is the place to generate Dai!<br />
                  Use this dapp from the Maker team to manage<br />
                  depositing of collateral and generation of Dai.
                </p>
                <img className="preview" src={ welcomeHero } alt="CDP Portal" />
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>01.<span className="line"></span>THE CONCEPT</h1>
                <h2 className="sm">What is a Collateralized Debt Position (CDP)?</h2>
                <p>A CDP enables the generation of DAI stablecoins against the collateral (currently ETH) that you lock up in the CDP until you pay back the DAI you generated.</p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>02.<span className="line"></span>THE BENEFITS</h1>
                <h2>What are the benefits of opening a CDP?</h2>
                <p>You can get liquidity by generating DAI stablecoins without giving up ownership of your collateral (as long as you make sure that the CDP holds enough collateral to cover the value of the DAI stablecoins). When using ETH as collateral, the value of the locked up collateral must always be more than 150% of the amount of DAI stablecoins that you generate.</p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>03.<span className="line"></span>THE SETUP</h1>
                <h2>How does it work?</h2>
                <p>You determine how much ETH you want to lock up in the CDP. You generate DAI stablecoins against the ETH you locked up, and spend them as you wish. You pay back the DAI stablecoins when you no longer need the liquidity, together with a stability fee, and then you can withdraw the collateral that you locked up.</p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>04.<span className="line"></span>THE RISKS</h1>
                <h2>Is there any risk involved in creating a CDP?</h2>
                <p>As long as you monitor your CDP and make sure that the value of the locked up ETH is always more than 150% of the DAI stablecoins that you have generated, your CDP will not be liquidated. If the value of the collateral comes close to 150% you can add more collateral, or pay back some of the debt. If the value of the locked up collateral falls below 150% then your CDP will be liquidated. This means that your collateral is being sold by the system in order to cover the value of the Dai stablecoins that you generated. Any leftover collateral is returned to your CDP so you can withdraw it. See the <Link to="/terms">Terms of Service</Link> for risks involved.</p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>05.<span className="line"></span>THE COST</h1>
                <h2>Does it cost anything?</h2>
                <p>There is a stability fee on the Dai stablecoins of 0.5% per year. You pay the fee with MKR when you pay back the Dai. If your CDP becomes liquidated, then there is a 13% liquidation penalty that will be subtracted when the locked collateral is sold.</p>
              </div>
            </div>
          </Slider>

          <div className="getting-started">
            <h1>What do I need to get started?</h1>
            <p>Connect one of the four wallets below to automatically connect to the CDP Portal. For more information on these wallets, use the links below. If you are an advanced user you can also use the MakerDAO command line interface (CLI) to create CDPs.</p>
            <p className="align-center"><Link to="/help" className="faq">See FAQs for additional information on wallets</Link></p>
            <ul>
              <li><a href="https://metamask.io/"><img src={ metamaskLogo } alt="Get MetaMask" /><div>Get MetaMask</div></a></li>
              <li><a href="https://www.parity.io/"><img src={ parityLogo } alt="Get Parity" /><div>Get Parity</div></a></li>
              <li><a href="https://www.ledgerwallet.com/products/ledger-nano-s"><img src={ ledgerNanoLogo } alt="Get Ledger Nano S" /><div>Get Ledger Nano S</div></a></li>
              <li><a href="https://trezor.io/"><img src={ trezorLogo } alt="Get Trezor" /><div>Get Trezor</div></a></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;
