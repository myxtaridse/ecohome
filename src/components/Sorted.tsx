import React from 'react'
import { sortList } from '../const/const'



const Sorted = () => {

    const [isSelectAll, setIsSelectAll] = React.useState(false);
    const [selectItem, setSelectItem] = React.useState(0);

  return (
    
    <div className='comparison-goods-sorted-block' onClick={() => setIsSelectAll(!isSelectAll)}>
    <div className='comparison-goods-sorted-block-select'>
      <p>Сортировать по:</p>
      <div className='comparison-goods-sorted-block-select-item comparison-select-item-hover'>
        <div>
        <svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.4138 43.4141L47.4141 53.4124C47.4117 53.4148 47.4091 53.4167 47.4067 53.4191C47.3623 53.463 47.316 53.5049 47.2677 53.5447C47.2445 53.5637 47.22 53.5803 47.1962 53.5981C47.1677 53.6194 47.1399 53.6415 47.1104 53.6613C47.082 53.6802 47.0527 53.6965 47.0237 53.7139C46.9968 53.73 46.9703 53.7469 46.9426 53.7618C46.9131 53.7776 46.8827 53.7909 46.8527 53.8052C46.8235 53.8188 46.7949 53.8334 46.7651 53.8457C46.736 53.8578 46.7062 53.8676 46.6765 53.8782C46.6447 53.8896 46.613 53.9019 46.5804 53.9119C46.5508 53.9208 46.5208 53.9272 46.491 53.9348C46.4575 53.9432 46.4246 53.9526 46.3906 53.9594C46.356 53.9662 46.321 53.9702 46.2861 53.9752C46.2565 53.9795 46.2273 53.9851 46.1973 53.988C46.1317 53.9945 46.0659 53.998 46 53.998C45.9341 53.998 45.8683 53.9945 45.8026 53.988C45.7729 53.9851 45.7441 53.9796 45.7148 53.9753C45.6796 53.9703 45.6443 53.9662 45.6092 53.9592C45.5757 53.9526 45.5432 53.9434 45.5103 53.9351C45.4799 53.9275 45.4493 53.9209 45.4194 53.9117C45.3872 53.902 45.3562 53.8899 45.3247 53.8787C45.2947 53.8679 45.2643 53.8579 45.2346 53.8457C45.2054 53.8336 45.1776 53.8195 45.1492 53.806C45.1184 53.7915 45.0873 53.7778 45.057 53.7616C45.0303 53.7473 45.0049 53.731 44.979 53.7156C44.949 53.6976 44.9185 53.6805 44.8892 53.661C44.8611 53.6422 44.8347 53.6212 44.8076 53.6011C44.7823 53.5823 44.7566 53.5646 44.7319 53.5444C44.6882 53.5085 44.6466 53.4701 44.6061 53.4307C44.5995 53.4243 44.5923 53.4188 44.5858 53.4124L34.5858 43.4124C34.2107 43.0373 34 42.5285 34 41.9981C34 41.4676 34.2107 40.9589 34.5858 40.5838C34.9608 40.2087 35.4696 39.998 36 39.998C36.5305 39.9979 37.0392 40.2087 37.4143 40.5837L44 47.1696V27.9981C44 27.4676 44.2107 26.9589 44.5858 26.5838C44.9609 26.2088 45.4696 25.9981 46 25.9981C46.5304 25.9981 47.0391 26.2088 47.4142 26.5838C47.7893 26.9589 48 27.4676 48 27.9981V47.1702L54.5857 40.5854C54.9608 40.2104 55.4695 39.9997 55.9999 39.9998C56.5303 39.9998 57.039 40.2106 57.4141 40.5857C57.7891 40.9608 57.9998 41.4695 57.9997 41.9999C57.9997 42.5303 57.7889 43.039 57.4138 43.4141ZM29.9998 29.998H12C11.4696 29.998 10.9609 30.2088 10.5858 30.5838C10.2107 30.9589 10 31.4676 10 31.998C10 32.5285 10.2107 33.0372 10.5858 33.4123C10.9609 33.7873 11.4696 33.998 12 33.998H29.9998C30.5302 33.998 31.0389 33.7873 31.414 33.4123C31.789 33.0372 31.9998 32.5285 31.9998 31.998C31.9998 31.4676 31.789 30.9589 31.414 30.5838C31.0389 30.2088 30.5302 29.998 29.9998 29.998ZM12 17.998H45.9997C46.5302 17.998 47.0389 17.7873 47.414 17.4123C47.789 17.0372 47.9997 16.5285 47.9997 15.998C47.9997 15.4676 47.789 14.9589 47.414 14.5838C47.0389 14.2088 46.5302 13.998 45.9997 13.998H12C11.4696 13.998 10.9609 14.2088 10.5858 14.5838C10.2107 14.9589 10 15.4676 10 15.998C10 16.5285 10.2107 17.0372 10.5858 17.4123C10.9609 17.7873 11.4696 17.998 12 17.998ZM26 45.998H12C11.4696 45.998 10.9609 46.2088 10.5858 46.5838C10.2107 46.9589 10 47.4676 10 47.998C10 48.5285 10.2107 49.0372 10.5858 49.4123C10.9609 49.7873 11.4696 49.998 12 49.998H26C26.5304 49.998 27.0391 49.7873 27.4142 49.4123C27.7893 49.0372 28 48.5285 28 47.998C28 47.4676 27.7893 46.9589 27.4142 46.5838C27.0391 46.2088 26.5304 45.998 26 45.998Z"/>
        </svg>
      </div>
      <p>{sortList[selectItem].title}</p>
      </div>
</div>
{
isSelectAll && (
  <div className='comparison-goods-sorted-popup'>
    {
    sortList && sortList.map((itemSort) => (
      <div key={itemSort.id} className='comparison-goods-sorted-block-select-item' onClick={() => setSelectItem(parseFloat(itemSort.id))}>
        <div>
          {
            parseFloat(itemSort.id) % 2 === 0 ? (
            <svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.4138 43.4141L47.4141 53.4124C47.4117 53.4148 47.4091 53.4167 47.4067 53.4191C47.3623 53.463 47.316 53.5049 47.2677 53.5447C47.2445 53.5637 47.22 53.5803 47.1962 53.5981C47.1677 53.6194 47.1399 53.6415 47.1104 53.6613C47.082 53.6802 47.0527 53.6965 47.0237 53.7139C46.9968 53.73 46.9703 53.7469 46.9426 53.7618C46.9131 53.7776 46.8827 53.7909 46.8527 53.8052C46.8235 53.8188 46.7949 53.8334 46.7651 53.8457C46.736 53.8578 46.7062 53.8676 46.6765 53.8782C46.6447 53.8896 46.613 53.9019 46.5804 53.9119C46.5508 53.9208 46.5208 53.9272 46.491 53.9348C46.4575 53.9432 46.4246 53.9526 46.3906 53.9594C46.356 53.9662 46.321 53.9702 46.2861 53.9752C46.2565 53.9795 46.2273 53.9851 46.1973 53.988C46.1317 53.9945 46.0659 53.998 46 53.998C45.9341 53.998 45.8683 53.9945 45.8026 53.988C45.7729 53.9851 45.7441 53.9796 45.7148 53.9753C45.6796 53.9703 45.6443 53.9662 45.6092 53.9592C45.5757 53.9526 45.5432 53.9434 45.5103 53.9351C45.4799 53.9275 45.4493 53.9209 45.4194 53.9117C45.3872 53.902 45.3562 53.8899 45.3247 53.8787C45.2947 53.8679 45.2643 53.8579 45.2346 53.8457C45.2054 53.8336 45.1776 53.8195 45.1492 53.806C45.1184 53.7915 45.0873 53.7778 45.057 53.7616C45.0303 53.7473 45.0049 53.731 44.979 53.7156C44.949 53.6976 44.9185 53.6805 44.8892 53.661C44.8611 53.6422 44.8347 53.6212 44.8076 53.6011C44.7823 53.5823 44.7566 53.5646 44.7319 53.5444C44.6882 53.5085 44.6466 53.4701 44.6061 53.4307C44.5995 53.4243 44.5923 53.4188 44.5858 53.4124L34.5858 43.4124C34.2107 43.0373 34 42.5285 34 41.9981C34 41.4676 34.2107 40.9589 34.5858 40.5838C34.9608 40.2087 35.4696 39.998 36 39.998C36.5305 39.9979 37.0392 40.2087 37.4143 40.5837L44 47.1696V27.9981C44 27.4676 44.2107 26.9589 44.5858 26.5838C44.9609 26.2088 45.4696 25.9981 46 25.9981C46.5304 25.9981 47.0391 26.2088 47.4142 26.5838C47.7893 26.9589 48 27.4676 48 27.9981V47.1702L54.5857 40.5854C54.9608 40.2104 55.4695 39.9997 55.9999 39.9998C56.5303 39.9998 57.039 40.2106 57.4141 40.5857C57.7891 40.9608 57.9998 41.4695 57.9997 41.9999C57.9997 42.5303 57.7889 43.039 57.4138 43.4141ZM29.9998 29.998H12C11.4696 29.998 10.9609 30.2088 10.5858 30.5838C10.2107 30.9589 10 31.4676 10 31.998C10 32.5285 10.2107 33.0372 10.5858 33.4123C10.9609 33.7873 11.4696 33.998 12 33.998H29.9998C30.5302 33.998 31.0389 33.7873 31.414 33.4123C31.789 33.0372 31.9998 32.5285 31.9998 31.998C31.9998 31.4676 31.789 30.9589 31.414 30.5838C31.0389 30.2088 30.5302 29.998 29.9998 29.998ZM12 17.998H45.9997C46.5302 17.998 47.0389 17.7873 47.414 17.4123C47.789 17.0372 47.9997 16.5285 47.9997 15.998C47.9997 15.4676 47.789 14.9589 47.414 14.5838C47.0389 14.2088 46.5302 13.998 45.9997 13.998H12C11.4696 13.998 10.9609 14.2088 10.5858 14.5838C10.2107 14.9589 10 15.4676 10 15.998C10 16.5285 10.2107 17.0372 10.5858 17.4123C10.9609 17.7873 11.4696 17.998 12 17.998ZM26 45.998H12C11.4696 45.998 10.9609 46.2088 10.5858 46.5838C10.2107 46.9589 10 47.4676 10 47.998C10 48.5285 10.2107 49.0372 10.5858 49.4123C10.9609 49.7873 11.4696 49.998 12 49.998H26C26.5304 49.998 27.0391 49.7873 27.4142 49.4123C27.7893 49.0372 28 48.5285 28 47.998C28 47.4676 27.7893 46.9589 27.4142 46.5838C27.0391 46.2088 26.5304 45.998 26 45.998Z"/>
            </svg>) : (
              <svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.4138 20.5859L47.4141 10.5876C47.4117 10.5852 47.4091 10.5833 47.4067 10.5809C47.3623 10.537 47.316 10.4951 47.2677 10.4553C47.2445 10.4363 47.22 10.4197 47.1962 10.4019C47.1677 10.3806 47.1399 10.3585 47.1104 10.3387C47.082 10.3198 47.0527 10.3035 47.0237 10.2861C46.9968 10.27 46.9703 10.2531 46.9426 10.2382C46.9131 10.2224 46.8827 10.2091 46.8527 10.1948C46.8235 10.1812 46.7949 10.1666 46.7651 10.1543C46.736 10.1422 46.7062 10.1324 46.6765 10.1218C46.6447 10.1104 46.613 10.0981 46.5804 10.0881C46.5508 10.0792 46.5208 10.0728 46.491 10.0652C46.4575 10.0568 46.4246 10.0474 46.3906 10.0406C46.356 10.0338 46.321 10.0298 46.2861 10.0248C46.2565 10.0205 46.2273 10.0149 46.1973 10.012C46.1317 10.0055 46.0659 10.002 46 10.002C45.9341 10.002 45.8683 10.0055 45.8026 10.012C45.7729 10.0149 45.7441 10.0204 45.7148 10.0247C45.6796 10.0297 45.6443 10.0338 45.6092 10.0408C45.5757 10.0474 45.5432 10.0566 45.5103 10.0649C45.4799 10.0725 45.4493 10.0791 45.4194 10.0883C45.3872 10.098 45.3562 10.1101 45.3247 10.1213C45.2947 10.1321 45.2643 10.1421 45.2346 10.1543C45.2054 10.1664 45.1776 10.1805 45.1492 10.194C45.1184 10.2085 45.0873 10.2222 45.057 10.2384C45.0303 10.2527 45.0049 10.269 44.979 10.2844C44.949 10.3024 44.9185 10.3195 44.8892 10.339C44.8611 10.3578 44.8347 10.3788 44.8076 10.3989C44.7823 10.4177 44.7566 10.4354 44.7319 10.4556C44.6882 10.4915 44.6466 10.5299 44.6061 10.5693C44.5995 10.5757 44.5923 10.5812 44.5858 10.5876L34.5858 20.5876C34.2107 20.9627 34 21.4715 34 22.0019C34 22.5324 34.2107 23.0411 34.5858 23.4162C34.9608 23.7913 35.4696 24.002 36 24.002C36.5305 24.0021 37.0392 23.7913 37.4143 23.4163L44 16.8304V36.0019C44 36.5324 44.2107 37.0411 44.5858 37.4162C44.9609 37.7912 45.4696 38.0019 46 38.0019C46.5304 38.0019 47.0391 37.7912 47.4142 37.4162C47.7893 37.0411 48 36.5324 48 36.0019V16.8298L54.5857 23.4146C54.9608 23.7896 55.4695 24.0003 55.9999 24.0002C56.5303 24.0002 57.039 23.7894 57.4141 23.4143C57.7891 23.0392 57.9998 22.5305 57.9997 22.0001C57.9997 21.4697 57.7889 20.961 57.4138 20.5859ZM29.9998 34.002H12C11.4696 34.002 10.9609 33.7912 10.5858 33.4162C10.2107 33.0411 10 32.5324 10 32.002C10 31.4715 10.2107 30.9628 10.5858 30.5877C10.9609 30.2127 11.4696 30.002 12 30.002H29.9998C30.5302 30.002 31.0389 30.2127 31.414 30.5877C31.789 30.9628 31.9998 31.4715 31.9998 32.002C31.9998 32.5324 31.789 33.0411 31.414 33.4162C31.0389 33.7912 30.5302 34.002 29.9998 34.002ZM12 46.002H45.9997C46.5302 46.002 47.0389 46.2127 47.414 46.5877C47.789 46.9628 47.9997 47.4715 47.9997 48.002C47.9997 48.5324 47.789 49.0411 47.414 49.4162C47.0389 49.7912 46.5302 50.002 45.9997 50.002H12C11.4696 50.002 10.9609 49.7912 10.5858 49.4162C10.2107 49.0411 10 48.5324 10 48.002C10 47.4715 10.2107 46.9628 10.5858 46.5877C10.9609 46.2127 11.4696 46.002 12 46.002ZM26 18.002H12C11.4696 18.002 10.9609 17.7912 10.5858 17.4162C10.2107 17.0411 10 16.5324 10 16.002C10 15.4715 10.2107 14.9628 10.5858 14.5877C10.9609 14.2127 11.4696 14.002 12 14.002H26C26.5304 14.002 27.0391 14.2127 27.4142 14.5877C27.7893 14.9628 28 15.4715 28 16.002C28 16.5324 27.7893 17.0411 27.4142 17.4162C27.0391 17.7912 26.5304 18.002 26 18.002Z"/>
              </svg>
              
            )
          }
          
         

        </div>
        <p>{itemSort.title}</p>
      </div>
    ))
    }
    
  </div>
)
}
</div>


  )
}

export default Sorted