// Loading Overlay
document.addEventListener('DOMContentLoaded', function() {
  // Show loading overlay for a minimum of 2 seconds
  setTimeout(function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // Check if all images and resources are loaded
    if (document.readyState === 'complete') {
      hideLoadingOverlay();
    } else {
      window.addEventListener('load', hideLoadingOverlay);
    }
    
    function hideLoadingOverlay() {
      loadingOverlay.style.opacity = '0';
      setTimeout(function() {
        loadingOverlay.style.visibility = 'hidden';
      }, 500);
    }
  }, 2000);
});

// Data
const banners = [
  {
    id: 1,
    image: "https://cdn.mos.cms.futurecdn.net/Y3R4y8aLwEPRRUCG65PbF6-1200-80.jpg",
    title: "Electronics deals",
    link: "/deals"
  },
  {
    id: 2,
    image: "https://nypost.com/wp-content/uploads/sites/2/2021/11/fashion.jpg?quality=75&strip=all",
    title: "Spring fashion",
    link: "/fashion"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/76a078c1-191b-4465-90a3-35835c36876b._CR0%2C60%2C1920%2C960_SX750_SY375_.jpg",
    title: "Home essentials",
    link: "/home"
  },
  {
    id: 4,
    image: "https://images.macrumors.com/t/jNcm58FN8ttFBI9tSZs3cmyx150=/800x0/smart/article-new/2017/12/Deals-Header-Image-Blue.jpg?lossy",
    title: "Daily deals",
    link: "/daily-deals"
  }
];

const categories = [
  {
    id: 1,
    title: "Electronics",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260",
    link: "/electronics"
  },
  {
    id: 2,
    title: "Computers & Accessories",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260",
    link: "/computers"
  },
  {
    id: 3,
    title: "Home & Kitchen",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260",
    link: "/home-kitchen"
  },
  {
    id: 4,
    title: "Beauty & Personal Care",
    image: "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&w=1260",
    link: "/beauty"
  }
];

const products = [
  {
    id: 1,
    title: "Amazon Echo Dot (5th Gen)",
    image: "https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 49.99,
    rating: 4.5,
    reviewCount: 1289,
    isPrime: true
  },
  {
    id: 2,
    title: "Wireless Earbuds, Bluetooth 5.3 Headphones",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviewCount: 846,
    isPrime: true,
    discount: 25
  },
  {
    id: 3,
    title: "Smart Watch for Android and iOS Phone",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.0,
    reviewCount: 512,
    isPrime: true,
    discount: 25
  },
  {
    id: 4,
    title: "Laptop Stand, Adjustable Laptop Riser",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260",
    price: 23.99,
    rating: 4.7,
    reviewCount: 925,
    isPrime: true
  },
  {
    id: 5,
    title: "Robot Vacuum Cleaner, 2000Pa Strong Suction",
    image: "https://images.pexels.com/photos/4108270/pexels-photo-4108270.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.3,
    reviewCount: 638,
    isPrime: true,
    discount: 25
  },
  {
    id: 6,
    title: "Wireless Charging Pad for iPhone and Samsung",
    image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260",
    price: 19.99,
    rating: 4.1,
    reviewCount: 1432,
    isPrime: true
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker, Waterproof",
    image: "https://images.pexels.com/photos/164651/pexels-photo-164651.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 782,
    isPrime: true,
    discount: 30
  },
  {
    id: 8,
    title: "Smart Light Bulbs, Color Changing",
    image: "https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 39.99,
    rating: 4.4,
    reviewCount: 516,
    isPrime: true
  }
];

const carouselProducts = [
  {
    id: 101,
    title: "Bestselling Wireless Headphones",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 79.99,
    rating: 4.7,
    reviewCount: 2342,
    isPrime: true
  },
  {
    id: 102,
    title: "Ultra HD Smart TV 55-inch",
    image: "https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.5,
    reviewCount: 876,
    isPrime: true,
    discount: 17
  },
  {
    id: 103,
    title: "Ergonomic Office Chair",
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 129.99,
    rating: 4.3,
    reviewCount: 1253,
    isPrime: true
  },
  {
    id: 104,
    title: "Professional Digital Camera",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 649.99,
    originalPrice: 799.99,
    rating: 4.8,
    reviewCount: 543,
    isPrime: true,
    discount: 19
  },
  {
    id: 105,
    title: "Coffee Maker with Grinder",
    image: "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 149.99,
    rating: 4.6,
    reviewCount: 932,
    isPrime: true
  },
  {
    id: 106,
    title: "Wireless Gaming Mouse",
    image: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviewCount: 1876,
    isPrime: true,
    discount: 25
  },
  {
    id: 107,
    title: "Smart Home Security Camera",
    image: "https://images.pexels.com/photos/246680/pexels-photo-246680.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 89.99,
    rating: 4.2,
    reviewCount: 763,
    isPrime: true
  },
  {
    id: 108,
    title: "Air Purifier for Large Rooms",
    image: "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 629,
    isPrime: true,
    discount: 20
  },
  {
    id: 109,
    title: "Stainless Steel Cookware Set",
    image: "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 179.99,
    rating: 4.7,
    reviewCount: 847,
    isPrime: true
  },
  {
    id: 110,
    title: "Professional Blender",
    image: "https://images.pexels.com/photos/3992206/pexels-photo-3992206.jpeg?auto=compress&cs=tinysrgb&w=1260",
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 1129,
    isPrime: true,
    discount: 20
  }
];

