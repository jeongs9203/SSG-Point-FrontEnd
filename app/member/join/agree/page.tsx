import React from 'react'
import styles from './agree.module.css'
import { agreements } from '@/data/agreeData'
import { Agreement } from '@/types/agreeDataType'

function page() {
  return (
    <section className='mt-10' style={{marginTop: '60px'}}>
    <div className='top_cnt1 py-10 px-5'>
        <div className={`${styles.join_step} relative`}>
            <ol className='flex relative mb-4'>
                <li className={`relative bg-orange-400 box-border rounded-full w-5 h-5 mr-2.5`}></li>
                <li className={`relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5 bg-tabindex bg-contain`}></li>
                <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-2.5'></li>
                <li className='relative bg-gray-300 box-border rounded-full w-5 h-5 mr-0'></li>
            </ol>
            <p className='text-2xl leading-9 font-bold'>약관동의</p>
        </div>
    </div>
    <div className='pt-0 pb-10 px-5'>
      <div className='pb-10'> 
        <div className='relative block w-full h-12'>
          <input 
            type="checkbox" 
            id="agreeAllChk" 
            className='appearance-none relative w-full h-full border-0'
          />
          <label 
            htmlFor="agreeAllChk"
            className='absolute left-0 top-0 w-full h-full text-center bg-gray-100 z-10 font-black text-sm leading-6 box-border rounded-lg pt-3 cursor-pointer'
          >
            모두 동의합니다.
          </label>
        </div>
        <p className='text-xs leading-5 break-keep pt-2 font-normal'>
          ※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 필수 서비스 이용은 가능합니다.
        </p>
        <p className='pt-10 pb-4 text-lg leading-7 font-bold'>
          신세계포인트 통합회원
        </p>
        <p className='text-[11px] leading-5 font-bold'>
          ㈜이마트, ㈜신세계, ㈜광주신세계, ㈜신세계동대구복합환승센터 귀중
        </p>
        <ul className='mt-[17px]'>
          {
            agreements.map((items:Agreement) => (
              <li key={items.id} className='relative pr-[22px] mb-4'>
                <div className={styles.chk_box}>
                  <input
                    className='absolute left-0 top-0 w-5 h-5 rounded-full border border-black appearance-none cursor-pointer align-middle'
                    id={items.id}
                    type='checkbox'
                  />
                  <label htmlFor={items.id} className='block min-h-5 pt-px pl-7 text-xs leading-4 break-keep font-bold'>
                    {items.label}
                  </label>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='btn_box'></div>
    </div>
</section>
  )
}

export default page