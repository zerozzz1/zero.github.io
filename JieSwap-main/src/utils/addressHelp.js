// import addresses from '@/config/constants/contracts.js';
const addresses = {
  jackRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  jackFactory: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
  weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
};

export const getAddress = address => {
  return address;
};

export const getJackFactoryAddress = () => {
  return getAddress(addresses.jackFactory);
};

export const getJackRouterAddress = () => {
  return getAddress(addresses.jackRouter);
};

export const getWethAddress = () => {
  console.log(addresses.weth, 'addresses.weth');
  return getAddress(addresses.weth);
};
