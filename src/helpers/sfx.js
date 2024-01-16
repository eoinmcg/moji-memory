import {zzfx} from 'zzfx';
import Storage from  '../helpers/storage';

export default function sfx(code) {
  if(!Storage.get('audio')) return;
  zzfx(...codes[code]);
}

const codes = {
  click: [2,.8,999,,,,,1.5,,.3,-99,.1,1.63,,,.11,.22],
  match: [,,539,0,.04,.29,1,1.92,,,567,.02,.02,,,,.04],
  nope: [,,537,.02,.02,.22,1,1.59,-6.98,4.97],
  win: [,,80,.3,.4,.7,2,.1,-0.73,3.42,-430,.09,.17,,,,.19],
  lose: [,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17],
}
