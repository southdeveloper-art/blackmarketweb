const productsData = {
    giftCards: [
        {
            title: "Amazon Gift Card",
            description: "Get Amazon gift cards in INR",
            price: "₹100 - ₹10,000",
            icon: "📦",
            image: "https://cdn.discordapp.com/attachments/1465664866064011347/1469766436699504971/39fb1671202f4e1cb7be1d7f.webp?ex=6988da29&is=698788a9&hm=c4dc8141feddc7b5f9ef513ecf157935b69c9ee5f442d4ae8bf6aef2293d9027&",
            gradient: "linear-gradient(135deg, #FF9900 0%, #FF6B00 100%)"
        },
        {
            title: "Flipkart Gift Card",
            description: "Get Flipkart gift cards in INR",
            price: "₹100 - ₹10,000",
            icon: "🛍️",
            image: "https://cdn.discordapp.com/attachments/1465664866064011347/1469766555578404924/53e0b51d67c0413c9f9be88a.avif?ex=6988da45&is=698788c5&hm=e7ec1eb10b90dc7971b8f5ceb468ea8d2f3bc4d248a22341bdd0a8d0022eeca9&",
            gradient: "linear-gradient(135deg, #2874F0 0%, #1557BF 100%)"
        },
        {
            title: "Google Play Store",
            description: "Play Store gift cards in INR",
            price: "₹100 - ₹5,000",
            icon: "🎮",
            image: "https://cdn.discordapp.com/attachments/1452634984698347571/1469793999626834054/image.png?ex=6988f3d4&is=6987a254&hm=c3fa067ab6aaabc5a1f1395ea42b8f59b6582ec5c03bd67a30a4713045a480c7&",
            gradient: "linear-gradient(135deg, #01875F 0%, #00C853 100%)"
        },
        {
            title: "AIO Gift Card",
            description: "All-in-one gift card",
            price: "₹500 - ₹10,000",
            icon: "💎",
            image: "https://images.unsplash.com/photo-1549463590-702315809117?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Puma Gift Card",
            description: "Puma store gift cards",
            price: "₹500 - ₹5,000",
            icon: "👟",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)"
        },
        {
            title: "Myntra Gift Card",
            description: "Fashion gift cards in INR",
            price: "₹500 - ₹10,000",
            icon: "👗",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF3F6C 0%, #FF1744 100%)"
        },
        {
            title: "Zomato Gift Card",
            description: "Food delivery gift cards",
            price: "₹100 - ₹5,000",
            icon: "🍕",
            image: "https://cdn.discordapp.com/attachments/1465664866064011347/1469766621647077376/9257de8197df435e8bc5a4ee.avif?ex=6988da55&is=698788d5&hm=1570d0310024379527bb321f087f839dd8cb82c244ca307daa9cc846ab856faf&",
            gradient: "linear-gradient(135deg, #E23744 0%, #CB202D 100%)"
        },
        {
            title: "Swiggy Gift Card",
            description: "Food delivery gift cards",
            price: "₹100 - ₹5,000",
            icon: "🍔",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FC8019 0%, #E86F00 100%)"
        }
    ],
    gaming: [
        {
            title: "Free Fire Diamonds",
            description: "Get diamonds for your account",
            price: "₹50 - ₹5,000",
            icon: "🔥",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF4500 0%, #DC143C 100%)"
        },
        {
            title: "Valorant VIP",
            description: "Premium Valorant account access",
            price: "₹500 - ₹3,000",
            icon: "🎯",
            image: "https://images.unsplash.com/photo-1552824236-0737c50a7b48?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF4655 0%, #BD3944 100%)"
        }
    ],
    streaming: [
        {
            title: "YouTube Premium - 1 Month",
            description: "Single account",
            price: "₹129",
            icon: "🔴",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        },
        {
            title: "YouTube Premium - 2 Months",
            description: "Single account",
            price: "₹249",
            icon: "🔴",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        },
        {
            title: "YouTube Family - 1 Month",
            description: "Family plan (up to 5 members)",
            price: "₹189",
            icon: "👨‍👩‍👧‍👦",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        },
        {
            title: "Amazon Prime Video 4K - 1 Month",
            description: "New account with unique email",
            price: "₹199",
            icon: "📺",
            image: "https://cdn.discordapp.com/attachments/1465664866064011347/1469766436699504971/39fb1671202f4e1cb7be1d7f.webp?ex=6988da29&is=698788a9&hm=c4dc8141feddc7b5f9ef513ecf157935b69c9ee5f442d4ae8bf6aef2293d9027&",
            gradient: "linear-gradient(135deg, #00A8E1 0%, #0080B3 100%)"
        },
        {
            title: "Netflix 4K - 1 Month",
            description: "New account with unique email",
            price: "₹649",
            icon: "🎬",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #E50914 0%, #B20710 100%)"
        },
        {
            title: "Spotify Premium - 1 Month",
            description: "Premium music streaming",
            price: "₹119",
            icon: "🎵",
            image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #1DB954 0%, #1AA34A 100%)"
        },
        {
            title: "Crunchyroll Premium - 1 Month",
            description: "Anime streaming premium",
            price: "₹199",
            icon: "🎌",
            image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #F47521 0%, #E65100 100%)"
        }
    ],
    youtube: [
        {
            title: "YouTube Views",
            description: "Boost your video views",
            price: "₹50 per 1,000 views",
            icon: "👁️",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        },
        {
            title: "YouTube Likes",
            description: "Increase video likes",
            price: "₹100 per 100 likes",
            icon: "👍",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        },
        {
            title: "YouTube Subscribers",
            description: "Grow your subscriber base",
            price: "₹500 per 100 subscribers",
            icon: "📊",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)"
        }
    ],
    instagram: [
        {
            title: "Instagram Followers",
            description: "Grow your follower count",
            price: "₹300 per 100 followers",
            icon: "👥",
            image: "https://images.unsplash.com/photo-1611272587654-cd130007903d?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #E1306C 0%, #C13584 50%, #833AB4 100%)"
        },
        {
            title: "Instagram Likes",
            description: "Get more likes on posts",
            price: "₹100 per 100 likes",
            icon: "❤️",
            image: "https://images.unsplash.com/photo-1611272587654-cd130007903d?auto=format&fit=crop&q=80&w=400",
            gradient: "linear-gradient(135deg, #E1306C 0%, #C13584 50%, #833AB4 100%)"
        }
    ]
};

