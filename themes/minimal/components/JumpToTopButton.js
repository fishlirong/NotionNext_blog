import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'

/**
 * 跳轉到網頁頂部
 * 當螢幕下滑500像素後會出現該控件
 * @param targetRef 關聯高度的目標 html 標籤
 * @param showPercent 是否顯示百分比
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = () => {
  const { locale } = useGlobal()
  const [show, switchShow] = useState(false)
  const scrollListener = () => {
    const scrollY = window.pageYOffset
    const shouldShow = scrollY > 200
    if (shouldShow !== show) {
      switchShow(shouldShow)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [show])

  return <div title={locale.POST.TOP}
        className={(show ? ' opacity-100 ' : 'invisible  opacity-0') + ' transition-all duration-300 flex items-center justify-center cursor-pointer h-10 w-10 rounded-full shadow-lg hover:shadow-xl hover:scale-110'}
        style={{ backgroundColor: '#9BC4E8' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4A8BC2'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#9BC4E8'
          e.currentTarget.style.transform = 'scale(1)'
        }}
    ><i className='fas fa-arrow-up text-white text-sm' />
    </div>
}

export default JumpToTopButton
