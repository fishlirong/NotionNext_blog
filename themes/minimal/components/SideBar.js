import { AdSlot } from '@/components/GoogleAdsense'
import Live2D from '@/components/Live2D'
import Announcement from './Announcement'
import Catalog from './Catalog'
import WWAds from '@/components/WWAds'

/**
 * 側邊欄
 * @param {*} props
 * @returns
 */
export default function SideBar (props) {
  const { notice } = props
  return (
    <div className="space-y-8">
      {/* 目錄 */}
      <Catalog {...props} />

      {/* 公告 - 簡化顯示 */}
      {notice && <Announcement post={notice} />}
    </div>
  )
}
