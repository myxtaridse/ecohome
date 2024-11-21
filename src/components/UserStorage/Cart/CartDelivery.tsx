import React from 'react'

interface CartDeliveryType {
  isDelivery: boolean;
  setIsDelivery: (isDelivery: boolean) => void;
}

const CartDelivery: React.FC<CartDeliveryType> = ({isDelivery, setIsDelivery}) => {
 
  return (
    <div className='cartDelivery'>
        <h2>Где и как вы хотите получить заказ?</h2>
        <div className='cartDelivery-flex'>
          <div className={['cartDelivery-item', isDelivery ? '' : 'cartDelivery-active'].join(" ")} onClick={() => setIsDelivery(false)}>
              <div className='cartDelivery-item-svg'>
                <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M80 70.8086H0V73.2527H80V70.8086Z" fill="black"/>
                  <path d="M73.7929 24.3734C73.7929 26.4915 72.0977 28.1523 70.014 28.1523C67.9302 28.1523 66.2351 26.4915 66.2351 24.3734H63.791C63.791 26.4915 62.0959 28.1523 60.0121 28.1523C57.9284 28.1523 56.233 26.4915 56.233 24.3734H53.789C53.789 26.4915 52.0938 28.1523 50.0101 28.1523C47.9263 28.1523 46.231 26.4915 46.231 24.3734H43.787C43.787 26.4915 42.0918 28.1523 40.008 28.1523C37.9243 28.1523 36.229 26.4915 36.229 24.3734H33.7849C33.7849 26.4915 32.0898 28.1523 30.006 28.1523C27.9223 28.1523 26.227 26.4915 26.227 24.3734H23.7832C23.7832 26.4915 22.088 28.1523 20.0043 28.1523C17.9205 28.1523 16.2252 26.4915 16.2252 24.3734H13.7813C13.7813 26.4915 12.0862 28.1523 10.0024 28.1523C7.91867 28.1523 6.22336 26.4915 6.22336 24.3734H3.7793C3.7793 26.4371 4.79586 28.2862 6.35477 29.4298V69.5057H8.79883V30.5102C9.18836 30.5879 9.5907 30.6298 10.0024 30.6298C12.0493 30.6298 13.8687 29.6701 15.0034 28.1399C16.1382 29.6702 17.9573 30.6632 20.0043 30.6632C22.0513 30.6632 23.8705 29.6699 25.0052 28.1398C26.1401 29.6701 27.9591 30.663 30.0062 30.663C32.0532 30.663 33.8724 29.6695 35.0071 28.1396C36.142 29.6698 37.9612 30.6627 40.0082 30.6627C42.0552 30.6627 43.8745 29.669 45.0091 28.1387C46.144 29.669 47.963 30.661 50.0101 30.661C52.057 30.661 53.8763 29.6657 55.011 28.1355C56.1459 29.6659 57.9649 30.6548 60.012 30.6548C62.0588 30.6548 63.8782 29.6532 65.0129 28.1229C66.1477 29.6532 67.9668 30.6295 70.0138 30.6295C70.4779 30.6295 70.9295 30.576 71.3649 30.4779V69.5054H73.8096V29.3179C75.2848 28.1676 76.2374 26.3709 76.2374 24.373H73.7929V24.3734Z" fill="black"/>
                  <path d="M78.6968 20.7891H1.30371V23.2331H78.6968V20.7891Z" fill="black"/>
                  <path d="M76.817 19.4852L71.8159 6.93945H74.9489V0.748047H5.05074V6.93945H8.19902L3.19824 19.4852H76.817ZM23.9879 17.0413H16.6229L19.6536 6.93945H26.0084L23.9879 17.0413ZM33.8932 17.0413H26.4804L28.5007 6.93945H34.9036L33.8932 17.0413ZM36.3495 17.0413L37.3596 6.93945H42.6554L43.6656 17.0413H36.3495ZM46.1218 17.0413L45.1117 6.93945H51.5145L53.5348 17.0413H46.1218ZM56.027 17.0413L54.0067 6.93945H60.3615L63.3921 17.0413H56.027ZM73.2117 17.0413H65.9437L62.9131 6.93945H69.1848L73.2117 17.0413ZM7.49465 4.49539V3.19195H72.5048V4.49539H70.8415H9.1734H7.49465ZM10.8301 6.93945H17.1018L14.0712 17.0413H6.8034L10.8301 6.93945Z" fill="black"/>
                  <path d="M11.2803 35.7207V63.1695H51.2315V35.7207H11.2803ZM13.7243 60.7256V38.1648H48.7876V60.7256H13.7243Z" fill="black"/>
                  <path d="M68.7572 66.8982V40.666H53.7674V66.8982H9.93848V69.3423H56.2114V43.1101H66.3132V69.3423H70.0607V66.8982H68.7572Z" fill="black"/>
                  <path d="M59.9597 56.959H57.5156V59.403H59.9597V56.959Z" fill="black"/>
                  <path d="M68.7574 35.7793H53.7676V38.2234H68.7574V35.7793Z" fill="black"/>
                  <path d="M22.8908 43.5808L17.8896 48.582L19.6177 50.3101L24.6189 45.3089L22.8908 43.5808Z" fill="black"/>
                  <path d="M27.8912 47.3324L19.1396 56.084L20.8677 57.8121L29.6193 49.0605L27.8912 47.3324Z" fill="black"/>
                  <path d="M35.3909 39.8289L29.1396 46.0801L30.8677 47.8082L37.1189 41.557L35.3909 39.8289Z" fill="black"/>
                  <path d="M42.2694 41.7052L29.1426 54.832L30.8707 56.5601L43.9975 43.4333L42.2694 41.7052Z" fill="black"/>
                  <path d="M39.1473 54.8339L36.6465 57.334L38.3743 59.0623L40.8752 56.5622L39.1473 54.8339Z" fill="black"/>
                </svg>
              </div>
              <div className='cartDelivery-item-text'>
                <h2>Самовывоз</h2>
                <p>Сегодня</p>
              </div>
          </div>
          <div className={['cartDelivery-item', isDelivery ? 'cartDelivery-active' : ''].join(" ")} onClick={() => setIsDelivery(true)}>
              <div className='cartDelivery-item-svg'>
                <svg width="62" height="74" viewBox="0 0 62 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.9677 11.3277C32.622 11.3277 33.9179 9.68023 33.9179 7.57695C33.9179 5.47367 32.622 3.82617 30.9677 3.82617C29.3135 3.82617 28.0176 5.47383 28.0176 7.57695C28.0176 9.68008 29.3135 11.3277 30.9677 11.3277ZM30.9677 5.38867C31.7198 5.38867 32.3554 6.3907 32.3554 7.57695C32.3554 8.76305 31.7199 9.76523 30.9677 9.76523C30.2155 9.76523 29.5801 8.76305 29.5801 7.57695C29.5801 6.3907 30.2157 5.38867 30.9677 5.38867Z" fill="black"/>
                  <path d="M61.4732 72.6428C61.1727 70.1878 57.7319 48.7595 57.5855 47.8487L57.5819 47.8275C56.9121 44.2828 56.0269 42.0611 54.6221 40.3979C53.118 38.6176 51.0141 37.4931 47.8 36.7515L40.1908 35.4901L40.1638 35.4861C37.5208 35.1429 35.8599 33.4693 34.9414 30.2239C38.1386 28.7237 40.6144 25.4634 41.4269 21.3765H41.961C42.6247 21.3765 43.245 21.1043 43.7061 20.6115C44.1569 20.1323 44.4052 19.4982 44.4052 18.8257C44.4052 18.0273 44.0513 17.314 43.4993 16.8459C44.2622 16.1881 44.7396 15.2598 44.7396 14.2318V13.9378L45.6738 12.7278C46.3677 11.8292 46.6229 10.6684 46.3738 9.54309C46.1321 8.45059 45.4418 7.5384 44.48 7.04027L32.5555 0.864648C31.5611 0.349805 30.3741 0.349805 29.3794 0.864648L17.455 7.04027C16.4932 7.5384 15.8029 8.45059 15.5613 9.54309C15.3122 10.6684 15.5674 11.8292 16.2613 12.7279L17.1955 13.9376V14.2318C17.1955 15.2595 17.6724 16.1875 18.435 16.8451C18.3635 16.9061 18.2943 16.9701 18.2289 17.0401C17.738 17.5618 17.4858 18.2807 17.5364 19.012C17.6272 20.3381 18.7213 21.3767 20.0272 21.3767C20.1822 21.3767 20.2974 21.4451 20.3661 21.502C20.4754 21.5925 20.5505 21.7173 20.5836 21.8629C21.4699 25.7728 23.8954 28.8207 26.9888 30.2432C26.0704 33.4771 24.411 35.1448 21.7716 35.4862L14.1832 36.7423L14.135 36.7518C10.9211 37.4934 8.81707 38.6179 7.31301 40.3982C5.90816 42.0614 5.02301 44.2831 4.35316 47.8278L4.3491 47.8511C4.3491 47.8511 3.97207 50.2428 3.4541 53.5464L4.99769 53.7884C5.49457 50.62 5.8616 48.2904 5.89066 48.1062C7.07926 41.8262 9.08488 39.5259 14.4627 38.2798L20.8638 37.22L15.1397 44.2775L19.8414 46.5025L16.7908 52.05H13.7438V73.5195H48.1918V52.0498H45.1447L42.0941 46.5023L46.7958 44.2773L41.0718 37.2198L47.4729 38.2797C52.851 39.5259 54.8566 41.8264 56.045 48.1071C56.1333 48.6575 59.1133 67.2187 59.8016 71.9564H51.4096V73.5189H61.581L61.4732 72.6428ZM35.425 38.6634L31.8996 36.5365L35.2938 34.489C35.4896 34.7332 35.6966 34.9596 35.9144 35.1693L35.425 38.6634ZM26.0171 35.1459C26.2303 34.9397 26.4335 34.7176 26.6261 34.4793L30.0355 36.5364L26.5094 38.6634L26.0171 35.1459ZM17.0866 9.88074C17.2279 9.24199 17.6239 8.7123 18.1733 8.42793L30.0977 2.2523C30.6502 1.96621 31.2841 1.96605 31.8366 2.2523L43.7613 8.42793C44.3107 8.71246 44.7068 9.24184 44.848 9.88074C44.9966 10.5525 44.8468 11.2421 44.4369 11.7729L43.3138 13.2275H25.2083V14.79H43.0855C42.7982 15.6476 41.8652 16.2775 40.7621 16.2775H21.1727C20.0693 16.2775 19.1364 15.6476 18.8491 14.79H23.1122V13.2275H18.6208L17.4977 11.7729C17.0879 11.2421 16.938 10.5526 17.0866 9.88074ZM22.1071 21.5173C21.9972 21.0329 21.7399 20.6118 21.3627 20.2989C20.985 19.9864 20.5107 19.8142 20.0269 19.8142C19.5393 19.8142 19.1299 19.415 19.0949 18.9045C19.0741 18.6054 19.1732 18.3162 19.368 18.1092C19.5319 17.934 19.7471 17.8376 19.9738 17.8376H21.008V17.8362C21.0627 17.8382 21.1174 17.84 21.1727 17.84H40.7619C40.8172 17.84 40.8718 17.8382 40.9264 17.8362V17.8376H41.9608C42.4469 17.8376 42.8425 18.2809 42.8425 18.8259C42.8425 19.0989 42.745 19.3529 42.5664 19.5426C42.4025 19.7178 42.1875 19.8142 41.9608 19.8142H40.0986L39.998 20.4786C39.2116 25.6739 35.4638 29.4925 31.0861 29.5579C31.045 29.5587 31.0044 29.559 30.9635 29.559C26.816 29.5592 23.1844 26.2704 22.1071 21.5173ZM30.9625 31.1217C31.0116 31.1217 31.061 31.1212 31.1102 31.1204C31.9207 31.1082 32.7116 30.9875 33.4738 30.7725C33.7364 31.6731 34.0563 32.4761 34.4354 33.1815L30.9677 35.2739L27.4911 33.1768C27.8757 32.4715 28.1983 31.6718 28.4594 30.7798C29.266 31.0025 30.1043 31.1217 30.9625 31.1217ZM22.0104 45.8004L17.6064 43.7161L23.2433 36.7661C23.7188 36.6229 24.1668 36.4354 24.5874 36.2039L26.6119 50.6668L28.1594 50.4501L26.73 40.2384L26.7818 40.3242L30.9674 37.7992L35.153 40.3242L35.2046 40.2387L33.5513 52.05H18.5735L22.0104 45.8004ZM36.5072 63.2453L35.5466 64.4773L45.1388 71.9571H16.7968L27.8385 63.3464L29.1435 64.2828C29.6889 64.6745 30.3283 64.8701 30.9677 64.8701C31.6071 64.8701 32.2466 64.6745 32.7921 64.2829L46.6291 54.3534V71.1379L36.5072 63.2453ZM26.515 62.3967L15.306 71.1381V54.3532L26.515 62.3967ZM31.881 63.0132C31.3349 63.4054 30.6008 63.4054 30.0544 63.0132L16.9535 53.6123H44.9813L31.881 63.0132ZM39.9244 45.8004L43.3611 52.0498H35.1289L37.3452 36.2182C37.7663 36.4462 38.2161 36.6307 38.696 36.7715L44.3283 43.7161L39.9244 45.8004Z" fill="black"/>
                  <path d="M4.61977 56.2062L3.07617 55.9648L2.70479 58.3397L4.24839 58.5811L4.61977 56.2062Z" fill="black"/>
                  <path d="M0.419922 73.5185H10.853V71.956H2.19836C2.45008 70.2024 3.03883 66.3491 3.92695 60.6405L2.38305 60.4004C1.27133 67.5451 0.646953 71.6638 0.52711 72.6424L0.419922 73.5185Z" fill="black"/>
                  <path d="M33.2538 25.4531C31.6325 27.1111 29.4692 26.5361 29.3781 26.5108L29.1656 27.2627L28.9492 28.0134C29.0031 28.0289 29.5731 28.187 30.3864 28.187C31.4944 28.187 33.0531 27.8933 34.3709 26.5456L33.2538 25.4531Z" fill="black"/>
                  <path d="M31.748 21.2891H30.1855V24.5111H31.748V21.2891Z" fill="black"/>
                </svg>
              </div>
              <div className='cartDelivery-item-text'>
                <h2>Доставка</h2>
                <p>Условия доставки</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CartDelivery