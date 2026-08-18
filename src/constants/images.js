import chef from '../assets/chef.png';
import G from '../assets/G.png';
import gallery01 from '../assets/gallery01.png';
import gallery02 from '../assets/gallery02.png';
import gallery03 from '../assets/gallery03.png';
import gallery04 from '../assets/gallery04.png';
import knife from '../assets/knife.png';
import logo from '../assets/logo.png';
import overlaybg from '../assets/overlaybg.png';
import spoon from '../assets/spoon.svg';
import award01 from '../assets/award01.png';
import award02 from '../assets/award02.png';
import award03 from '../assets/award03.png';
import award05 from '../assets/award05.png';
import sign from '../assets/sign.png';
import quote from '../assets/quote.png';
import olivebeach from '../assets/olivebeach.png';

const images = {
  // ── Large images ──────────────────────────────────────────────────────────
  // Served as static files from /public/images/ — NOT bundled by webpack.
  // This removes ~18 MB from the JS bundle and lets the browser cache them
  // separately at the CDN level.
  bg: '/images/bg.png',
  welcome: '/images/welcome.png',
  findus: '/images/findus.png',
  laurels: '/images/laurels.png',
  menu: '/images/menu.png',

  // ── Small images ──────────────────────────────────────────────────────────
  // Still bundled via webpack (all under 300 KB — acceptable).
  chef,
  G,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  knife,
  logo,
  overlaybg,
  spoon,
  award01,
  award02,
  award03,
  award05,
  sign,
  quote,
  olivebeach,
};

export default images;
