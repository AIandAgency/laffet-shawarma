/**
 * Laffet Shawarma - Official Client Script
 * Complete Menu Data & Interactive Features
 */

// --- 1. FULL AUTHENTIC MENU DATA (34 ITEMS) ---
const MENU_DATA = [
  // KYCKLING SHAWARMA
  {
    id: 'sh-arabi-kyckling',
    name: 'Shawarma Arabi Kyckling',
    category: 'kyckling',
    categoryLabel: 'Kyckling Shawarma',
    price: 135,
    description: 'Kyckling, skivad i bitar, serveras med tunnbröd, krispiga pommes, vitlökssås (toum), granatäpplesås, coleslaw och saltgurka.',
    badge: 'Bästsäljare'
  },
  {
    id: 'sh-rulle-kyckling',
    name: 'Shawarma Rulle Kyckling',
    category: 'kyckling',
    categoryLabel: 'Kyckling Shawarma',
    price: 90,
    description: 'Klassisk syrisk rulle med grillad marinerad kyckling, tunnbröd, hemgjord vitlökssås, granatäpplesås och krispig saltgurka.',
    badge: 'Favorit'
  },
  {
    id: 'sh-mini-kyckling',
    name: 'Mini Kycklingrulle',
    category: 'kyckling',
    categoryLabel: 'Kyckling Shawarma',
    price: 40,
    description: 'Liten shawarmarulle med kyckling, tunnbröd, vitlökssås, granatäpplesås och saltgurka. Perfekt som mellanmål eller till barn.',
    badge: null
  },

  // KÖTT SHAWARMA
  {
    id: 'sh-arabi-kott',
    name: 'Shawarma Arabi Kött',
    category: 'kott',
    categoryLabel: 'Kött Shawarma',
    price: 145,
    description: 'Marinerat nötkött skivat i bitar med tunnbröd, färsk tomat, persilja, lök, sesamsås (tahini) och granatäpplesås. Serveras med pommes.',
    badge: 'Kockens Val'
  },
  {
    id: 'sh-tallrik-kott',
    name: 'Shawarma Kött-tallrik',
    category: 'kott',
    categoryLabel: 'Kött Shawarma',
    price: 140,
    description: 'Nötkött, pommes frites, färska tomater, persilja, lök, gurka, inlagd saltgurka, pepperoni och aromatisk sesamsås.',
    badge: null
  },
  {
    id: 'sh-rulle-kott',
    name: 'Shawarma Rulle Kött',
    category: 'kott',
    categoryLabel: 'Kött Shawarma',
    price: 99,
    description: 'Grillat nötkött på spett, tunnbröd, färska tomater, persilja, lök, sesamsås och granatäpplesås rostat till perfekt krispighet.',
    badge: 'Klassiker'
  },
  {
    id: 'sh-mini-kott',
    name: 'Mini Köttrulle',
    category: 'kott',
    categoryLabel: 'Kött Shawarma',
    price: 45,
    description: 'Mindre shawarmarulle med marinerat kött, tunnbröd, tomat, persilja, lök, sesamsås och granatäpplesås.',
    badge: null
  },

  // MIX SHAWARMA
  {
    id: 'sh-mix-tallrik',
    name: 'Mix Shawarma Tallrik',
    category: 'mix',
    categoryLabel: 'Mix Shawarma',
    price: 145,
    description: 'Kombination av saftig kyckling & nötkött, pommes frites, hemgjord vitlökssås, coleslaw, saltgurka, sallad, tomat och gurka.',
    badge: 'Populär'
  },
  {
    id: 'sh-mix-arab',
    name: 'Mix Shawarma Arab',
    category: 'mix',
    categoryLabel: 'Mix Shawarma',
    price: 145,
    description: '1 mini kycklingshawarma + 1 mini köttshawarma, tunnbröd, pommes, vitlökssås, coleslaw, saltgurka, granatäpplesås och tomat.',
    badge: null
  },
  {
    id: 'mix-box',
    name: 'Mix Shawarma Box (10 rullar)',
    category: 'mix',
    categoryLabel: 'Mix Shawarma',
    price: 450,
    description: '5 mini kycklingshawarma + 5 mini köttshawarma, tunnbröd, rikligt med pommes, vitlökssås, coleslaw, saltgurka, tomat och gurka.',
    badge: 'Fest & Familj'
  },

  // BROASTED
  {
    id: 'broasted-hel',
    name: 'Hel Kyckling Broasted',
    category: 'broasted',
    categoryLabel: 'Broasted Kyckling',
    price: 240,
    description: 'Hel krispigt friterad syrisk broasted kyckling. Serveras med gyllene pommes, hemgjord vitlökssås, saltgurka och coleslaw.',
    badge: 'Specialitet'
  },
  {
    id: 'broasted-halv',
    name: 'Halv Broasted',
    category: 'broasted',
    categoryLabel: 'Broasted Kyckling',
    price: 130,
    description: '5 bitar frasigt friterad kyckling enligt hemligt recept, vitlökssås, saltgurka och färsk coleslaw.',
    badge: null
  },

  // CRISPY & ZINGER
  {
    id: 'crispy-tallrik',
    name: 'Krispig Kycklingtallrik',
    category: 'crispy',
    categoryLabel: 'Crispy & Zinger',
    price: 130,
    description: '4 bitar extra krispig kycklingfilé, hemlagad vitlökssås, coleslaw, pommes frites och saltgurka.',
    badge: null
  },
  {
    id: 'zinger-tallrik',
    name: 'Zinger Kycklingtallrik (Stark)',
    category: 'crispy',
    categoryLabel: 'Crispy & Zinger',
    price: 130,
    description: '4 bitar hett kryddad zingerkyckling med sting, hemgjord vitlökssås, coleslaw och pommes frites.',
    badge: 'Stark'
  },
  {
    id: 'crispy-chicken-fries',
    name: 'Crispy Chicken Fries',
    category: 'crispy',
    categoryLabel: 'Crispy & Zinger',
    price: 140,
    description: 'Krispiga kycklingbitar lagda på en bädd av pommes, smält cheddarsås, skivad jalapeño, lök och valfri sås.',
    badge: 'Nyhet'
  },

  // SANDWICH & BAGUETTER
  {
    id: 'crispy-baguette',
    name: 'Crispy Baguette',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 90,
    description: 'Friterade kycklingfilébitar i färsk baguette med coleslaw, krämig cheddarost och valfri sås.',
    badge: null
  },
  {
    id: 'crispy-baguette-meal',
    name: 'Crispy Baguette Meal',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 130,
    description: 'Crispy Baguette serverad som meny med pommes frites, hemgjord vitlökssås och coleslaw.',
    badge: null
  },
  {
    id: 'zinger-baguette',
    name: 'Zinger Baguette (Stark)',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 90,
    description: 'Friterade kycklingfilébitar med stark zingerkryddning, coleslaw, cheddarost och valfri sås i baguette.',
    badge: 'Stark'
  },
  {
    id: 'zinger-baguette-meal',
    name: 'Zinger Baguette Meal',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 130,
    description: 'Zinger Baguette med pommes, vitlökssås och coleslaw som komplett måltid.',
    badge: null
  },
  {
    id: 'fajita-baguette',
    name: 'Fajita Baguette',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 99,
    description: 'Marinerad kyckling stekt med champinjoner, paprika, majs, lök, sojasås, mixost och majonnäs i varm baguette.',
    badge: 'Favorit'
  },
  {
    id: 'fajita-baguette-meal',
    name: 'Fajita Baguette Meal',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 140,
    description: 'Fajita Baguette serveras som måltid med pommes frites, vitlökssås och färsk coleslaw.',
    badge: null
  },
  {
    id: 'philadelphia-baguette',
    name: 'Philadelphia Baguette',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 105,
    description: 'Marinerat nötkött stekt med färska champinjoner, lök, paprika, smält blandad ost och majonnäs.',
    badge: null
  },
  {
    id: 'philadelphia-baguette-meal',
    name: 'Philadelphia Baguette Meal',
    category: 'baguette',
    categoryLabel: 'Sandwich & Baguetter',
    price: 145,
    description: 'Philadelphia Baguette med pommes frites, vitlökssås och coleslaw som komplett meny.',
    badge: null
  },

  // KEBAB & FALAFEL
  {
    id: 'kebabrulle',
    name: 'Kebabrulle',
    category: 'kebab-falafel',
    categoryLabel: 'Kebab & Falafel',
    price: 90,
    description: 'Klassisk kebab i tunnbröd med fräsch sallad, färsk tomat, lök och smakrik kebabsås.',
    badge: null
  },
  {
    id: 'kebabtallrik',
    name: 'Kebabtallrik',
    category: 'kebab-falafel',
    categoryLabel: 'Kebab & Falafel',
    price: 120,
    description: 'Kebabkött, krispiga pommes frites, krispig sallad, tomat, lök och kebabsås.',
    badge: null
  },
  {
    id: 'falafeltallrik',
    name: 'Falafeltallrik',
    category: 'kebab-falafel',
    categoryLabel: 'Kebab & Falafel',
    price: 110,
    description: 'Frasiga nystekta falafelbollar med sesamsås (tahini), sallad, tomat, pepperoni och pommes frites.',
    badge: 'Vegetarisk'
  },
  {
    id: 'falafelrulle',
    name: 'Falafelrulle',
    category: 'kebab-falafel',
    categoryLabel: 'Kebab & Falafel',
    price: 75,
    description: 'Falafel rullad i mjukt tunnbröd med färska grönsaker och krämig sesamsås.',
    badge: 'Vegetarisk'
  },

  // SALLADER & SIDES
  {
    id: 'kebabsallad',
    name: 'Kebabsallad',
    category: 'sallad-sides',
    categoryLabel: 'Sallad & Sides',
    price: 129,
    description: 'Kebabkött serverat på en krispig salladsbädd med tomat, saltgurka, lök och kebabsås.',
    badge: null
  },
  {
    id: 'crispy-chicken-sallad',
    name: 'Crispy Chicken Sallad',
    category: 'sallad-sides',
    categoryLabel: 'Sallad & Sides',
    price: 129,
    description: 'Krispiga kycklingbitar, majs, färsk sallad, tomat, gurka, lök och valfri sås.',
    badge: null
  },
  {
    id: 'falafelsallad',
    name: 'Falafelsallad',
    category: 'sallad-sides',
    categoryLabel: 'Sallad & Sides',
    price: 110,
    description: 'Falafel, blandad sallad, tomat, gurka, len hemgjord hummus och sesamsås.',
    badge: 'Vegetarisk'
  },
  {
    id: 'side-mozzarella',
    name: 'Mozzarellasticks',
    category: 'sallad-sides',
    categoryLabel: 'Sides',
    price: 45,
    description: 'Frasiga friterade mozzarellasticks med rinnande ost.',
    badge: null
  },
  {
    id: 'side-chili-cheese',
    name: 'Chili Cheese',
    category: 'sallad-sides',
    categoryLabel: 'Sides',
    price: 35,
    description: 'Klassiska heta och ostiga chili cheese tops.',
    badge: null
  },
  {
    id: 'side-nuggets',
    name: 'Nuggets',
    category: 'sallad-sides',
    categoryLabel: 'Sides',
    price: 35,
    description: 'Krispiga friterade kycklingnuggets.',
    badge: null
  },
  {
    id: 'kids-nuggets-meal',
    name: 'Kids Nuggets Meal',
    category: 'sallad-sides',
    categoryLabel: 'Barnmeny',
    price: 75,
    description: 'Kycklingnuggets serverade med pommes frites och valfri sås.',
    badge: 'Barnmeny'
  }
];

