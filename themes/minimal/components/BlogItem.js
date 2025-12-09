import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

export const BlogItem = props => {
  const { post } = props
  const { NOTION_CONFIG } = useGlobal()
  const showPageCover = siteConfig('SIMPLE_POST_COVER_ENABLE', false, CONFIG)
  const showPreview =
    siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post.blockMap

  return (
    <article
      key={post.id}
      className='py-8 md:py-12 border-b last:border-0 transition-all duration-300 hover:bg-opacity-50'
      style={{ borderColor: '#B0C9E0' }}>
      {/* 文章封面圖 */}
      {showPageCover && post?.pageCoverThumbnail && (
        <div className='mb-6 overflow-hidden rounded-lg'>
          <SmartLink href={post.href} passHref legacyBehavior>
            <LazyImage
              src={post.pageCoverThumbnail}
              alt={post.title}
              className='w-full h-64 object-cover transition-transform duration-500 hover:scale-105'
            />
          </SmartLink>
        </div>
      )}
      {/* 文章標題 */}
      <h2 className='mb-4'>
        <SmartLink
          href={post.href}
          className='blog-item-title font-light text-xl md:text-2xl transition-colors'
          style={{ color: '#1A2E3F' }}>
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post.pageIcon} />
          )}
          {post.title}
        </SmartLink>
      </h2>

      {/* 文章信息 - 簡化顯示 */}
      <header className='mb-6 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-3'>
        <span>
          <i className='fa-regular fa-clock mr-1'></i>
          {post.date?.start_date || post.createdTime}
        </span>
        {post.category && (
          <SmartLink href={`/category/${post.category}`}>
            <span className='hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
              <i className='fa-regular fa-folder mr-1' />
              {post.category}
            </span>
          </SmartLink>
        )}
        {post?.tags &&
          post?.tags?.length > 0 &&
          post?.tags.map(t => (
            <SmartLink key={t} href={`/tag/${t}`}>
              <span className='hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
                {t}
              </span>
            </SmartLink>
          ))}
        <span>
          <TwikooCommentCount post={post} />
        </span>
      </header>

      {/* 文章摘要 */}
      <main className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
        {!showPreview && (
          <>
            {post.summary}
            {post.summary && <span>...</span>}
          </>
        )}
        {showPreview && post?.blockMap && (
          <div className='overflow-ellipsis truncate'>
            <NotionPage post={post} />
          </div>
        )}
      </main>

      {/* 閱讀更多 - 活潑按鈕 */}
      <div className='mt-6'>
        <SmartLink
          href={post.href}
          className='inline-flex items-center text-sm px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg'
          style={{ 
            color: '#4A5F6F',
            backgroundColor: 'rgba(155, 196, 232, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(155, 196, 232, 0.2)'
            e.currentTarget.style.color = '#4A8BC2'
            e.currentTarget.style.transform = 'translateX(5px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(155, 196, 232, 0.1)'
            e.currentTarget.style.color = '#4A5F6F'
            e.currentTarget.style.transform = 'translateX(0)'
          }}>
          閱讀更多
          <i className='fa-solid fa-arrow-right ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1'></i>
        </SmartLink>
      </div>
    </article>
  )
}
