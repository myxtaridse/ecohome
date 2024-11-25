import React from 'react'
import GoodSectionGallery from './GoodSectionGallery'
import Rating from '../Rating'
import { useLocation } from 'react-router-dom'

export interface GoodSectionType {
    article: string,
    titleGood: string,
    photoGood: string[],
    categoryChildren: string,
    price: number,
    description: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameter: any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reviews: any[],
}

const GoodSection: React.FC<GoodSectionType> = ({titleGood, price, reviews}) => {
    const location = useLocation();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const averageRating = reviews.reduce((sum: number, review: any) => {
        return sum + parseFloat(review.statusRev)
    }, 0);
  return (
    <div className='goodSection'>
        <div><GoodSectionGallery /></div>
        <h2>{titleGood}</h2>
        {
            location && location.pathname !== '/comparison' && (
                <div className='goodSection-rating'>
                    <Rating rating={averageRating ? averageRating / reviews.length : 5} />
                    <p>{averageRating ? averageRating / reviews.length : 5}</p>
                </div>
            )
        }
        
        <div className='goodSection-actions-price'>
            <div className='goodSection-actions'>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0352 3.96447C17.2538 5.18567 17.7119 6.87504 17.41 8.44733C17.8842 8.581 18.3319 8.8335 18.7056 9.20442C19.8755 10.3658 19.8755 12.2489 18.7056 13.4103L14.1663 17.9167L11.648 15.4167L9.16626 17.9042L2.10082 10.8275C0.347215 8.86417 0.412763 5.84918 2.29747 3.96447C4.18432 2.07763 7.204 2.01406 9.16718 3.77378C11.1247 2.01667 14.1497 2.075 16.0352 3.96447ZM10.8013 10.3872C10.288 10.8968 10.288 11.7179 10.8013 12.2275L14.1663 15.5682L17.5313 12.2275C18.0447 11.7179 18.0447 10.8968 17.5313 10.3872C17.0113 9.87092 16.1632 9.87092 15.6413 10.389L14.1646 11.8505L12.9922 10.6875L12.6895 10.3872C12.1695 9.87092 11.3213 9.87092 10.8013 10.3872ZM3.47598 5.14298C2.23453 6.38443 2.17221 8.37275 3.31628 9.686L9.16626 15.5453L10.4655 14.2433L9.62709 13.4103C8.45718 12.2489 8.45718 10.3658 9.62709 9.20442C10.797 8.04298 12.6938 8.04298 13.8638 9.20442L14.166 9.50425L14.4689 9.20442C14.8228 8.85317 15.2431 8.60808 15.6897 8.46933C16.036 7.32981 15.7545 6.04268 14.8555 5.14175C13.6063 3.88995 11.5893 3.83918 10.2805 5.01406L9.16793 6.0127L8.05472 5.01484C6.74216 3.83831 4.72889 3.89007 3.47598 5.14298Z" fill="#565656"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66699 10.0003H3.33366V17.5003H1.66699V10.0003ZM4.16699 11.667H5.83366V17.5003H4.16699V11.667ZM13.3337 6.66699H15.0003V17.5003H13.3337V6.66699ZM15.8337 8.33366H17.5003V17.5003H15.8337V8.33366ZM7.50033 1.66699H9.16699V17.5003H7.50033V1.66699ZM10.0003 3.33366H11.667V17.5003H10.0003V3.33366Z" fill="#565656"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33366 6.66699H16.667V17.5003C16.667 17.9606 16.2939 18.3337 15.8337 18.3337H4.16699C3.70676 18.3337 3.33366 17.9606 3.33366 17.5003V6.66699ZM5.00033 8.33366V16.667H15.0003V8.33366H5.00033ZM7.50033 10.0003H9.16699V15.0003H7.50033V10.0003ZM10.8337 10.0003H12.5003V15.0003H10.8337V10.0003ZM5.83366 4.16699V2.50033C5.83366 2.04009 6.20676 1.66699 6.66699 1.66699H13.3337C13.7939 1.66699 14.167 2.04009 14.167 2.50033V4.16699H18.3337V5.83366H1.66699V4.16699H5.83366ZM7.50033 3.33366V4.16699H12.5003V3.33366H7.50033Z" fill="#565656"/>
                    </svg>
                </div>
            </div>
            <h1>{price} ₽</h1>
        </div>
    </div>
  )
  
}

export default GoodSection