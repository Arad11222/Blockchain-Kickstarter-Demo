import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x082E650e19d6748175984209bBBf06BF7B10B569'
);

export default instance;