// --- 2. ORDER / CART STATE MANAGEMENT ---
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem('laffet_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('laffet_cart', JSON.stringify(cart));
  } catch (e) {
    // Ignore storage issues
  }
  updateCartUI();
}

function addToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }

  saveCart();
  showToast(`Tillagd: ${item.name}`);
}

function updateQuantity(itemId, delta) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.id !== itemId);
  }

  saveCart();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update badge counter
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  // Update cart modal body
  const container = document.getElementById('cartItemsContainer');
  const priceDisplay = document.getElementById('cartTotalPrice');

  if (priceDisplay) {
    priceDisplay.textContent = `${totalPrice} kr`;
  }

  if (container) {
    if (cart.length === 0) {
      container.innerHTML = `
        <p class="empty-cart-msg">
          Du har inte lagt till några rätter än.<br>
          Klicka på "Lägg till" på menyn för att samla dina favoriter inför beställning!
        </p>
      `;
    } else {
      container.innerHTML = cart.map(item => `
        <div class="cart-item-row" data-id="${item.id}">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${item.price} kr / st</span>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="cart-qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Minska antal">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button type="button" class="cart-qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Öka antal">+</button>
          </div>
        </div>
      `).join('');
    }
  }
}

// Toast Notifications
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// --- 3. LIVE OPENING HOURS CHECK ---
function checkOpeningHours() {
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  if (!statusDot || !statusText) return;

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const timeInMinutes = currentHour * 60 + currentMinute;

  // Open 11:00 (660 min) to 22:00 (1320 min) all days
  const openTime = 11 * 60;
  const closeTime = 22 * 60;

  if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
    statusDot.className = 'status-dot pulse';
    statusText.innerHTML = '<strong>Öppet nu</strong> till 22:00';
  } else {
    statusDot.className = 'status-dot closed';
    statusText.innerHTML = '<strong>Stängt just nu</strong> • Öppnar kl 11:00';
  }
}

