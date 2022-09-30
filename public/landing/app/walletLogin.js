/* eslint-disable*/

let accountConnected
let isConnected = false
let web3

function setSelectedAccount (account) {
  accountConnected = account
}

function setIsConnected (val) {
  isConnected = val
}

function setWeb3 (web3provider) {
  web3 = web3provider
}

async function connectWallet () {
  const provider = window.ethereum

  if (typeof provider !== 'undefined') {
    await provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        setSelectedAccount(accounts[0])
        setIsConnected(true)
        console.log(`Selected account is ${accounts[0]}`)
      })
      .catch((err) => {
        console.log(err)
      })

    window.ethereum.on('connect', function (accounts) {
      setSelectedAccount(accounts[0])
      console.log(`Selected account is ${accounts[0]}`)
    })

    window.ethereum.on('accountsChanged', function (accounts) {
      setSelectedAccount(accounts[0])
      console.log(`Selected account changed to ${accounts[0]}`)
    })

    window.ethereum.on('disconnect', function (err) {
      setSelectedAccount(null)
      setIsConnected(true)
    })

    const web3 = new Web3(provider)
    setWeb3(web3)

    return web3
  } else {
    throw new Error('No Wallet Provider Detected')
  }
}

async function connectWeb3Modal(){
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // Mikko's test key - don't copy as your mileage may vary
          infuraId: "eb8f287e0eb5eb7d637ae182e64781e6",
        }
      },
  
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_live_99C33FB0A73E72D1"
        }
      }
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();

    if (typeof provider !== 'undefined') {

  
      // provider.on('connect', function (accounts) {
      //   setSelectedAccount(accounts[0])
      //   console.log(`Selected account is ${accounts[0]}`)
      // })
  
      // provider.on('accountsChanged', function (accounts) {
      //   setSelectedAccount(accounts[0])
      //   console.log(`Selected account changed to ${accounts[0]}`)
      // })
  
      // provider.on('disconnect', function (err) {
      //   setSelectedAccount(null)
      //   setIsConnected(true)
      // })

  
  
      const web3 = new Web3(provider)
      setWeb3(web3)
      const accounts = await web3.eth.getAccounts()
      setSelectedAccount(accounts[0])
      console.log(`Selected account is ${accounts[0]}`)
      setIsConnected(true)
      return web3
    } else {
      throw new Error('No Wallet Provider Detected')
    }
}

async function getAndVerifySignature () {
  const signature = await web3.eth.personal.sign("Web3me Login", accountConnected)
  console.log(signature)
  // const selectedChain = document.querySelector('input[name="chain"]:checked').value;
  console.log(selectedChain)
  window.location.href= `/me/dashboard/${selectedChain}/${accountConnected}`
}



document.getElementById('connect-wallet-button').addEventListener('click', async (e) => {
  e.preventDefault()
    console.log('Connecting Wallet')
    // await connectWallet()
    await connectWeb3Modal()
    console.log('Verifying Signature')
    await getAndVerifySignature()

})


$('.dropdown-menu li a').click(function() {
  var text = $(this).text(); // get text of the clicked item
  $(".dropdown-toggle").text(text); // set text to the button (dropdown)
  selectedChain=$(this).attr('value')
});


let selectedChain = "ETHEREUM"
