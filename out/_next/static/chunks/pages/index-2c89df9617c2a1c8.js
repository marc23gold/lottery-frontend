(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(54510)}])},37821:function(e,t,n){"use strict";var a=n(37917),s=n(63021);e.exports={contractAddresses:a,abi:s}},54510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(85893),s=n(9008),r=n.n(s);n(25675);var i=n(35801),u=n.n(i),o=n(41942);function c(){return(0,a.jsxs)("div",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-blog text-3xl",children:"Decentralized Lottery"}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(o.cg,{moralisAuth:!1})})]})}function p(e,t,n,a,s,r,i){try{var u=e[r](i),o=u.value}catch(c){n(c);return}u.done?t(o):Promise.resolve(o).then(a,s)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var r=e.apply(t,n);function i(e){p(r,a,s,i,u,"next",e)}function u(e){p(r,a,s,i,u,"throw",e)}i(void 0)})}}var f=n(70655),d=n(83078),y=n(37821),m=n(67294),b=n(35553);function _(){var e,t=(0,d.Nr)(),n=(t.Moralis,t.chainId),s=t.isWeb3Enabled,r=parseInt(n),i=r in y.contractAddresses?y.contractAddresses[r][0]:null,u=(0,m.useState)("0"),c=u[0],p=u[1],_=(0,m.useState)("0"),h=_[0],g=_[1],v=(0,m.useState)("0"),x=v[0],N=v[1],w=(0,o.aa)(),j=(0,d.JX)({abi:y.abi,contractAddress:i,functionName:"enterRaffle",params:{},msgValue:c}),E=j.runContractFunction,R=j.isLoading,C=j.isFetching,k=(0,d.JX)({abi:y.abi,contractAddress:i,functionName:"getEntranceFee",params:{}}).runContractFunction,F=(0,d.JX)({abi:y.abi,contractAddress:i,functionName:"getNumberOfPlayers",params:{}}).runContractFunction,H=(0,d.JX)({abi:y.abi,contractAddress:i,functionName:"getRecentWinner",params:{}}).runContractFunction;function S(){return M.apply(this,arguments)}function M(){return(M=l(function(){var e,t,n;return(0,f.__generator)(this,function(a){switch(a.label){case 0:return[4,k()];case 1:return e=a.sent().toString(),[4,F()];case 2:return t=a.sent().toString(),[4,H()];case 3:return n=a.sent().toString(),p(e),g(t),N(n),[2]}})})).apply(this,arguments)}(0,m.useEffect)(function(){s&&S()},[s]);var A=(e=l(function(e){return(0,f.__generator)(this,function(t){switch(t.label){case 0:return[4,e.wait(1)];case 1:return t.sent(),P(e),S(),[2]}})}),function(t){return e.apply(this,arguments)}),P=function(){w({type:"info",message:"Transaction Complete",title:"Tx Notification",position:"topR",icon:"bell"})};return(0,a.jsxs)("div",{className:"p-5",children:["Hello, this is the lottery entrance",i?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:big-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:l(function(){return(0,f.__generator)(this,function(e){switch(e.label){case 0:return[4,E({onSuccess:A,onError:function(e){return console.log(e)}})];case 1:return e.sent(),[2]}})}),disabled:R||C,children:R||C?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):(0,a.jsx)("div",{children:"Enter Raffle"})}),(0,a.jsxs)("div",{children:["Entrance Fee is: ",b.bM(c,"ether")," ","ETH"]}),(0,a.jsxs)("div",{children:["Number of Players: ",h]}),(0,a.jsxs)("div",{children:["Recent Winner: ",x]})]}):(0,a.jsx)("div",{children:"No Raffle Address Detected"})]})}function h(){return(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"smart contract lottery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c,{}),(0,a.jsx)(_,{})]})}},35801:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"keyHash"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__NotEnoughETHEntered","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"winner","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"5":[],"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);