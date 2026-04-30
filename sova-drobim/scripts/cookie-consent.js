var t="cookie-consent-accepted";var n=()=>{localStorage.getItem(t)||setTimeout(()=>{document.body.insertAdjacentHTML("beforeend",`
      <div class="cookie-consent" id="cookie-consent">
        <p class="cookie-consent__text">
          \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C <strong>cookie</strong> \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430.
          \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0430\u0439\u0442, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0435\u0439
          <a class="cookie-consent__link" href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a>.
        </p>
        <button class="cookie-consent__button" id="cookie-consent-accept">\u041E\u041A</button>
      </div>
    `);let e=document.getElementById("cookie-consent"),o=document.getElementById("cookie-consent-accept");e&&e.classList.add("cookie-consent--visible"),o&&o.addEventListener("click",()=>{localStorage.setItem(t,"true"),e.classList.add("cookie-consent--hiding"),setTimeout(()=>e.remove(),600)})},3e3)};n();
