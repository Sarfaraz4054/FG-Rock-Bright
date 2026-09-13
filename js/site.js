const PHONE = "9989384625";
const WHATSAPP = "919989384625";
const EMAIL = "vftenterprisess@gmail.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=GH7Q%2BC4%20Secunderabad%2C%20Telangana";

const PRODUCTS = {
  patti: { label: "Patti", gauges: ["2.5 mm", "3.0 mm", "3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm"], extra: false },
  bottom: { label: "Bottom", gauges: ["3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm", "5.5 mm", "6.0 mm", "6.5 mm", "7.0 mm", "7.5 mm"], extra: false },
  perimeter: { label: "Perimeter", gauges: ["2.5 mm", "3.0 mm", "3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm"], extra: false },
  "l-angle": { label: "L-Angle", gauges: ["2.5 mm", "3.0 mm", "3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm"], extra: false },
  stud: { label: "Stud", gauges: ["4.0 mm", "5.0 mm"], extra: true },
  floor: { label: "Floor", gauges: ["4.0 mm", "5.0 mm"], extra: true },
};

function header(active) {
  const link = (href, id, label) =>
    `<a href="${href}" class="${active === id ? "active" : ""}">${label}</a>`;
  return `
    <div class="topbar">
      <div class="wrap">
        <span class="badge-in">Made in India</span>
        <a href="tel:+91${PHONE}">+91 ${PHONE}</a>
      </div>
    </div>
    <header class="header">
      <div class="wrap">
        <a class="brand" href="index.html">
          <img class="mark" src="assets/images/logo.png" alt="FG Rock Bright logo">
          <span>
            <span class="name">FG Rock Bright</span>
            <span class="tag">Supplier &amp; contractor</span>
          </span>
        </a>
        <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
        <nav class="nav">
          ${link("index.html", "home", "Home")}
          ${link("products.html", "products", "Products")}
          ${link("manufacturing.html", "mfg", "Manufacturing")}
          ${link("contact.html", "contact", "Contact")}
          <a class="cta" href="contact.html#quote">Get a quote</a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer>
      <div class="wrap">
        <div class="foot">
          <div>
            <div class="name">FG Rock Bright</div>
            <p style="margin-top:10px">High-quality gypsum channels and custom galvanized steel profiles for ceiling and drywall systems.</p>
          </div>
          <div>
            <strong style="color:#fff">Visit</strong>
            <p style="margin-top:8px">24-677, Ambedkar Nagar, Rajiv Gandhi Karmika Nagar, Jawahar Nagar, Shameerpet, Medchal, Hyderabad, Telangana 500087</p>
            <p>Plus code: GH7Q+C4 Secunderabad</p>
          </div>
          <div>
            <strong style="color:#fff">Talk to us</strong>
            <p style="margin-top:8px"><a href="tel:+91${PHONE}">+91 ${PHONE}</a></p>
            <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
            <p><a href="${MAPS}" target="_blank" rel="noopener">Open in Google Maps</a></p>
          </div>
        </div>
        <p class="copy">© ${new Date().getFullYear()} FG Rock Bright. All rights reserved.</p>
      </div>
    </footer>
    <a class="wa-float" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.7.7-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.1-.3c0-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5 1.5.6 2 .7 2.7.6.4 0 1.3-.2 1.5-.9s.6-1.5.7-1.6.1-.3 0-.4-.3-.1-.6-.2z"/></svg>
    </a>
    <div class="call-bar">
      <a href="tel:+91${PHONE}" class="call">Call</a>
      <a href="contact.html#quote">Inquire</a>
    </div>`;
}

function boot(active) {
  const chrome = document.getElementById("chrome");
  const end = document.getElementById("end");
  if (chrome) chrome.innerHTML = header(active);
  if (end) end.innerHTML = footer();
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  btn?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    btn?.setAttribute("aria-expanded", "false");
  }));
}

function productChoices(selected) {
  return Object.entries(PRODUCTS)
    .map(([key, p]) => `<option value="${key}" ${key === selected ? "selected" : ""}>${p.label}</option>`)
    .join("");
}

function gaugeChoices(key, selected) {
  return PRODUCTS[key].gauges
    .map((g) => `<option ${g === selected ? "selected" : ""}>${g}</option>`)
    .join("");
}

function isStudFloor(key) {
  return key === "stud" || key === "floor";
}

