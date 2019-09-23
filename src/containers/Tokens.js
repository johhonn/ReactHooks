import React, { useContext ,useState,useEffect} from 'react';
import axios from 'axios'
import ProductItem from '../components/Products/ProductItem';
//import { useStore } from '../hooks-store/store';
import './Products.css';
import { useStore } from '../hooks-store/store';
let TL=['ETH','ANT',
'BAT',
'BLT',
'BNT',
'C20',
'cDAI',
'CVC',
'DAI',
'DGD',
'DGX',
'DIP',
'FOAM',
'FUN',
'GEN',
'GNO',
'GRID',
'KIN',
'KNC',
'LINK',
'LRC',
'HOT',
'LQD',
'LOOM',
'LPT',
'MANA',
'MATIC',
'MGN',
'MKR',
'MLN',
'MOD',
'NEXO',
'NMR',
'PAX',
'PNK',
'POA20',
'QCH',
'RCN',
'RDN',
'REN',
'REP',
'RHOC',
'RLC',
'RPL',
'SALT',
'sETH',
'SNT',
'SNX',
'SPANK',
'STORJ',
'sUSD',
'TKN',
'TUSD',
'UNI-V1:DAI',
'USDC',
'VERI',
'WBTC',
'WCK',
'WETH',
'XCHF',
'ZRX' ]




  
      
     
    

const Tokens = props => {
    const [tokenlist, updateTokenlist] = useState(TL );
    const [tokenprices, updatetokenprices] = useState('');
    const dispatch = useStore()[1];
    const send=()=>{
      console.log(dispatch)

     // dispatch('UPDATE',tokenprices)
     // dispatch('TOGGLE_FAV', 1);
    }
    
    useEffect(()=>{
    let array=tokenlist.join()
    console.log(array)
    let  url='https://min-api.cryptocompare.com/data/price?fsym=USD'+ '&tsyms='+array
    axios.get(url)  .then( (response)=> {

        console.log(response.data);
        console.log(dispatch)
        updatetokenprices(response.data)
        
       // dispatch('UPDATE',response.data)
        })
     .catch(function (error) {

     console.log(error);
     })
},[tokenlist])

  const list=tokenprices;
  return (
    <div>
    <ul className="products-list">
      {Object.keys(list).map(key => (
        <li>The price of {key} is {1/list[key]}</li>)
      )
      }
    </ul>
    <button onClick={send()}></button>
    </div>
  );
};

export default Tokens;
