export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
 
  {
    name: 'sonetto',
    avatar: '',
    username: 'windyWHU',
    title: '作者',
    desc: '你的简介',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/windyWHU' },
      // 可以继续添加其他社交链接
    ],
    nameAliases: ['你的名字', 'windyWHU'],
    emailAliases: ['g2949256990@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
