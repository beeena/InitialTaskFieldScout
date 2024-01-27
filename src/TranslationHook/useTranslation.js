import {useLanguage} from './LanguageContext';
import {translations} from './translation';

const useTranslation = () => {
  const {currentLanguage} = useLanguage();

  const translate = (word) => {
    if (translations[currentLanguage] && translations[currentLanguage][word]) {
      return translations[currentLanguage][word];
    } else {
      return word;
    }
  };

  return {translate};
};

export default useTranslation;
