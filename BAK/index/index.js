import './main.scss';
import './css/style.scss';


import * as $$ from './js/shortBulma';

$$.bulmaMenu('#burger', '#nav-links');
$$.bulmaTabs('.tabs li', '#tab-content > div');
$$.bulmaModal('#signup', '.modal-background', '.modal');

// $$bulmaMenu('#burger', '#nav-links');
// $$bulmaTabs('.tabs li', '#tab-content > div');

// const o = $$.Id('navbar-burgerId');
// const o2 = $$.Id('navMenu');

// $$.oAcLm(o, { trgts: [o, o2] }, 'toggle', true);
// $$.oAcLm(document.body, { trgts: [o, o2] }, 'remove');
