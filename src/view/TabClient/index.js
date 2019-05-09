import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import TabClient from './TabClient'

export const selector = createSelector(
  () => {
    return {
      contacts: [
        {id: 0, data: "vitalya@gmail.com", type: "Емейл"},
        {id: 1, data: "vitalya.getsome.com", type: "Ссылка"},
        {id: 2, data: "streeet 13", type: "Адрес"},
        {id: 3, data: "0934324352", type: "Телефон"}
      ],
      about: `Lorem Ipsum - это текст-'рыба', часто используемый 
            в печати и веб-дизайне. Lorem Ipsum является стандартной 'рыбой' 
            для текстов на латинице с начала XVI века. В то время некий безымянный 
            печатник создал большую коллекцию размеров и форм шрифтов, используя 
            Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно 
            пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`
    }
  },
);

export default connect(selector)(TabClient)