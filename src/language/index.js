import i18n from 'i18n';

i18n.configure({
    defaultLocale: App.Localization.detectLocale(),
    locales: App.Localization.allTranslations,
    directory: './src/language'
});

export default i18n
