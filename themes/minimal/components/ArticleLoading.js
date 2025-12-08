/**
 * 文章載入中的轉圈圈動畫
 * @returns {JSX.Element}
 */
export default function ArticleLoading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative" style={{ width: '80px', height: '80px' }}>
        <div 
          className="loading-spinner"
          style={{ 
            width: '80px',
            height: '80px',
            border: '6px solid #4A5F6F',
            borderTop: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderRadius: '50%',
            display: 'block'
          }}
        ></div>
      </div>
    </div>
  )
}

