import fs from 'fs'
import path from 'path'

/**
 * ads.txt API 路由
 * 用於提供 Google AdSense 的 ads.txt 文件
 */
export default function handler(req, res) {
  // 只允許 GET 請求
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // 設置正確的 Content-Type
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  
  // 設置緩存頭
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
  
  try {
    // 嘗試從 public 目錄讀取 ads.txt
    const adsTxtPath = path.join(process.cwd(), 'public', 'ads.txt')
    
    if (fs.existsSync(adsTxtPath)) {
      const content = fs.readFileSync(adsTxtPath, 'utf-8')
      return res.status(200).send(content)
    } else {
      // 如果文件不存在，返回預設內容
      const defaultContent = 'google.com, pub-4125593587602065, DIRECT, f08c47fec0942fa0'
      return res.status(200).send(defaultContent)
    }
  } catch (error) {
    console.error('Error reading ads.txt:', error)
    // 發生錯誤時返回預設內容
    const defaultContent = 'google.com, pub-4125593587602065, DIRECT, f08c47fec0942fa0'
    return res.status(200).send(defaultContent)
  }
}

