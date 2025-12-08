import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 網站頂部 - 簡約風格
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className='text-center justify-between items-center px-6 relative z-10 py-6 md:py-8' style={{ backgroundColor: '#FFFFFF' }}>
      <div className='float-none inline-block'>
        <SmartLink href='/'>
          <div className='flex flex-col items-center space-y-2'>
            {/* Logo - 活潑動畫效果 */}
            <div className='cursor-pointer justify-center items-center flex transform transition-transform duration-300 hover:scale-110'>
              <div className='relative'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 blur-xl animate-pulse'></div>
                <LazyImage
                  priority={true}
                  src={siteInfo?.icon}
                  className='rounded-full relative z-10'
                  width={80}
                  height={80}
                  alt={siteConfig('AUTHOR')}
                />
              </div>
            </div>

            {/* 標題和描述 - 減少留白 */}
            <div className='flex-col flex justify-center space-y-1'>
              <div className='text-xl md:text-2xl font-light dark:text-gray-100 text-gray-900'>
                {siteConfig('AUTHOR')}
              </div>
              <div
                className='font-light dark:text-gray-400 text-gray-600 text-xs md:text-sm text-center leading-relaxed'
                dangerouslySetInnerHTML={{
                  __html: siteConfig('SIMPLE_LOGO_DESCRIPTION', null, CONFIG)
                }}
              />
            </div>
          </div>
        </SmartLink>

        {/* 社交按鈕 - 更簡潔 */}
        <div className='flex justify-center mt-4'>
          <SocialButton />
        </div>
      </div>
    </header>
  )
}
