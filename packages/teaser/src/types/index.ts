import { AssetType, SearchResult } from '@frontify/fondue'
import { AppBridgeBlock } from '@frontify/app-bridge'

enum TeaserBackground {
  Dark = 'Dark',
  Light = 'Light',
  Highlight = 'Highlight',
}

type TeaserItemProps = {
  item?: Omit<Item, 'updatedAt'>
}

type TeaserItemEditProps = TeaserItemProps & {
  appBridge: AppBridgeBlock
  onLinkModified: (value: SearchResult | null) => void
  onTitleModified: (title: string) => void
  onOpenInNewTabModified: (value: boolean) => void
  onRemoveItem: (id: string) => void
}

type Link = {
  link: SearchResult | null
  openInNewTab: boolean
}

type Item = {
  id: string
  title: string
  link: Link
  updatedAt: number
  image: AssetType
}

type Settings = {
  headline: string
  copy: string
  items: Item[]
  footer: string
  background: TeaserBackground
  backgroundGlobal: boolean
}

export { TeaserBackground }
export type { TeaserItemProps, TeaserItemEditProps, Item, Settings }
