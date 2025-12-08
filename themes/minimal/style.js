/* eslint-disable react/no-unknown-property */
/**
 * 此處樣式只對當前主題生效 - 簡約風格 #CBDCEB 主色調
 * 此處不支持tailwindCSS的 @apply 語法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
  /* 主色調變量 - 更鮮明的版本 */
  :root {
    --primary-color: #9BC4E8;
    --primary-light: #CBDCEB;
    --primary-dark: #6BA3D1;
    --primary-accent: #4A8BC2;
    --text-primary: #1A2E3F;
    --text-secondary: #4A5F6F;
    --border-color: #B0C9E0;
    --hover-color: #7BB0D9;
    --bg-highlight: #E8F0F7;
  }
  
  /* 底色 - 更鮮明的淡藍色背景 */
  body {
    background-color: #F0F5FA;
  }
  
  .dark body {
    background-color: #1A2332;
  }
  
  /* 主題容器背景 */
  #theme-simple {
    background: linear-gradient(to bottom, #FFFFFF 0%, #F0F5FA 100%);
  }
  
  .dark #theme-simple {
    background: linear-gradient(to bottom, #1A2332 0%, #0F1419 100%);
  }
  
  /* 文本不可選取 */
  .forbid-copy {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  
  /* 公告內容 */
  #theme-simple #announcement-content {
    background-color: transparent;
  }
  
  /* 文章標題 - 簡約風格，使用深藍灰色 */
  #theme-simple .blog-item-title {
    color: #1A2E3F;
    font-weight: 300;
    letter-spacing: -0.02em;
    transition: color 0.2s ease;
  }
  
  #theme-simple .blog-item-title:hover {
    color: #4A8BC2;
  }
  
  .dark #theme-simple .blog-item-title {
    color: #E8F0F7;
  }
  
  .dark #theme-simple .blog-item-title:hover {
    color: #9BC4E8;
  }
  
  /* 連結顏色 - 更鮮明 */
  #theme-simple a {
    color: #4A5F6F;
    transition: color 0.2s ease;
  }
  
  #theme-simple a:hover {
    color: #4A8BC2;
  }
  
  /* Notion 內容 */
  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  /* 菜單連結 - 更鮮明的效果 */
  #theme-simple .menu-link {
    text-decoration: none;
    color: #4A5F6F;
    transition: color 0.2s ease;
  }
   
  #theme-simple .menu-link:hover {
    color: #4A8BC2;
    cursor: pointer;
  }
  
  .dark #theme-simple .menu-link {
    color: #9BC4E8;
  }
  
  .dark #theme-simple .menu-link:hover {
    color: #6BA3D1;
  }
  
  /* 邊框顏色 - 更鮮明 */
  #theme-simple .border-gray-100 {
    border-color: #B0C9E0 !important;
  }
  
  #theme-simple .border-gray-800 {
    border-color: #9BC4E8 !important;
  }
  
  /* 強調背景色 */
  #theme-simple .bg-primary {
    background-color: #9BC4E8 !important;
  }
  
  #theme-simple .bg-primary-light {
    background-color: #E8F0F7 !important;
  }
  
  /* 增加整體留白和閱讀舒適度 */
  #theme-simple #container-inner {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media (min-width: 768px) {
    #theme-simple #container-inner {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  
  /* 活潑的動畫效果 */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Logo 浮動動畫 */
  #theme-simple header img {
    animation: float 3s ease-in-out infinite;
    transition: transform 0.3s ease;
  }
  
  #theme-simple header img:hover {
    transform: scale(1.1) rotate(5deg);
  }
  
  /* 文章卡片懸停效果 */
  #theme-simple article {
    transition: all 0.3s ease;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  #theme-simple article:hover {
    background-color: rgba(155, 196, 232, 0.05);
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(155, 196, 232, 0.15);
  }
  
  /* 按鈕活潑效果 */
  #theme-simple button,
  #theme-simple .cursor-pointer {
    transition: all 0.2s ease;
  }
  
  #theme-simple button:hover,
  #theme-simple .cursor-pointer:hover {
    transform: translateY(-2px);
  }
  
  /* 社交按鈕動畫 */
  #theme-simple .social-button i {
    transition: all 0.3s ease;
  }
  
  #theme-simple .social-button:hover i {
    transform: scale(1.2) rotate(10deg);
  }
  
  /* 標籤和分類標籤效果 */
  #theme-simple a[href*="/tag/"],
  #theme-simple a[href*="/category/"] {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    background-color: rgba(155, 196, 232, 0.1);
    transition: all 0.2s ease;
  }
  
  #theme-simple a[href*="/tag/"]:hover,
  #theme-simple a[href*="/category/"]:hover {
    background-color: rgba(155, 196, 232, 0.2);
    transform: translateY(-2px);
  }
  
  /* 導航欄動畫 */
  #theme-simple nav {
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  /* 漸變背景裝飾 */
  #theme-simple::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(155, 196, 232, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(75, 139, 194, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  #theme-simple > * {
    position: relative;
    z-index: 1;
  }
  
  /* Loading 轉圈圈動畫 */
  @keyframes loadingSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loading-spinner {
    animation: loadingSpin 0.8s linear infinite !important;
  }

  `}</style>
}

export { Style }
