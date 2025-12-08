import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSimpleGlobal } from '..'
import { MenuList } from './MenuList'

/**
 * 選單導航
 * @param {*} props
 * @returns
 */
export default function NavBar(props) {
  const [showSearchInput, changeShowSearchInput] = useState(false)
  const router = useRouter()
  const { searchModal } = useSimpleGlobal()

  // 展示搜尋框
  const toggleShowSearchInput = () => {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    } else {
      changeShowSearchInput(!showSearchInput)
    }
  }

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      const search = document.getElementById('simple-search').value
      if (search) {
        router.push({ pathname: '/search/' + search })
      }
    }
  }

  return (
    <nav className='w-full relative z-20 border-b transition-all duration-300' style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#B0C9E0', backdropFilter: 'blur(10px)' }}>
      <div
        id='nav-bar-inner'
        className='h-14 mx-auto max-w-9/10 justify-between items-center text-sm md:text-base md:justify-start'>
        {/* 左側選單 */}
        <div className='h-full w-full float-left text-center md:text-left flex flex-wrap items-center md:justify-start space-x-6'>
          {showSearchInput && (
            <input
              autoFocus
              id='simple-search'
              onKeyUp={onKeyUp}
              className='float-left w-full outline-none h-full px-4 bg-transparent text-gray-700 dark:text-gray-300'
              aria-label='Submit search'
              type='search'
              name='s'
              autoComplete='off'
              placeholder='搜尋...'
            />
          )}
          {!showSearchInput && <MenuList {...props} />}
        </div>

        <div className='absolute right-8 h-full text-center px-2 flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer transition-colors'>
          <i
            className={
              showSearchInput
                ? 'fa-regular fa-circle-xmark'
                : 'fa-solid fa-magnifying-glass' + ' align-middle'
            }
            onClick={toggleShowSearchInput}></i>
        </div>
      </div>
    </nav>
  )
}
