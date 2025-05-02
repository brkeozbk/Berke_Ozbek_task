$(document).ready(() => {
    (() => {
      const init = () => {
        buildHTML();
        buildCSS();
        setEvents();
        fetchProducts();
      };
  
      const buildHTML = () => {
        const html = `
        <div class="container">
        <div class="head">
        <div class="head_baslik">Sizin İçin Seçtiklerimiz</div>
        </div>
           <div class="carousel_container">
    <button class="arrow-button arrow-left"></button>

    <div class="carousel_track_container">
      <div class="carousel_items">
        <div class="carousel_item">
          <div class="product-image">
            <img src="">
          </div>
          <div class="product-info">
            <div class="product-title">
            <b></b></div>
            
            <div class="product-price">
            
            </div>
            <div class="product-buttons">
          </div>
        </div>
      </div>
    </div>

    <button class="arrow-button arrow-right"></button>
  </div>
</div>

        `;
        $('.product-detail').append(html);
      };
  
      const buildCSS = () => {
        const css = `
        
          .carousel_container {
  position: relative;
  width: 70%;
  
  margin: auto;
  align-items: center;
}
  .head {
  background-color: #fef6eb; 
  padding: 25px 67px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
 
  margin: 20px auto;
  max-width: 1200px;
      border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}

.head_baslik {
  
  font-size: 1.75rem;
  font-weight: 700;
font-family: Quicksand-Bold;
  color: #f28e00;
  padding-left: 26px;
  margin: 0;
}

.carousel_track_container {
  overflow-x: hidden; 
  scroll-behavior: unset; 
  width: 100%;
  
  flex: 1;
  display: flex;
}
  .carousel_items {
  display: flex;
  gap: 10px;
  padding: 20px 0;
  
  
}
  .carousel_item {
  min-width: calc(100% / 5 - 35px); 
  max-width: calc(100% / 5 - 35px);
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
  font-family: Arial, sans-serif;
  cursor: pointer;
  min-height: 320px;
  
}

.carousel_item:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-color: #f28e00;
 
}
  
.product-image {
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
}

.product-image {
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
}
  

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.heart-svg {
  fill: white;             
  stroke: #f28e00;          
  stroke-width: 2;
  transition: stroke 0.3s ease;
}

.heart-icon:hover {
  background-color: #fff0e0;   
}

.heart-icon:hover .heart-svg {
  stroke: #ff6600;             
}
.product-info {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.product-title {
  font-size: 11px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 6px;
   min-height: 40px;
}

.product-price {
 font-size: 1.3rem;
  font-weight: bold;
  color:rgb(121, 121, 121);
  margin-bottom: 52px;
    text-align: left;
      margin-top: 30px;
        display: flex;
  flex-direction: column;
}
.original-price {
  text-decoration: none; 
}
  .original-price.strikethrough {
  text-decoration: line-through; 
  color: #b0b0b0;
  font-size: 15px; 
}

.discounted-price {
  color: #00a365; 
  font-size: 1.4rem; 
  margin-top:15px;
}
  .discount-percentage{
  color: #00a365;
  font-size: 18px;
  }

.product-buttons {
  display: flex;
  justify-content: center;
  
  
}
  .product-buttons button {
  background-color: #fef6eb;
  color: #f28e00;
  border: none;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
 
  font-size: 14px;
  font-weight: 400;
  border-radius: 37.5px;
  
}

.product-buttons button:hover {
  background-color:#f28e00;
  color: #fff;
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background-color: #fef6eb;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: #f28e00;
   z-index: 10;
  

}

.arrow-button:hover {
  background-color: #fff;
}

.arrow-left {
  left: -50px;
}

.arrow-right {
  right: -50px;
}

.arrow-button::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #f28e00;;
  border-right: 2px solid #f28e00;;
}
.product-title span {
  font-family: Arial, sans-serif;  
line-height: 1.4;  
color: #555555;
opacity: 0.7;
}
.product-title b {
  font-family: Arial, sans-serif;  
line-height: 1.4;  

opacity: 0.6;
}
.product-rating {
  display: flex;
  gap: 2px;
  margin: 4px 0 8px 0;
  margin-top:30px;
}

.product-rating .star {
  color: #FFD700; 
  font-size: 20px;
    line-height: 1;

}

.product-rating .star.empty {
  color: #ddd; 
}



.arrow-right::before {
  transform: rotate(45deg);
}
        `;
        $('<style>').addClass('carousel-style')
          .html(css)
          .appendTo('head');
      };
  
   
      const fetchProducts = () => {
        

        $.getJSON('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json', data => {
            
            const itemsHTML = data.map(product =>{
                const originalPrice = parseFloat(product.original_price);
            const price = parseFloat(product.price);
            
 
            const originalPriceClass = originalPrice !== price ? 'strikethrough' : '';

            let discountPercentage = 0;
            if (originalPrice !== price) {
                discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
            }
            
                 return `
              <div class="carousel_item" onclick="window.location.href='${product.url}'">
                <div class="product-image">
                <div class="heart-icon">
  <svg viewBox="0 0 24 24" width="30" height="30" class="heart-svg">
    <path d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0L12 7.9 8.7 4.6c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l3.3 3.3L12 20l5.5-6.6 3.3-3.3c1.5-1.5 1.5-4 0-5.5z"/>
  </svg>
</div>
                  <img src="${product.img}" />
                </div>
                <div class="product-info">
                  <div class="product-title">
                  <b>${product.brand} -</b>
                  <span>${product.name}</span></div>
                  <div class="product-rating">
  ${'<span class="star">&#9733;</span>'.repeat(4)}<span class="star empty">&#9733;</span>
</div>
                  <div class="product-price">
                  ${originalPrice !== price ? `
                    <div>
                    <span class="original-price ${originalPriceClass}">${originalPrice.toFixed(2)} TL</span>
                    <span class="discount-percentage">  %${discountPercentage}</span>
                    </div>
                    <span class="discounted-price">${price.toFixed(2)} TL</span>
                    
                ` : `
                    <span class="original-price">${originalPrice.toFixed(2)} TL</span>
                `}
                  </div>
                  <div class="product-buttons">
            <button>Sepete Ekle</button>
            
          </div>
                </div>
              </div>
            `}).join('');
            $('.carousel_items').html(itemsHTML);
          });
      };

      const setEvents = () => {
        $('.arrow-left').on('click', () => {
          $('.carousel_track_container').scrollLeft(function (i, val) {
            return val - 300;
          });
        });
  
        $('.arrow-right').on('click', () => {
          $('.carousel_track_container').scrollLeft(function (i, val) {
            return val + 300;
          });
        });
// mouse ile sürükleyerke kaydırma işlemi yani drag to scroll
//ama ürüne basıp kaydırma yapınca ürünün olduğu sayfaya atıyor
let isDragging = false;
let startX;
let scrollLeft;

$('.carousel_track_container').on('mousedown', function (e) {
  isDragging = true;
  startX = e.pageX - $(this).offset().left;  
  scrollLeft = $(this).scrollLeft(); 
});


$('.carousel_track_container').on('mousemove', function (e) {
  if (!isDragging) return; 
  e.preventDefault(); 
  const x = e.pageX - $(this).offset().left; 
  const scroll = x - startX; 

  $(this).scrollLeft(scrollLeft - scroll);
});


$('.carousel_track_container').on('mouseup', function () {
  isDragging = false;
});

$('.carousel_track_container').on('mouseleave', function () {
  isDragging = false;
});
        
        
        


      };
  
      init();
    })();
  });
  