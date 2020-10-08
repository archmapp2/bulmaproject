// archLib.js

// ss: String, not selector
const $$Id = (ss) => document.getElementById(ss);
const $$cn = (ss) => document.getElementsByClassName(ss);
const $$cn1 = (ss) => document.getElementsByClassName(ss)[0];

const $$q = (ss) => document.querySelector(ss);
const $$qAll = (ss) => document.querySelectorAll(ss);

const $$ocL = (o, ss = 'is-active') => o.classList.toggle(ss);

let setBtn_TargetobjExec;
const $$sB = (btnId, { target, targetClass }, exec) =>
  setBtn_TargetobjExec(btnId, { target, targetClass }, exec);

const $$de = (f) => {
  document.addEventListener('DOMContentLoaded', f);
};

const $$oe = (o, f) => {
  o.addEventListener('click', f);
};

const $$qoe = (ss, f) => {
  $$q(ss).addEventListener('click', f);
};

const $$qAe = (ss, f) => {
  $$qAll(ss)[0].addEventListener('click', f);
};

// const $$ = () => {

// }

// ///////////////////////////////////////
// btnId: id or class
// targetObj {target, targetClass = 'is-active'}
// exec
setBtn_TargetobjExec = function (
  btnId,
  { target, targetClass = 'is-active' },
  exec = 'toggle'
) {
  // btnId: id or class
  let btnToggle = $$Id(btnId);
  if (!btnToggle) {
    btnToggle = $$cn1(btnId)[0];
    if (!btnToggle) {
      console.log(`Can't find btnId:id nor class: ${btnToggle}`);
      return;
    }
  }

  if (!target) {
    console.log(`Not exist target: ${target}`);
    return;
  }

  // target: id or class
  let trgt = $$Id(target);
  if (!trgt) {
    trgt = $$cn1(target)[0];
    if (!trgt) {
      console.log(`Can't find target:id nor class: ${trgt}`);
      return;
    }
  }

  switch (exec) {
    case 'add':
      btnToggle.addEventListener('click', function () {
        trgt.classList.add(targetClass);
      });
      break;
    case 'remove':
      btnToggle.addEventListener('click', function () {
        trgt.classList.remove(targetClass);
      });
      break;
    default:
      btnToggle.addEventListener('click', function () {
        trgt.classList.toggle(targetClass);
      });
      break;
  }
};
