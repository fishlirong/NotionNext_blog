import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 展示文章推薦
 */
const RecommendPosts = ({ recommendPosts }) => {
  const { locale } = useGlobal()
  if (!siteConfig('SIMPLE_ARTICLE_RECOMMEND_POSTS', null, CONFIG) || !recommendPosts || recommendPosts.length < 1) {
    return <></>
  }

  return (
    <div className="pt-6 border-t my-8" style={{ borderColor: '#B0C9E0' }}>
       <div className="mb-4 font-light text-base text-gray-600 dark:text-gray-400">{locale.COMMON.RELATE_POSTS}</div>
        <ul className="space-y-2">
          {recommendPosts.map(post => (
            <li key={post.id}>
              <SmartLink 
                href={`/${post.slug}`} 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer block">
                {post.title}
              </SmartLink>
            </li>
          ))}
        </ul>
    </div>
  )
}
export default RecommendPosts
