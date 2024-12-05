export const system = () => { 
    const nuxt = useNuxtApp()
    let colors = nuxt.$UseTheme
    let appName = nuxt.$AppName
    let faq = nuxt.$UseFaq
    
    return {colors, appName , faq}
}