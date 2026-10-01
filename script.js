(() => {
  "use strict";
  const config = window.WOOF_CONFIG || {};
  const dialog = document.getElementById("purchase-dialog");
  const messages = {
    "1 kg": "先从一小袋开始，认识新的开饭时光。",
    "2.5 kg": "把心意留给日常，每一次开饭都有期待。",
    "6 kg": "把满满的爱带回家，陪它度过更多平凡的好日子。"
  };
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll('input[name="size"]').forEach(input => {
    input.addEventListener("change", () => {
      document.getElementById("selection-note").textContent = messages[input.value];
    });
  });
  let purchaseUrl = null;
  if (typeof config.purchaseUrl === "string" && config.purchaseUrl.trim()) {
    try {
      const candidate = new URL(config.purchaseUrl);
      if (candidate.protocol === "https:" || candidate.protocol === "http:") purchaseUrl = candidate.href;
    } catch { /* Invalid or missing links keep the honest coming-soon state. */ }
  }
  if (purchaseUrl) document.getElementById("purchase-button").firstChild.textContent = "前往官方购买 ";
  document.getElementById("purchase-button").addEventListener("click", () => {
    if (purchaseUrl) { window.location.assign(purchaseUrl); return; }
    document.getElementById("chosen-size").textContent = document.querySelector('input[name="size"]:checked').value;
    document.getElementById("purchase-message").textContent = config.comingSoonMessage || "购买渠道即将上线，敬请期待。";
    dialog.showModal();
  });
  ["dialog-close", "dialog-confirm"].forEach(id => document.getElementById(id).addEventListener("click", () => dialog.close()));
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
