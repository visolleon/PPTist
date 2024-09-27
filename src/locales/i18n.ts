import { createI18n } from 'vue-i18n'
import znCN from './zh-cn'
import en from './en'

const i18n = createI18n({
  locale: localStorage.getItem('language') || navigator.language || 'en',
  globalInjection: true,
  legacy: false,
  messages: {
    'zh-CN': znCN,
    'en': en
  }
})

export default i18n