// Function to create product card
function createProductCard(product) {
    return `
        <div class="product-card">
            <span class="status-badge status-in-stock">In Stock</span>
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info-content">
                <h3 class="product-title"><span class="product-icon-emoji">${product.icon}</span> ${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="openCheckout('${product.title}', '${product.price}', 'Service', '${product.image}')">Order Now</button>
            </div>
        </div>
    `;
}

// Render functions for each page
function renderGiftCards() {
    const container = document.getElementById('giftCardsGrid');
    if (container) {
        container.innerHTML = productsData.giftCards.map(createProductCard).join('');
        animateCards();
    }
}

function renderGaming() {
    const container = document.getElementById('gamingGrid');
    if (container) {
        container.innerHTML = productsData.gaming.map(createProductCard).join('');
        animateCards();
    }
}

function renderStreaming() {
    const container = document.getElementById('streamingGrid');
    if (container) {
        container.innerHTML = productsData.streaming.map(createProductCard).join('');
        animateCards();
    }
}

function renderYouTube() {
    const container = document.getElementById('youtubeGrid');
    if (container) {
        container.innerHTML = productsData.youtube.map(createProductCard).join('');
        animateCards();
    }
}

function renderInstagram() {
    const container = document.getElementById('instagramGrid');
    if (container) {
        container.innerHTML = productsData.instagram.map(createProductCard).join('');
        animateCards();
    }
}

