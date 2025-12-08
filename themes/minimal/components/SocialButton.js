import { siteConfig } from '@/lib/config'
import { useRef } from 'react'
import { handleEmailClick } from '@/lib/plugins/mailEncrypt'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  const CONTACT_EMAIL = siteConfig('CONTACT_EMAIL')
  const emailIcon = useRef(null)

  return (
    <div className='w-52 justify-center flex-wrap flex my-2'>
      <div className='space-x-4 md:text-lg text-2xl text-gray-400 dark:text-gray-500 text-center social-button'>
        {siteConfig('CONTACT_GITHUB') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'github'}
            href={siteConfig('CONTACT_GITHUB')}>
            <i className='fab fa-github hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300' />
          </a>
        )}
        {siteConfig('CONTACT_TWITTER') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'twitter'}
            href={siteConfig('CONTACT_TWITTER')}>
            <i className='fab fa-twitter hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_TELEGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_TELEGRAM')}
            title={'telegram'}>
            <i className='fab fa-telegram hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_LINKEDIN') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_LINKEDIN')}
            title={'linkedIn'}>
            <i className='fab fa-linkedin hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_WEIBO') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'weibo'}
            href={siteConfig('CONTACT_WEIBO')}>
            <i className='fab fa-weibo hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_INSTAGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'instagram'}
            href={siteConfig('CONTACT_INSTAGRAM')}>
            <i className='fab fa-instagram hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {CONTACT_EMAIL && (
          <a
            onClick={e =>
              handleEmailClick(e, emailIcon, CONTACT_EMAIL)
            }
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer'
            title={'email'}
            ref={emailIcon}>
            <i className='fas fa-envelope hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_BILIBILI') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={siteConfig('CONTACT_BILIBILI')}>
            <i className='fab fa-bilibili hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_YOUTUBE') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'youtube'}
            href={siteConfig('CONTACT_YOUTUBE')}>
            <i className='fab fa-youtube hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
        {siteConfig('CONTACT_THREADS') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'threads'}
            href={siteConfig('CONTACT_THREADS')}>
            <i className='fab fa-threads hover:text-gray-600 dark:hover:text-gray-300 transition-colors' />
          </a>
        )}
      </div>
    </div>
  )
}
export default SocialButton
