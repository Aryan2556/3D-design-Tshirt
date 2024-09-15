import { proxy } from 'valtio';

const state = proxy({
  intro:true,
  color:'#090917',
  isLogoTexture:true,
  isFullTexture:false,
  logoDecal:'./Phoenix.png',
  fullDecal:'./threejs.png',

});

export default state;