function productLineHtml(preset = "patti") {
  const extra = isStudFloor(preset);
  return `
    <div class="product-line">
      <div class="line-head">
        <span class="line-title">Product</span>
        <button type="button" class="link-btn remove-line">Remove</button>
      </div>
      <div>
        <label>Product</label>
        <select name="product" required>${productChoices(preset)}</select>
      </div>
      <div class="form-row">
        <div>
          <label>Gauge</label>
          <select name="gauge" required>${gaugeChoices(preset)}</select>
        </div>
        <div>
          <label>Quantity</label>
          <input name="qty" type="number" min="1" step="1" inputmode="numeric" required placeholder="e.g. 100">
        </div>
      </div>
      <div class="stud-floor" ${extra ? "" : "hidden"}>
        <div class="form-row">
          <div>
            <label>Length</label>
            <select name="length" ${extra ? "required" : ""} ${extra ? "" : "disabled"}>
              <option value="">Select</option>
              <option value="10 ft">10 ft</option>
              <option value="12 ft">12 ft</option>
            </select>
          </div>
          <div>
            <label>Width</label>
            <select name="width" ${extra ? "required" : ""} ${extra ? "" : "disabled"}>
              <option value="">Select</option>
              <option value="2 inch">2 inch</option>
              <option value="3 inch">3 inch</option>
            </select>
          </div>
        </div>
      </div>
    </div>`;
}

function syncLine(line) {
  const product = line.querySelector('[name="product"]').value;
  const gauge = line.querySelector('[name="gauge"]');
  const extra = line.querySelector(".stud-floor");
  const length = line.querySelector('[name="length"]');
  const width = line.querySelector('[name="width"]');
  const prev = gauge.value;
  gauge.innerHTML = gaugeChoices(product, prev);
  const show = isStudFloor(product);
  extra.hidden = !show;
  length.disabled = !show;
  width.disabled = !show;
  length.required = show;
  width.required = show;
  if (!show) {
    length.value = "";
    width.value = "";
  }
}

function numberLines(form) {
  form.querySelectorAll(".product-line").forEach((line, i) => {
    line.querySelector(".line-title").textContent = `Product ${i + 1}`;
    line.querySelector(".remove-line").hidden = form.querySelectorAll(".product-line").length === 1;
  });
}

function handleQuote(form) {
  const list = form.querySelector("#product-lines");
  const addBtn = form.querySelector("#add-product");
  const params = new URLSearchParams(location.search);
  const start = PRODUCTS[params.get("product")] ? params.get("product") : "patti";
  list.insertAdjacentHTML("beforeend", productLineHtml(start));
  numberLines(form);

  addBtn.addEventListener("click", () => {
    list.insertAdjacentHTML("beforeend", productLineHtml("patti"));
    numberLines(form);
    list.lastElementChild.querySelector('[name="product"]').focus();
  });

  form.addEventListener("change", (e) => {
    if (e.target.name === "product") syncLine(e.target.closest(".product-line"));
  });

  form.addEventListener("click", (e) => {
    const btn = e.target.closest(".remove-line");
    if (!btn) return;
    const lines = form.querySelectorAll(".product-line");
    if (lines.length > 1) {
      btn.closest(".product-line").remove();
      numberLines(form);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const details = form.details.value.trim();
    const items = [...form.querySelectorAll(".product-line")].map((line, i) => {
      const key = line.querySelector('[name="product"]').value;
      const p = PRODUCTS[key];
      const gauge = line.querySelector('[name="gauge"]').value;
      const qty = line.querySelector('[name="qty"]').value;
      let row = `${i + 1}) ${p.label} | Gauge ${gauge} | Qty ${qty}`;
      if (isStudFloor(key)) {
        row += ` | ${line.querySelector('[name="length"]').value} | ${line.querySelector('[name="width"]').value}`;
      }
      return row;
    });
    const msg = [
      "FG Rock Bright inquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      "Products:",
      ...items,
      `Notes: ${details || "-"}`,
    ].join("\n");
    const box = form.querySelector(".success");
    if (box) {
      box.style.display = "block";
      box.textContent = "Opening WhatsApp with your inquiry…";
    }
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    const popup = window.open(url, "_blank");
    if (!popup) window.location.href = url;
  });
}

window.FG = { boot, handleQuote };
