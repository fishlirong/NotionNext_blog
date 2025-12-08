import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import NotionIcon from '@/components/NotionIcon'

/**
 * 文章描述
 * @param {*} props
 * @returns
 */
export default function ArticleInfo (props) {
  const { post } = props

  const { locale } = useGlobal()

  return (
        <section className="mt-4 mb-8" style={{ color: '#4A5F6F' }}>
            <h2
                className="blog-item-title mb-6 font-light text-2xl md:text-3xl no-underline leading-tight"
                style={{ color: '#1A2E3F' }}>
                {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{post?.title}
            </h2>

            {post?.type !== 'Page' && (
                <div className='flex flex-wrap items-center gap-4 text-sm'>
                    <span>
                        <i className="fa-regular fa-clock mr-1"></i>
                        {post?.publishDay}
                    </span>
                    {post?.category && (
                        <SmartLink href={`/category/${post?.category}`}>
                            <span className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                                <i className="fa-regular fa-folder mr-1"></i>
                                {post?.category}
                            </span>
                        </SmartLink>
                    )}
                    {post?.tags && post?.tags?.length > 0 && post?.tags.map(t => (
                        <SmartLink key={t} href={`/tag/${t}`}>
                            <span className='hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
                                {t}
                            </span>
                        </SmartLink>
                    ))}
                    <span className="hidden busuanzi_container_page_pv">
                        <i className='mr-1 fas fa-eye' />
                        <span className="busuanzi_value_page_pv" />
                    </span>
                </div>
            )}
        </section>
  )
}
