import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BlogItem } from './BlogItem'

/**
 * 滾動部落格列表
 * @param {*} props
 * @returns
 */
export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page)
    : []

  if (posts) {
    const totalCount = posts.length
    hasMore = page * POSTS_PER_PAGE < totalCount
  }
  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const targetRef = useRef(null)

  // 監聽滾動自動分頁載入
  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef
        ? targetRef.current
          ? targetRef.current.clientHeight
          : 0
        : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    }, 500)
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)

    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  // 處理空狀態
  if (!posts || posts.length === 0) {
    return (
      <div id='posts-wrapper' className='w-full md:pr-8 mb-12 py-20 text-center'>
        <div className='text-gray-400 dark:text-gray-500 text-lg'>
          {locale.COMMON.NO_MORE} 😊
        </div>
        <div className='text-gray-400 dark:text-gray-500 text-sm mt-2'>
          還沒有文章，請檢查 Notion 設定
        </div>
      </div>
    )
  }

  return (
    <div id='posts-wrapper' className='w-full md:pr-8 mb-12' ref={targetRef}>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}

      {postsToShow.length > 0 && (
        <div
          onClick={handleGetMore}
          className='w-full my-4 py-4 text-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
          {hasMore ? locale.COMMON.MORE : `${locale.COMMON.NO_MORE} 😊`}
        </div>
      )}
    </div>
  )
}
