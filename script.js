var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var tron = document.getElementById("TRON");

var setting = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2CTRON&vs_currencies=usd",
  method: "GET",
  header: {},
};
$.ajax(setting).done(function (response) {
  // console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
  tron.innerHTML = response.tron.usd;
});
