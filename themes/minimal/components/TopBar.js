import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 網站頂部 提示欄
 * @returns
 */
export default function TopBar (props) {
  const content = siteConfig('SIMPLE_TOP_BAR_CONTENT', null, CONFIG)

  if (content) {
    return <header className="flex justify-center items-center border-b" style={{ backgroundColor: '#9BC4E8', borderColor: '#6BA3D1' }}>
       <div id='top-bar-inner' className='max-w-9/10 w-full z-20'>
       <div className='text-xs text-center text-gray-300 dark:text-gray-400 z-50 leading-5 py-2.5' dangerouslySetInnerHTML={{ __html: content }}/>
       </div>
    </header>
  }
  return <></>
}