// Animate cards on scroll
function animateCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Function to handle gift card orders
function orderGiftCard(brand, cardValue, price, img) {
    openCheckout(`${brand} ₹${cardValue}`, `₹${price}`, 'Gift Card', img);
}

// Function to handle gaming orders
function orderGaming(game, item, price, img) {
    openCheckout(`${game} - ${item}`, `₹${price}`, 'Gaming', img);
}

// Function to handle streaming service orders
function orderStreaming(service, plan, price, img) {
    openCheckout(`${service} - ${plan}`, `₹${price}`, 'Streaming', img);
}

// Function to handle social media service orders
function orderSocial(platform, service, price, img) {
    openCheckout(`${platform} - ${service}`, `₹${price}`, 'Social Media', img);
}

// Function to handle general product orders
function orderProduct(category, item, price, img) {
    if (arguments.length === 1) {
        openCheckout(category, 'Check Details', 'Product');
        return;
    }
    openCheckout(item, `₹${price}`, category, img);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Money Rain Effect
function createMoneyRain() {
    let container = document.querySelector('.money-rain');
    if (!container) {
        container = document.createElement('div');
        container.className = 'money-rain';
        document.body.appendChild(container);
    }

    if (container.dataset.running === 'true') return;
    container.dataset.running = 'true';

    const moneySymbols = ['💰', '💵', '💸', '🤑', '🪙', '✨'];

    const rainInterval = setInterval(() => {
        if (!container.isConnected) {
            clearInterval(rainInterval);
            return;
        }
        const symbol = document.createElement('div');
        symbol.className = 'money-symbol';
        symbol.textContent = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];

        symbol.style.left = Math.random() * 100 + 'vw';

        const duration = Math.random() * 4 + 7;
        symbol.style.animationDuration = duration + 's';

        container.appendChild(symbol);

        setTimeout(() => {
            if (symbol.parentNode) symbol.remove();
        }, (duration + 3) * 1000);
    }, 600);
}

// Click Effect with Real Money Emojis
function createClickEffect(e) {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);

    if (!x || !y) return;

    const emojis = ['💰', '💸', '💵', '🤑', '🪙', '💎', '✨', '👑', '🔥'];

    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'click-money';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.position = 'fixed';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '100001';
        p.style.fontSize = '2rem';

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 100;

        p.animate([
            { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0.5) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1500);
    }
}

// Global Checkout Logic
let currentOrder = {
    product: '',
    price: '',
    unitPrice: 0,
    quantity: 1,
    step: 1,
    details: {},
    confirmedId: ''
};