// --- 4. MENU FILTERING & SEARCH ---
let currentCategory = 'all';
let currentSearch = '';

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const filtered = MENU_DATA.filter(dish => {
    const matchCategory = currentCategory === 'all' || dish.category === currentCategory;
    const matchSearch = currentSearch === '' || 
      dish.name.toLowerCase().includes(currentSearch) ||
      dish.description.toLowerCase().includes(currentSearch) ||
      dish.categoryLabel.toLowerCase().includes(currentSearch);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  } else {
    if (noResults) noResults.style.display = 'none';
    grid.innerHTML = filtered.map(dish => `
      <article class="menu-item-card" data-category="${dish.category}">
        ${dish.badge ? `<span class="menu-item-badge-top">${dish.badge}</span>` : ''}
        <div class="menu-item-content">
          <div class="menu-item-header">
            <h3 class="dish-name">${dish.name}</h3>
            <span class="dish-price">${dish.price} kr</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
        </div>
        <div class="menu-item-footer">
          <span class="dish-category-tag">${dish.categoryLabel}</span>
          <button type="button" class="add-to-order-btn" onclick="addToCart('${dish.id}')" aria-label="Lägg till ${dish.name} i beställningslista">
            <span>+</span> Lägg till
          </button>
        </div>
      </article>
    `).join('');
  }
}