// Helper Functions
function formatPrice(price) {
  return price.toFixed(2);
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHtml = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<span class="star">★</span>';
  }
  
  // Half star
  if (hasHalfStar) {
    starsHtml += '<span class="star">★</span>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<span class="star">☆</span>';
  }
  
  return starsHtml;
}

function createProductCard(product) {
  return `
    <div class="product-card">
      ${product.discount ? `
        <div class="discount-badge">
          -${product.discount}%
        </div>
      ` : ''}
      
      <a href="/product/${product.id}" class="product-link">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        
        <h3 class="product-title">${product.title}</h3>
        
        <div class="product-rating">
          <div class="stars">
            ${renderStars(product.rating)}
          </div>
          <span class="review-count">${product.reviewCount.toLocaleString()}</span>
        </div>
        
        <div class="product-price">
          ${product.originalPrice ? `
            <span class="original-price">$${formatPrice(product.originalPrice)}</span>
          ` : ''}
          <span class="current-price">$${formatPrice(product.price)}</span>
        </div>
        
        ${product.isPrime ? `
          <div class="prime-badge">
            <span>Prime</span>
          </div>
        ` : ''}
      </a>
      
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `;
}

// Banner Carousel
let currentBanner = 0;
const bannerCarousel = document.getElementById('bannerCarousel');
const bannerDots = document.querySelector('.banner-dots');

function renderBanners() {
  bannerCarousel.innerHTML = banners.map((banner, index) => `
    <div class="banner-slide ${index === currentBanner ? 'active' : ''}" style="background-image: url(${banner.image})">
      <div class="banner-content">
        <h2>${banner.title}</h2>
        <a href="${banner.link}" class="shop-now-btn">Shop now</a>
      </div>
    </div>
  `).join('');
  
  bannerDots.innerHTML = banners.map((_, index) => `
    <span class="dot ${index === currentBanner ? 'active' : ''}" data-index="${index}"></span>
  `).join('');
}

function rotateBanner(direction) {
  currentBanner = (currentBanner + direction + banners.length) % banners.length;
  renderBanners();
}

document.querySelector('.banner-prev').addEventListener('click', () => rotateBanner(-1));
document.querySelector('.banner-next').addEventListener('click', () => rotateBanner(1));

bannerDots.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentBanner = parseInt(e.target.dataset.index);
    renderBanners();
  }
});

setInterval(() => rotateBanner(1), 5000);

// Category Grid
const categoryGrid = document.getElementById('categoryGrid');
categoryGrid.innerHTML = categories.map(category => `
  <div class="category-card">
    <h2>${category.title}</h2>
    <div class="category-image">
      <img src="${category.image}" alt="${category.title}">
    </div>
    <a href="${category.link}">Shop now</a>
  </div>
`).join('');

// Product Grid
const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = products.map(product => createProductCard(product)).join('');

// Product Carousels
function initializeCarousel(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = products.map(product => `
    <div class="carousel-item">
      ${createProductCard(product)}
    </div>
  `).join('');
  
  const prevBtn = container.parentElement.querySelector('.prev');
  const nextBtn = container.parentElement.querySelector('.next');
  
  prevBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -container.offsetWidth,
      behavior: 'smooth'
    });
  });
  
  nextBtn.addEventListener('click', () => {
    container.scrollBy({
      left: container.offsetWidth,
      behavior: 'smooth'
    });
  });
  
  container.addEventListener('scroll', () => {
    prevBtn.classList.toggle('disabled', container.scrollLeft <= 0);
    nextBtn.classList.toggle('disabled', 
      container.scrollLeft >= container.scrollWidth - container.offsetWidth
    );
  });
}

initializeCarousel('recommendedCarousel', carouselProducts);
initializeCarousel('relatedCarousel', carouselProducts.slice().reverse());

// Modal Handlers
const locationBtn = document.getElementById('locationBtn');
const locationModal = document.getElementById('locationModal');
const locationCloseBtn = locationModal.querySelector('.close-btn');

locationBtn.addEventListener('click', () => {
  locationModal.style.display = 'flex';
});

locationCloseBtn.addEventListener('click', () => {
  locationModal.style.display = 'none';
});

locationModal.addEventListener('click', (e) => {
  if (e.target === locationModal) {
    locationModal.style.display = 'none';
  }
});

// Account Dropdown
const accountBtn = document.getElementById('accountBtn');
const accountDropdown = document.getElementById('accountDropdown');

accountBtn.addEventListener('mouseenter', () => {
  accountDropdown.style.display = 'block';
});

accountBtn.addEventListener('mouseleave', (e) => {
  const rect = accountDropdown.getBoundingClientRect();
  if (
    e.clientY >= rect.top ||
    e.clientX < rect.left ||
    e.clientX > rect.right
  ) {
    accountDropdown.style.display = 'none';
  }
});

accountDropdown.addEventListener('mouseenter', () => {
  accountDropdown.style.display = 'block';
});

accountDropdown.addEventListener('mouseleave', () => {
  accountDropdown.style.display = 'none';
});

// Sidebar
const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');
const sidebarCloseBtn = sidebar.querySelector('.sidebar-close');

sidebarBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
});

sidebarCloseBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
});

sidebar.addEventListener('click', (e) => {
  if (e.target === sidebar) {
    sidebar.style.display = 'none';
  }
});

// Back to Top
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize
renderBanners();