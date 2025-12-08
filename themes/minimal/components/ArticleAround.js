import SmartLink from '@/components/SmartLink'

/**
 * 上一篇文章，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAround({ prev, next }) {
  if (!prev || !next) {
    return <></>
  }
  return (
        <section className='flex items-center justify-between gap-4 my-8 pt-8 border-t' style={{ color: '#4A5F6F', borderColor: '#B0C9E0' }}>
            {prev && <SmartLink
                href={`/${prev.slug}`}
                passHref
                className='text-sm cursor-pointer justify-start items-center flex hover:text-gray-700 dark:hover:text-gray-200 transition-colors max-w-[45%]'>

                <i className='mr-2 fas fa-arrow-left text-xs' />
                <span className='truncate'>{prev.title}</span>

            </SmartLink>}
            {next && <SmartLink
                href={`/${next.slug}`}
                passHref
                className='text-sm cursor-pointer justify-end items-center flex hover:text-gray-700 dark:hover:text-gray-200 transition-colors max-w-[45%] ml-auto'>
                <span className='truncate'>{next.title}</span>
                <i className='ml-2 fas fa-arrow-right text-xs' />

            </SmartLink>}
        </section>
  )
}
