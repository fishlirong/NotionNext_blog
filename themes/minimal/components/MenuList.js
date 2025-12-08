import Collapse from '@/components/Collapse'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { isBrowser } from '@/lib/utils'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'
import { MenuItemDrop } from './MenuItemDrop'

/**
 * 選單導航
 * @param {*} props
 * @returns
 */
export const MenuList = ({ customNav, customMenu }) => {
  const { locale } = useGlobal()
  const [isOpen, changeIsOpen] = useState(false)
  const toggleIsOpen = () => {
    changeIsOpen(!isOpen)
  }
  const closeMenu = e => {
    changeIsOpen(false)
  }
  const router = useRouter()
  const collapseRef = useRef(null)

  useEffect(() => {
    router.events.on('routeChangeStart', closeMenu)
  })

  // 獲取 POST_URL_PREFIX_MAPPING_CATEGORY 配置
  const { NOTION_CONFIG } = useGlobal()
  const POST_URL_PREFIX_MAPPING_CATEGORY = siteConfig(
    'POST_URL_PREFIX_MAPPING_CATEGORY',
    {},
    NOTION_CONFIG
  )
  
  // 生成分類連結 - 如果有映射配置，使用第一個分類；否則使用通用分類頁面
  let categoryHref = '/category'
  if (POST_URL_PREFIX_MAPPING_CATEGORY && Object.keys(POST_URL_PREFIX_MAPPING_CATEGORY).length > 0) {
    // 使用映射中的第一個分類作為預設連結
    const firstCategory = Object.keys(POST_URL_PREFIX_MAPPING_CATEGORY)[0]
    categoryHref = `/category/${encodeURIComponent(firstCategory)}`
  }

  let links = [
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('SIMPLE_MENU_SEARCH', null, CONFIG)
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: categoryHref,
      show: siteConfig('SIMPLE_MENU_CATEGORY', null, CONFIG)
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('SIMPLE_MENU_TAG', null, CONFIG)
    }
  ]

  if (customNav) {
    // 過濾掉歸檔相關的選單項
    const filteredCustomNav = customNav.filter(link => {
      const href = link?.href || ''
      const name = link?.name || ''
      return !href.includes('/archive') && 
             !name.includes('歸檔') && 
             !name.includes('封存') && 
             !name.includes('往期整理') &&
             name !== locale.NAV.ARCHIVE
    })
    links = links.concat(filteredCustomNav)
  }

  // 如果開啟自訂選單，則覆蓋 Page 生成的選單
  if (siteConfig('CUSTOM_MENU') && customMenu) {
    // 過濾掉歸檔相關的選單項
    links = customMenu.filter(link => {
      const href = link?.href || ''
      const name = link?.name || ''
      return !href.includes('/archive') && 
             !name.includes('歸檔') && 
             !name.includes('封存') && 
             !name.includes('往期整理') &&
             name !== locale.NAV.ARCHIVE
    })
  }
  
  // 再次過濾 links，確保沒有歸檔選項
  links = links.filter(link => {
    const href = link?.href || ''
    const name = link?.name || ''
    return !href.includes('/archive') && 
           !name.includes('歸檔') && 
           !name.includes('封存') && 
           !name.includes('往期整理') &&
           name !== locale.NAV.ARCHIVE
  })

  if (!links || links.length === 0) {
    return null
  }

  // 處理最後一個項目，移除子選單
  const processedLinks = links.map((link, index) => {
    const isLast = index === links.length - 1
    if (isLast && link.subMenus) {
      // 複製 link 並移除 subMenus
      return { ...link, subMenus: undefined }
    }
    return link
  })

  return (
    <>
      {/* 大螢幕模式選單 */}
      <div id='nav-menu-pc' className='hidden md:flex my-auto'>
        {processedLinks?.map((link, index) => (
          <MenuItemDrop key={index} link={link} />
        ))}
      </div>
      {/* 行動端小螢幕選單 */}
      <div
        id='nav-menu-mobile'
        className='flex md:hidden my-auto justify-start'>
        <div
          onClick={toggleIsOpen}
          className='cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-gray-600 dark:text-gray-400'>
          <i
            className={`${isOpen && 'rotate-90'} transition-all duration-200 fa fa-bars mr-2`}
          />
          <span className='text-sm'>{!isOpen ? '選單' : '關閉'}</span>
        </div>

        {isOpen && isBrowser && createPortal(
          <>
            <div
              className='fixed inset-0'
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 99998
              }}
              onClick={toggleIsOpen}
            />
            <div
              className='fixed w-full left-0'
              style={{ 
                top: '56px',
                pointerEvents: 'auto',
                zIndex: 99999
              }}>
              <Collapse
                collapseRef={collapseRef}
                isOpen={isOpen}>
                <div
                  id='menu-wrap'
                  className='bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 shadow-lg'
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    opacity: 1,
                    width: '100%',
                    position: 'relative',
                    pointerEvents: 'auto'
                  }}
                  onClick={(e) => e.stopPropagation()}>
                  {processedLinks?.map((link, index) => (
                    <MenuItemCollapse
                      key={index}
                      link={link}
                      onHeightChange={param =>
                        collapseRef.current?.updateCollapseHeight(param)
                      }
                    />
                  ))}
                </div>
              </Collapse>
            </div>
          </>,
          document.body
        )}
      </div>
    </>
  )
}
