// import React from 'react'

// interface MyFavoriteGoodType {
//   isSelectAll: boolean;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   item: any,
// }

// const MyFavoriteGood: React.FC<MyFavoriteGoodType> = ({item}) => {

//   const [isClose, setIsClose] = React.useState(false)
  
//   return (
//     <div className='comparisonGoodsMain'>
//            <div className='comparisonGoodMain-lock-block' onClick={() => setIsClose(!isClose)}>
//                   <div className='comparisonGoodMain-lock-relative'>
//                   <div className='comparisonGoodMain-lock'>
//                   {
//                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                        <path d="M4 12.667V7.33366C4 6.96546 4.29848 6.66699 4.66667 6.66699H11.3333C11.7015 6.66699 12 6.96546 12 7.33366V12.667C12 13.0352 11.7015 13.3337 11.3333 13.3337H4.66667C4.29848 13.3337 4 13.0352 4 12.667Z" strokeLinejoin="round"/>
//                        <path d="M7.99935 11.3337C8.73573 11.3337 9.33268 10.7367 9.33268 10.0003C9.33268 9.26395 8.73573 8.66699 7.99935 8.66699C7.26297 8.66699 6.66602 9.26395 6.66602 10.0003C6.66602 10.7367 7.26297 11.3337 7.99935 11.3337Z" strokeLinejoin="round"/>
//                        </svg>
                       
                       
                       
                       
//                   }
//             </div>
//             <div className={['comparisonGoodMain-lock-close', isClose ? 'comparisonGoodMain-lock-open' : ''].join(" ")}>
//                   {
//                        <svg  viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M0.5 5V3.66667C0.5 2.19391 1.61929 1 3 1C4.38069 1 5.5 2.19391 5.5 3.66667V5" strokeLinejoin="round"/>
//                        </svg>
                       
                       
//                   }
//             </div>
//                   </div>

//            </div>



//             <div className='comparisonGoodMain-gallery'>
//               <img src={item.photoGood[0]} alt="товар" />
//             </div>
//             <h2 className='comparisonGoodMain-title'>{item.titleGood}</h2>
            
//             <div className='comparisonGoodMain-actions-price'>
//               <div className='comparisonGoodMain-actions'>
//                 <div>
//                   <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M12.8287 3.17157C13.8037 4.14853 14.1701 5.50003 13.9286 6.75787C14.3079 6.8648 14.6661 7.0668 14.9651 7.36353C15.901 8.29267 15.901 9.79913 14.9651 10.7283L11.3337 14.3333L9.31899 12.3333L7.33359 14.3233L1.68125 8.662C0.278358 7.09133 0.330797 4.67934 1.83857 3.17157C3.34804 1.6621 5.76379 1.61125 7.33433 3.01902C8.90033 1.61333 11.3203 1.66 12.8287 3.17157ZM8.64166 8.30973C8.23099 8.7174 8.23099 9.37433 8.64166 9.782L11.3337 12.4545L14.0257 9.782C14.4363 9.37433 14.4363 8.7174 14.0257 8.30973C13.6097 7.89673 12.9311 7.89673 12.5137 8.3112L11.3323 9.4804L10.3943 8.55L10.1522 8.30973C9.73619 7.89673 9.05766 7.89673 8.64166 8.30973ZM2.78137 4.11438C1.78821 5.10754 1.73835 6.6982 2.65361 7.7488L7.33359 12.4362L8.37299 11.3947L7.70226 10.7283C6.76633 9.79913 6.76633 8.29267 7.70226 7.36353C8.63819 6.43438 10.1557 6.43438 11.0916 7.36353L11.3334 7.6034L11.5757 7.36353C11.8588 7.08253 12.1951 6.88647 12.5523 6.77547C12.8294 5.86385 12.6042 4.83415 11.885 4.1134C10.8856 3.11196 9.27206 3.07134 8.22499 4.01125L7.33493 4.81016L6.44436 4.01187C5.39431 3.07065 3.7837 3.11205 2.78137 4.11438Z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2.66957 4.27839L0.507812 2.11663L1.45062 1.17383L3.61238 3.33559H13.7735C14.1417 3.33559 14.4402 3.63407 14.4402 4.00225C14.4402 4.06713 14.4307 4.13167 14.4121 4.19382L12.8121 9.52715C12.7275 9.80915 12.4679 10.0023 12.1735 10.0023H4.00291V11.3356H11.3363V12.669H3.33624C2.96805 12.669 2.66957 12.3704 2.66957 12.0023V4.27839ZM4.00291 4.66892V8.66895H11.6775L12.8775 4.66892H4.00291ZM3.66957 15.3356C3.11729 15.3356 2.66957 14.8879 2.66957 14.3356C2.66957 13.7833 3.11729 13.3356 3.66957 13.3356C4.22186 13.3356 4.66957 13.7833 4.66957 14.3356C4.66957 14.8879 4.22186 15.3356 3.66957 15.3356ZM11.6696 15.3356C11.1173 15.3356 10.6696 14.8879 10.6696 14.3356C10.6696 13.7833 11.1173 13.3356 11.6696 13.3356C12.2219 13.3356 12.6696 13.7833 12.6696 14.3356C12.6696 14.8879 12.2219 15.3356 11.6696 15.3356Z"/>
//                   </svg>
//                 </div>
//                 <div>
//                     <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M2.66634 5.33398H13.333V14.0007C13.333 14.3689 13.0345 14.6673 12.6663 14.6673H3.33301C2.96482 14.6673 2.66634 14.3689 2.66634 14.0007V5.33398ZM3.99967 6.66732V13.334H11.9997V6.66732H3.99967ZM5.99967 8.00065H7.33301V12.0007H5.99967V8.00065ZM8.66634 8.00065H9.99967V12.0007H8.66634V8.00065ZM4.66634 3.33398V2.00065C4.66634 1.63246 4.96482 1.33398 5.33301 1.33398H10.6663C11.0345 1.33398 11.333 1.63246 11.333 2.00065V3.33398H14.6663V4.66732H1.33301V3.33398H4.66634ZM5.99967 2.66732V3.33398H9.99967V2.66732H5.99967Z" />
//                     </svg>
//                 </div>
//               </div>
//               {/* {
//                 windowRef.current > 500 && <div className='comparisonGoodMain-price'>{itemGood.price} ₽</div>
//               } */}
//             </div>
          
//     </div>
//   )
// }

// export default MyFavoriteGood

// import React from 'react'
// // import GoodSection from '../../GoodSection/GoodSection'
// import { CustomContextMain } from '../../../context/MainContext'
// import GoodSectionLine from '../../GoodSection/GoodSectionLine'

// const MyFavoriteGood = () => {
//   return (
//     <div>
//     </div>
//   )
// }

// export default MyFavoriteGood