// shortLib$$.js

// ss: String, not selector
export const Id0 = (ss) => {
  return document.getElementById(ss);
};
export const Id = (ss) => {
  ss = ss.substring(0, 1) === '#' ? ss.substring(1) : ss;
  return document.getElementById(ss);
};

// selector
export const q = (sel) => document.querySelector(sel);
// export const $$q = (sel) => document.querySelector(sel);
// module.exports = $$q = (sel) => document.querySelector(sel);
export const qAll = (sel) => document.querySelectorAll(sel);

export const de = (f) => {
  document.addEventListener('DOMContentLoaded', f);
};

export const ogA = (o, ss) => o.getAttribute('data-' + ss);

export const oe = (o, f) => {
  o.addEventListener('click', f);
};

export const oes = (o, f) => {
  o.addEventListener('submit', f);
};

export const qoe = (ss, f) => {
  $$q(ss).addEventListener('click', f);
};

export const qAe = (sel, f) => {
  $$qAll(sel).forEach((o) => o.addEventListener('click', f));
};

export const ocL = (o, ss = 'is-active') => o.classList.toggle(ss);

export const hbs = (ss, context) => Handlebars.compile(ss)(context);
export const hbP = (ssP, context) => Handlebars.templates[ssP](context);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const cn = (ss) => document.getElementsByClassName(ss);
export const cn1 = (ss) => document.getElementsByClassName(ss)[0];

export const tn = (ss) => document.getElementsByTagName(ss);
export const tn1 = (ss) => document.getElementsByTagName(ss)[0];

export const na = (ss) => document.getElementsByName(ss);
export const na1 = (ss) => document.getElementsByName(ss)[0];

export const sBq = (btnId, { target, changeClass }, toggle) =>
  setBtn_q(btnId, { target, changeClass }, toggle);

export const sBcn1 = (btnId, { target, changeClass }, toggle) =>
  setBtn_cn1(btnId, { target, changeClass }, toggle);

export const sB = (btnId, { target, changeClass }, toggle) =>
  setBtn_TargetobjToggle(btnId, { target, changeClass }, toggle);

export const sBe_target = (e_target, btnId, { target, changeClass }, toggle) => {
  setBtn_eTargetobjToggle(e_target, btnId, { target, changeClass }, toggle);
};

const setBtn_q = function (
  btnId,
  { target, changeClass = 'is-active' },
  toggle = 'toggle'
) {
  $$q(btnId).addEventListener('click', function (e) {
    // console.log('e.target:', e.target);
    $$q(target).classList.toggle(changeClass);
  });
};

const $$oeSW = (
  btnId,
  { trgt, changeClass = 'is-active' },
  toggle = 'toggle',
  stopP = false
) => {
  switch (toggle) {
    case 'add':
      if (stopP === true)
        $$oe(btnId, function (e) {
          e.stopPropagation();
          trgt.classList.add(changeClass);
        });
      else $$oe(btnId, () => trgt.classList.add(changeClass));
      break;
    case 'remove':
      if (stopP === true)
        $$oe(btnId, function (e) {
          e.stopPropagation();
          trgt.classList.remove(changeClass);
        });
      else $$oe(btnId, () => trgt.classList.remove(changeClass));
      break;
    default:
      if (stopP === true)
        $$oe(btnId, (e) => {
          console.log(
            'e.target',
            e.target
            // e.target.textContent, // 空白文字も含む
            // e.target.innerText == e.target.innerText.trim()
          );
          console.log($$ogA(e.target, 'item'));
          // console.log(e.target.getAttribute('data-item'));

          e.stopPropagation();
          trgt.classList.toggle(changeClass);
        });
      // $$oe(btnId, function (e) {
      //   e.stopPropagation();
      //   trgt.classList.toggle(changeClass);
      // });
      else $$oe(btnId, () => trgt.classList.toggle(changeClass));
      break;
  }
};

const $$qoeSW = (
  btnId,
  { target, changeClass = 'is-active' },
  toggle = 'toggle'
) => {
  const trgt = $$q('target');

  switch (toggle) {
    case 'add':
      $$qe(btnId, () => trgt.classList.add(changeClass));
      break;
    case 'remove':
      $$qe(btnId, () => trgt.classList.remove(changeClass));
      break;
    default:
      $$qe(btnId, () => trgt.classList.toggle(changeClass));
      break;
  }
};

const setBtn_cn1 = function (
  btnId,
  { target, changeClass = 'is-active' },
  toggle = 'toggle'
) {
  $$cn1(btnId).addEventListener('click', function (e) {
    // console.log('e.target:', e.target);
    $$cn1(target).classList.toggle(changeClass);
  });
};

///////////////////////////////////////
// btnId: id or class
const setBtn_TargetobjToggle = function (
  btnId,
  { target, changeClass = 'is-active' },
  toggle = 'toggle'
) {
  // btnId: id or class
  let btnToggle = $$Id(btnId);
  if (!btnToggle) {
    btnToggle = $$cn1(btnId);
    if (!btnToggle) {
      console.log(`Can't find btnId: id nor class: ${btnToggle}`);
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
    trgt = $$cn1(target);
    if (!trgt) {
      console.log(`Can't find target: id nor class: ${trgt}`);
      return;
    }
  }

  switch (toggle) {
    case 'add':
      btnToggle.addEventListener('click', function () {
        trgt.classList.add(changeClass);
      });
      break;
    case 'remove':
      btnToggle.addEventListener('click', function () {
        trgt.classList.remove(changeClass);
      });
      break;
    default:
      btnToggle.addEventListener('click', function (e) {
        console.log('e.target:', e.target);
        trgt.classList.toggle(changeClass);
      });
      break;
  }
};

const swT = (btnToggle, {trgt, changeClass}, toggle) => {
    switch (toggle) {
    case 'add':
      $$oeq(btnToggle, () => {
        trgt.classList.add(changeClass);
      });
      break;
    case 'remove':
      btnToggle.addEventListener('click', function () {
        trgt.classList.remove(changeClass);
      });
      break;
    default:
      btnToggle.addEventListener('click', function (e) {
        // console.log('e.target:', e.target);
        trgt.classList.toggle(changeClass);
      });
      break;
  }
}

const setBtn_eTargetobjToggle = function (
  e_target,
  btnId,
  { target, changeClass = 'is-active' },
  toggle = 'toggle'
) {
  // e_target: id or class
  let e_Target = $$Id(e_target);
  if (!e_Target) {
    e_Target = $$cn1(e_target);
    if (!e_Target) {
      console.log(`Can't find exId: id nor class: ${e_Target}`);
      return;
    }
  }
  // btnId: id or class
  let btnToggle = $$Id(btnId);
  if (!btnToggle) {
    btnToggle = $$cn1(btnId);
    if (!btnToggle) {
      console.log(`Can't find btnId: id nor class: ${btnToggle}`);
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
    trgt = $$cn1(target);
    if (!trgt) {
      console.log(`Can't find target: id nor class: ${trgt}`);
      return;
    }
  }

  switch (toggle) {
    case 'add':
      btnToggle.addEventListener('click', function () {
        if (e.target === e_Target) {
          trgt.classList.add(changeClass);
        }
      });
      break;
    case 'remove':
      btnToggle.addEventListener('click', function () {
        if (e.target === e_Target) {
          trgt.classList.remove(changeClass);
        }
      });
      break;
    default:
      btnToggle.addEventListener('click', function (e) {
        console.log('e.target:', e.target);
        console.log('e_Target:', e_Target);
        if (e.target === e_Target) {
          trgt.classList.toggle(changeClass);
        }
      });
      break;
  }
};
