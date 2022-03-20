
const web3 = new Web3();// u should pass a URL with API key if u use a Web 3 API Provider 
fetch('https://ethereum-api.xyz/account-balance?address=0xd7d30AB3df1b7bdDc47D2C7028844732447a3491&chainId=1') // i used a simple basic API Instead for easy publishing on github
    .then(response => response.json())
    .then(data => {

        a = web3.utils.fromWei(data.result.balance, 'ether')

        console.log(a)


    });