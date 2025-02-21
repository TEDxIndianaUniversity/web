function setval(e,o) {
    document.getElementById(e).value = o;
  }
  try {
  setval('ctl00_cphBody_1772620','***IGNORE*** Patron of');
  setval('ctl00_cphBody_1772920','TEDxIndianaUniversity');
  setval('ctl00_cphBody_1772420','tedxiub+patron@iu.edu');
  setval('ctl00_cphBody_1773120','5134321710');
  setval('ctl00_cphBody_1772220','TEDxIndianaUniversity');
  setval('ctl00_cphBody_1771620','700 N Woodlawn Ave');
  setval('ctl00_cphBody_1767720','Bloomington');
  setval('ctl00_cphBody_1773920_selectedvalue','IN|***');
  setval('ctl00_cphBody_1773920_selectedindex','14');
  setval('ctl00_cphBody_1773520','47408');
  setval('ctl00_cphBody_1772320_HTMLSelect','***');
  document.getElementById('ctl00_cphBody_STUDENT_10_RadioButton').click();
  document.querySelector("label[for='ctl00_cphBody_STUDENT_10_RadioButton']").innerText = "In-Person Transaction (IU Service Fee $9.00)";
  document.querySelector("#ctl00_cphBody_ctl33 h3 > span").innerHTML = "Transaction Type"
  document.querySelector('#ctl00_cphBody_panEventDetails h1').innerHTML = `<div class="tedx"><span class="tedx__logo">TEDx</span><span class="tedx__name">IndianaUniversity</span></div>`;
  document.getElementById('ctl00_cphBody_lblFunctions2').innerText = "If above $9, enter additional value to the item";
  document.querySelector("label[for='ctl00_cphBody_104735']").innerText = "Dollars + $9 IU Fee";
  document.querySelector('#ctl00_cphBody_ctl52 h3 span').innerText = "Transaction Cost";
  } catch {}
  
  try {
    document.querySelector('#ctl00_cphBody_panEventDetails h1').innerHTML = `<div class="tedx"><span class="tedx__logo">TEDx</span><span class="tedx__name">IndianaUniversity</span></div>`;
    // document.getElementById('ctl00_cphBody_cboState_HTMLSelect').value = '***';
    // document.getElementById('ctl00_cphBody_cboCountry_selectedvalue').value = '***';
    document.getElementById('ctl00_cphBody_cboCountry_selectedindex').value = 225;
    document.getElementById('ctl00_cphBody_cboState_HTMLSelect').dispatchEvent(new Event('change'));
    document.getElementById('ctl00_cphBody_chkTermsAndConditions').click();
  } catch (e) {
    console.error(e);
  }