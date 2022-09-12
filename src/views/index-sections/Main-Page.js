
/*eslint-disable*/
import React from "react";
import classnames from "classnames";
import { init, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import Onboard from '@web3-onboard/core';
import coinbaseWalletModule from '@web3-onboard/coinbase';
import walletConnectModule from '@web3-onboard/walletconnect';
import { ethers } from 'ethers';
import Tree from "./Tree";
import "../../assets/css/custom.css"



// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

const injected = injectedModule();
const rpcApiKey = 'ALCHEMY_KEY' || 'INFURA_KEY'
// const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcApiKey}` || `https://mainnet.infura.io/v3/${rpcApiKey}`
const rpcUrl = `https://eth-ropsten.alchemyapi.io/v2/${rpcApiKey}` || `https://ropsten.infura.io/v3/${rpcApiKey}`

// initialize Onboard
init({
  wallets: [injected],
  chains:[
    {
      id: '0x3',
      token: 'tROP',
      label: 'Ethereum Ropsten Testnet',
      rpcUrl
    }
  ]
})

const coinbaseWalletSdk = coinbaseWalletModule();
const walletConnect = walletConnectModule();

const onboard = Onboard({
  wallets: [
    injected,
    coinbaseWalletSdk,
    walletConnect
  ],
  chains:[
    {
      id: '0x3',
      token: 'tROP',
      label: 'Ethereum Ropsten Testnet',
      rpcUrl
    }
  ]
})


// core components

function MainPage() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }

  async function connectWallet() {
    const connectedWallets = await onboard.connectWallet();
    console.log(connectedWallets);
  }

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  return (
    <div>
      <div>

      
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="ReFi"
          >
            Kilimanjaro
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href=""
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> DOCS
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                // disabled={connecting} onClick={() => (wallet ? disconnect() : connect())}
                disabled={connecting} onClick = {() => connectWallet()}
                className="btn-round"
                color="danger"
                href=""
                target="_blank"
              >
                {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </div>
    
    <Tree />
    </div>
  );
  
  
}

export default MainPage;
