// shortLib.js

// ss: String, not selector
const $$Id0 = (ss) => {
  return document.getElementById(ss);
};
const $$Id = (ss) => {
  ss = ss.substring(0, 1) === '#' ? ss.substring(1) : ss;
  return document.getElementById(ss);
};

// selector
const $$q = (sel) => document.querySelector(sel);
const $$qAll = (sel) => document.querySelectorAll(sel);

const $$ocL = (o, cN = 'is-active') => o.classList.toggle(cN);

const $$ocLm = (
  o,
  { trgt, cN = 'is-active' },
  mN = 'toggle',
  stopP = false
) => {
  $$oe(o, (e) => {
    if (stopP) e.stopPropagation();
    // trgt.classList.toggle(cN);
    trgt.classList[mN](cN);
  });
};

const $$oAcLm = (
  o,
  { trgts, cN = 'is-active' }, // trgts: array
  mN = 'toggle',
  stopP = false
) => {
  $$oe(o, (e) => {
    if (stopP) e.stopPropagation();
    // trgt.classList.toggle(cN);
    trgts.forEach((t) => t.classList[mN](cN));
  });
};

const $$de = (f) => {
  document.addEventListener('DOMContentLoaded', f);
};

const $$ogA = (o, ss) => o.getAttribute('data-' + ss);

const $$oe = (o, f) => {
  o.addEventListener('click', f);
};

const $$oes = (o, f) => {
  o.addEventListener('submit', f);
};

const $$qoe = (ss, f) => {
  $$q(ss).addEventListener('click', f);
};

const $$qAe = (sel, f) => {
  $$qAll(sel).forEach((o) => o.addEventListener('click', f));
};

const $$hbs = (ss, context) => Handlebars.compile(ss)(context);
const $$hbP = (ssP, context) => Handlebars.templates[ssP](context);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
