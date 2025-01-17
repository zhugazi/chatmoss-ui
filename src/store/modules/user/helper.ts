import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  paymentType: number
  residueCount: number
  user: { nickname: string; email: string }
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://luomacode-1253302184.cos.ap-beijing.myqcloud.com/logo.svg',
      name: 'LMC',
      description: '罗码Code出品',
      paymentType: 0,
      residueCount: 0,
      user: { nickname: '', email: '' },
    },

  }
}
export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
