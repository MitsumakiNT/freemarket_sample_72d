//下記if構文は"users/:id/"のみにJSを適用させるためのもの。
if (document.location.href.match(/\/users\/\d+/)) {
  //UserMyPageのタブ機能
  document.addEventListener('DOMContentLoaded', () => {
    let mypageTabHeadSell = document.getElementById("mypage-tab__list-new");
    let mypageTabHeadTransaction = document.getElementById("mypage-tab__list-transaction");
    let mypageTabHeadSold = document.getElementById("mypage-tab__list-old");
    //Tab部分のactiveと非activeの操作
    mypageTabHeadSell.addEventListener('click',() => {
      tabAction01();
    });
    mypageTabHeadTransaction.addEventListener('click',() => {
      tabAction02();
    });
    mypageTabHeadSold.addEventListener('click',() => {
      tabAction03();
    });
    function tabAction () {
      let activeTab = document.getElementById("tab__content-new");
      let inactiveTab = document.getElementById("tab__content-old");
      mypageTabHeadSell.parentNode.classList.toggle("tab-active");
      mypageTabHeadSold.parentNode.classList.toggle("tab-active");
      activeTab.classList.toggle("display--none");
      inactiveTab.classList.toggle("display--none");
    let tabContentNew = document.getElementById("tab__content-new");
    let tabContentTransaction = document.getElementById("tab__content-transaction");
    let tabContentOld = document.getElementById("tab__content-old");
    function tabAction01 () {
      //let tabActiveThree = document.getElementsByClassName("tab-active-three");
      mypageTabHeadSell.parentNode.classList.add("tab-active-three");
      mypageTabHeadTransaction.parentNode.classList.remove("tab-active-three");
      mypageTabHeadSold.parentNode.classList.remove("tab-active-three");
      tabContentNew.classList.remove("display--none");
      tabContentTransaction.classList.add("display--none");
      tabContentOld.classList.add("display--none");
      };
    function tabAction02 () {
      mypageTabHeadSell.parentNode.classList.remove("tab-active-three");
      mypageTabHeadTransaction.parentNode.classList.add("tab-active-three");
      mypageTabHeadSold.parentNode.classList.remove("tab-active-three");
      tabContentNew.classList.add("display--none");
      tabContentTransaction.classList.remove("display--none");
      tabContentOld.classList.add("display--none");
    };
    };
  });
  //BG画像のDOM
  const buildBGImg = (url) => {
    const html =`
    <img class="bg-image" id="new-bg-image" src="${url}" width="700px" height="190px">
    `
    return html;
  }
  const buildIconImg = (url) => {
    const html = `
    <img class="user-image" id="new-user-icon" src="${url}">
    `
    return html;
  }

  delegateEvent(document,'change','.bg-img-file',function(e) {
    let previousBGImage = document.getElementById('new-bg-image');
    let userBGImage = document.getElementById('user-bg-image');
    const file =  e.target.files[0];
    const blobURL = window.URL.createObjectURL(file);
    previousBGImage.remove();
    userBGImage.insertAdjacentHTML('afterbegin',buildBGImg(blobURL));
  });

  delegateEvent(document, 'change', '.icon-img-file', function(e) {
    let previousUserIcon = document.getElementById('new-user-icon');
    let userIcon = document.getElementById('user-icon');
    const file =  e.target.files[0];
    const blobURL = window.URL.createObjectURL(file);
    previousUserIcon.remove();
    userIcon.insertAdjacentHTML('afterbegin',buildIconImg(blobURL));
  });

  delegateEvent(document, 'change', '.main__content__user', function(e){
    
  })


//EventDelegation関数
function matches(elm, selector) {
  let matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
  i = matches.length;
  while (--i >= 0 && matches.item(i) !== elm) ;
  return i > -1;
}

function delegateEvent(root, eventType, selector, listener) {
  root.addEventListener(eventType, function(e) {
    let el = e.target;
    while (el && el !== root) {
      if (matches(el, selector)) {
        listener.call(el, e, el);
        break;
      }
      el = el.parentNode;
    }
  }, false);
}

  }