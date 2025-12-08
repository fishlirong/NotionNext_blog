import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 頁腳
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative w-full px-6 border-t mt-20' style={{ backgroundColor: '#FFFFFF', borderColor: '#B0C9E0' }}>
      <div className='container mx-auto max-w-4xl py-8 md:py-10'>
        <DarkModeButton className='text-center mb-6' />

        <div className='text-gray-500 dark:text-gray-400 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-xs md:text-sm'>
          <div className='text-center mb-4 md:mb-0'>
            &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}
          </div>
          <div className='md:p-0 text-center md:text-right space-x-4'>
            {siteConfig('BEI_AN') && (
              <a
                href={siteConfig('BEI_AN_LINK')}
                className='no-underline hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
                {siteConfig('BEI_AN')}
              </a>
            )}
            <BeiAnGongAn />
            <span className='no-underline'>
              Powered by{' '}
              <a
                href='https://github.com/tangly1024/NotionNext'
                className='hover:text-gray-700 dark:hover:text-gray-200 transition-colors'>
                NotionNext
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