// --- 5. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Opening status
  checkOpeningHours();
  setInterval(checkOpeningHours, 60000);

  // Set current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Load Cart
  loadCart();

  // Render initial menu
  renderMenu();

  // Category filter tabs
  const tabButtons = document.querySelectorAll('.category-tabs .tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderMenu();
    });
  });

  // Live Search
  const searchInput = document.getElementById('menuSearch');
  const clearBtn = document.getElementById('clearSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = currentSearch.length > 0 ? 'block' : 'none';
      }
      renderMenu();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      renderMenu();
      searchInput.focus();
    });
  }

  // Reset Filters button
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      tabButtons.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
        b.setAttribute('aria-selected', b.getAttribute('data-category') === 'all' ? 'true' : 'false');
      });
      renderMenu();
    });
  }

  // Add Box from Highlight Banner
  const addBoxBtn = document.querySelector('.add-box-btn');
  if (addBoxBtn) {
    addBoxBtn.addEventListener('click', () => {
      addToCart('mix-box');
    });
  }

  // Cart Modal (<dialog>) Handling
  const cartModal = document.getElementById('cartModal');
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');

  if (cartModal && cartTriggerBtn) {
    cartTriggerBtn.addEventListener('click', () => {
      if (typeof cartModal.showModal === 'function') {
        cartModal.showModal();
      } else {
        cartModal.setAttribute('open', '');
      }
    });
  }

  if (cartModal && closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      if (typeof cartModal.close === 'function') {
        cartModal.close();
      } else {
        cartModal.removeAttribute('open');
      }
    });

    // Light dismiss when clicking outside modal dialog
    cartModal.addEventListener('click', (e) => {
      const rect = cartModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        cartModal.close();
      }
    });
  }

  // Mobile Drawer Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        mobileDrawer.removeAttribute('inert');
      } else {
        mobileDrawer.setAttribute('inert', '');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('inert', '');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });

    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('inert', '');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Ensure address bar URL is clean on page load (remove any lingering hash)
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  // Smooth scroll for all navigation & internal anchor links without changing URL / hash
  const internalNavLinks = document.querySelectorAll('a[href^="#"]');
  internalNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Prevent default hash navigation to keep URL clean in address bar
        e.preventDefault();

        // Smoothly scroll to the target section
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Ensure URL stays completely clean without #hash in address bar
        if (window.location.hash) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }

        // Close mobile drawer if open
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          mobileDrawer.setAttribute('inert', '');
          if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Category Scroll Arrows (Mobile & Desktop)
  const catTabsScroll = document.getElementById('catTabsScroll');
  const catScrollLeft = document.getElementById('catScrollLeft');
  const catScrollRight = document.getElementById('catScrollRight');

  if (catTabsScroll && catScrollLeft && catScrollRight) {
    catScrollLeft.addEventListener('click', () => {
      catTabsScroll.scrollBy({ left: -180, behavior: 'smooth' });
    });
    catScrollRight.addEventListener('click', () => {
      catTabsScroll.scrollBy({ left: 180, behavior: 'smooth' });
    });
  }


  // Header Scroll Effect & Active Section Highlighting
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.pageYOffset >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  });
});
