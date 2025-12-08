import { useGlobal } from '@/lib/global'

/**
 * 文章列表上方嵌入
 * @param {*} props
 * @returns
 */
export default function BlogPostBar(props) {
  const { tag, category } = props
  const { locale } = useGlobal()

  if (tag) {
    return (
      <div className='flex items-center text-base py-4 mb-4' style={{ color: '#4A5F6F' }}>
        <i className='mr-2 fas fa-tag text-sm' />
        {locale.COMMON.TAGS}: <span className='ml-1' style={{ color: '#1A2E3F' }}>{tag}</span>
      </div>
    )
  } else if (category) {
    // 確保顯示繁體中文「分類」
    const categoryLabel = locale.COMMON.CATEGORY === '分类' ? '分類' : locale.COMMON.CATEGORY
    return (
      <div className='flex items-center text-base py-4 mb-4' style={{ color: '#4A5F6F' }}>
        <i className='mr-2 fas fa-th text-sm' />
        {categoryLabel}: <span className='ml-1' style={{ color: '#1A2E3F' }}>{category}</span>
      </div>
    )
  } else {
    return <></>
  }
}