function injectCheckoutModal() {
    if (document.getElementById('checkoutOverlay')) return;

    const modalHTML = `
        <div id="checkoutOverlay" class="checkout-overlay">
            <div class="checkout-modal">
                <div class="checkout-close-area" onclick="closeCheckout()">✕</div>
                
                <!-- Left Sidebar: Product Summary -->
                <div class="checkout-left">
                    <div class="checkout-brand">
                        <img src="https://cdn.discordapp.com/attachments/1465664866064011347/1469776118251917555/323214-Photoroom.png?ex=6988e32d&is=698791ad&hm=2451673abafa6fba9dc06a5f754ac82fd25a49884037daad0474356b402a0979&" alt="Logo" class="brand-logo" style="height: 60px;">
                        <h3>BLACK MARKET</h3>
                    </div>
                    
                    <div class="checkout-product-summary">
                        <div class="checkout-item-card">
                            <img id="checkoutProductImg" src="" alt="" class="checkout-item-img">
                            <div class="product-summary-info">
                                <h3 id="checkoutProductTitle">Product Name</h3>
                                <span id="checkoutProductCategory">Category</span>
                            </div>
                        </div>
                    </div>

                    <div class="checkout-pricing-summary">
                        <div class="price-row">
                            <span>Subtotal</span>
                            <span id="checkoutSubtotal">₹0</span>
                        </div>
                        <div class="price-row">
                            <span>Processing Fee</span>
                            <span id="processingFee">₹0</span>
                        </div>
                        <div class="price-row total">
                            <span>Total</span>
                            <span id="checkoutTotal">₹0</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side: Interactive Steps -->
                <div class="checkout-right">
                    <div class="steps-container">
                        <div class="step-item active" id="step1Item">
                            <div class="step-bar"></div>
                            <div class="step-text">
                                <span class="step-number">Step 1</span>
                                <span class="step-name">Order Info</span>
                            </div>
                        </div>
                        <div class="step-item" id="step2Item">
                            <div class="step-bar"></div>
                            <div class="step-text">
                                <span class="step-number">Step 2</span>
                                <span class="step-name">Confirm & Pay</span>
                            </div>
                        </div>
                        <div class="step-item" id="step3Item">
                            <div class="step-bar"></div>
                            <div class="step-text">
                                <span class="step-number">Step 3</span>
                                <span class="step-name">Submit Proof</span>
                            </div>
                        </div>
                    </div>

                    <!-- Step 1: Order Information -->
                    <div id="step1" class="checkout-form active">
                        <div class="checkout-input-group">
                            <label>Product Quantity *</label>
                            <div class="quantity-selector">
                                <button onclick="updateQuantity(-1)">−</button>
                                <input type="number" id="orderQuantity" value="1" min="1" max="99" oninput="validateQuantity(this)">
                                <button onclick="updateQuantity(1)">+</button>
                            </div>
                        </div>

                        <div class="checkout-input-group">
                            <label>Email Address *</label>
                            <input type="email" id="checkoutEmail" class="checkout-input" placeholder="Enter your email to receive confirmation">
                        </div>

                        <div class="checkout-input-group">
                            <label>Choose Payment Method *</label>
                            <div class="payment-grid">
                                <div class="payment-option" id="payUPI" onclick="selectPayment('UPI')">
                                    <div class="payment-info">
                                        <span class="payment-icon">📱</span>
                                        <span>UPI (GPay / PhonePe / Paytm)</span>
                                    </div>
                                    <span style="color: #10b981; font-weight: 700;">FAST</span>
                                </div>
                                <div class="payment-option" id="payLTC" onclick="selectPayment('LTC')">
                                    <div class="payment-info">
                                        <span class="payment-icon">Ł</span>
                                        <span>Litecoin (LTC)</span>
                                    </div>
                                    <span style="color: #6366f1; font-weight: 700;">ANONYMOUS</span>
                                </div>
                            </div>
                        </div>
                        
                        <button class="checkout-btn" onclick="nextStep(2)">Proceed to Payment →</button>
                    </div>

                    <!-- Step 2: Confirm & Pay -->
                    <div id="step2" class="checkout-form">
                        <div class="confirm-box">
                            <div class="confirm-item">
                                <span class="confirm-label">Product SKU</span>
                                <span class="confirm-value" id="confirmProduct">...</span>
                            </div>
                            <div class="confirm-item">
                                <span class="confirm-label">Quantity</span>
                                <span class="confirm-value" id="confirmQty">...</span>
                            </div>
                            <div class="confirm-item">
                                <span class="confirm-label">Recipient Email</span>
                                <span class="confirm-value" id="confirmEmail">...</span>
                            </div>
                            <div class="confirm-item">
                                <span class="confirm-label">Selected Method</span>
                                <span class="confirm-value" id="confirmMethod">...</span>
                            </div>
                        </div>

                        <div id="paymentInstructions" class="instruction-box">
                            <!-- Populated dynamically -->
                        </div>

                        <button class="checkout-btn" onclick="nextStep(3)">I've Made The Payment →</button>
                    </div>

                    <!-- Step 3: Receive Your Items -->
                    <div id="step3" class="checkout-form">
                        <div class="checkout-input-group">
                            <label>Discord User ID *</label>
                            <input type="text" id="discordId" class="checkout-input" placeholder="e.g. 123456789012345678">
                        </div>

                        <div class="checkout-input-group">
                            <label>Discord Username *</label>
                            <input type="text" id="discordUsername" class="checkout-input" placeholder="e.g. user#0000">
                        </div>

                        <div class="checkout-input-group">
                            <label>Transaction ID / Ref No. *</label>
                            <input type="text" id="txnId" class="checkout-input" placeholder="Paste your receipt ref no.">
                        </div>

                        <div class="checkout-input-group">
                            <label>Payment Screenshot URL *</label>
                            <input type="text" id="screenshotUrl" class="checkout-input" placeholder="Upload to imgur and paste link here">
                        </div>

                        <button class="checkout-btn" onclick="submitOrder()">Submit Order Information ✓</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}

function openCheckout(name, price, category = 'Product', img = 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100') {
    currentOrder = {
        product: name,
        price: price,
        unitPrice: parseInt(price.replace(/[^\d]/g, '')) || 0,
        quantity: 1,
        step: 1,
        details: {},
        category: category,
        img: img,
        confirmedId: 'BM-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };

    injectCheckoutModal();

    document.getElementById('checkoutProductTitle').textContent = name;
    document.getElementById('checkoutProductCategory').textContent = category;
    document.getElementById('checkoutProductImg').src = img;

    updatePricingDisplay();

    document.body.style.overflow = 'hidden';
    document.getElementById('checkoutOverlay').style.display = 'flex';
    resetModal();
}

function updateQuantity(change) {
    const input = document.getElementById('orderQuantity');
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (val > 99) val = 99;
    input.value = val;
    currentOrder.quantity = val;
    updatePricingDisplay();
}

function validateQuantity(input) {
    let val = parseInt(input.value);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 99) val = 99;
    input.value = val;
    currentOrder.quantity = val;
    updatePricingDisplay();
}

function updatePricingDisplay() {
    const total = currentOrder.unitPrice * currentOrder.quantity;
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');

    if (subtotalEl) subtotalEl.textContent = `₹${currentOrder.unitPrice} × ${currentOrder.quantity}`;
    if (totalEl) totalEl.textContent = `₹${total}`;
}

function closeCheckout() {
    document.getElementById('checkoutOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function resetModal() {
    currentOrder.step = 1;
    document.querySelectorAll('.checkout-form').forEach(f => f.classList.remove('active'));
    document.getElementById('step1').classList.add('active');

    document.querySelectorAll('.step-item').forEach(s => s.classList.remove('active', 'completed'));
    document.getElementById('step1Item').classList.add('active');

    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));

    // Clear inputs
    const inputs = ['checkoutEmail', 'discordId', 'discordUsername', 'txnId', 'screenshotUrl'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

function selectPayment(method) {
    currentOrder.details.method = method;
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.getElementById(`pay${method}`).classList.add('selected');
}

function nextStep(step) {
    if (step === 2) {
        const email = document.getElementById('checkoutEmail').value;
        if (!email || !email.includes('@')) return alert('Please enter a valid email address');
        if (!currentOrder.details.method) return alert('Please select a payment method');

        currentOrder.details.email = email;
        document.getElementById('confirmEmail').textContent = email;
        document.getElementById('confirmProduct').textContent = currentOrder.product;
        document.getElementById('confirmQty').textContent = currentOrder.quantity;
        document.getElementById('confirmMethod').textContent = currentOrder.details.method;

        document.getElementById('step1Item').classList.add('completed');
        document.getElementById('step2Item').classList.add('active');

        // Instructions
        const instr = document.getElementById('paymentInstructions');
        if (currentOrder.details.method === 'UPI') {
            const total = currentOrder.unitPrice * currentOrder.quantity;
            instr.innerHTML = `
                <p>Scan QR to Pay via UPI</p>
                <div class="qr-wrapper">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=blackmarket@upi&pn=BlackMarket&am=${total}" alt="UPI QR">
                </div>
                <div class="copy-address" onclick="copyToClipboard('blackmarket@upi')">
                    <span>blackmarket@upi</span>
                    <span class="copy-btn">COPY ID</span>
                </div>
            `;
        } else {
            instr.innerHTML = `
                <p>Send precisely to LTC Address</p>
                <div class="qr-wrapper">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=ltceverywhere" alt="LTC QR">
                </div>
                <div class="copy-address" onclick="copyToClipboard('LTC_ADDRESS_HERE')">
                    <span>LTC_ADDRESS_HERE</span>
                    <span class="copy-btn">COPY ADDR</span>
                </div>
            `;
        }
    }

    if (step === 3) {
        document.getElementById('step2Item').classList.add('completed');
        document.getElementById('step3Item').classList.add('active');
    }

    document.querySelectorAll('.checkout-form').forEach(f => f.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    currentOrder.step = step;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
}

async function submitOrder() {
    const discordId = document.getElementById('discordId').value;
    const discordUser = document.getElementById('discordUsername').value;
    const txnId = document.getElementById('txnId').value;
    const ss = document.getElementById('screenshotUrl').value;

    if (!discordId || !discordUser || !txnId || !ss) return alert('Please fill all proofs correctly!');

    const webhookUrl = 'https://ptb.discord.com/api/webhooks/1469764183636578579/TpmXUWFZeHAT8a10FRnyaYNnxvsg8FCk0cb7hBK486ab1O0WA6UVoNCG0-ROadaVNOqa';

    const totalAmount = currentOrder.unitPrice * currentOrder.quantity;
    const embed = {
        title: "💎 NEW ORDER RECEIVED: " + currentOrder.confirmedId,
        color: 0xEC4899,
        thumbnail: { url: currentOrder.img },
        fields: [
            { name: "🛒 Order ID", value: "`" + currentOrder.confirmedId + "`", inline: true },
            { name: "📦 Product", value: currentOrder.product, inline: true },
            { name: "🔢 Quantity", value: currentOrder.quantity.toString(), inline: true },
            { name: "💰 Total Price", value: "₹" + totalAmount, inline: true },
            { name: "📧 Email", value: currentOrder.details.email, inline: true },
            { name: "💳 Method", value: currentOrder.details.method, inline: true },
            { name: "👾 Discord", value: discordUser + " (" + discordId + ")", inline: false },
            { name: "🧾 Transaction ID", value: "`" + txnId + "`", inline: false },
            { name: "🔗 Proof Link", value: "[View Screenshot](" + ss + ")", inline: false }
        ],
        image: { url: ss },
        timestamp: new Date().toISOString(),
        footer: { text: "Black Market Store Management System" }
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: "🚀 **New Order Alert!** Check proofs below:",
                embeds: [embed]
            })
        });

        if (response.ok) {
            alert(`✓ ORDER SUBMITTED!\n\nID: ${currentOrder.confirmedId}\n\nOur team is verifying your payment. We will deliver your items on Discord soon.`);
            closeCheckout();
        } else {
            throw new Error('Webhook failed');
        }
    } catch (e) {
        alert('Submission failed. Please screenshot this and contact support.');
    }
}

// Update Developer Avatar from Discord (via Lanyard API)
async function updateDevAvatar() {
    const userId = "1253649531237564518";
    const fallbackAvatar = "https://cdn.discordapp.com/avatars/1253649531237564518/d2e93a287d6c422eca40f0acac987ef7.webp?size=4096";

    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();

        if (data.success && data.data.discord_user.avatar) {
            const avatarHash = data.data.discord_user.avatar;
            const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png?size=128`;
            document.querySelectorAll('.dev-avatar').forEach(img => img.src = avatarUrl);
        } else {
            document.querySelectorAll('.dev-avatar').forEach(img => img.src = fallbackAvatar);
        }
    } catch (e) {
        document.querySelectorAll('.dev-avatar').forEach(img => img.src = fallbackAvatar);
    }
}

// Global Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    createMoneyRain();
    injectCheckoutModal();
    updateDevAvatar();

    // Mouse and Touch Interaction for Money Effect
    window.addEventListener('mousedown', createClickEffect);
    window.addEventListener('touchstart', createClickEffect, { passive: true });
});

