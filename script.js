
const COMPANY = {
  phonesDisplay: ["320 231 0324", "393 660 5518"],
  phoneIntlMain: "393202310324",
  email: "tosetto@tstsecurity.net",
  pec: "tsttosetto@pec.it",
  vat: "05685540287",
  address: "Casale di Scodosia (PD)",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-whatsapp]").forEach(a => a.href = `https://wa.me/${COMPANY.phoneIntlMain}`);
  document.querySelectorAll("[data-company-phones]").forEach(el => el.textContent = COMPANY.phonesDisplay.join(" • "));
  document.querySelectorAll("[data-company-email]").forEach(el => el.textContent = COMPANY.email);
  document.querySelectorAll("[data-company-pec]").forEach(el => el.textContent = COMPANY.pec);
  document.querySelectorAll("[data-company-vat]").forEach(el => el.textContent = COMPANY.vat);
  document.querySelectorAll("[data-company-address]").forEach(el => el.textContent = COMPANY.address);
});
