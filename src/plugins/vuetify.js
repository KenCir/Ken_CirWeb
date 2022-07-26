import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                github: '#211F1F',
                facebook: '#3B5998',
                twitter: '#1DA1F2',
                qiita: '#4cb10d'
            },
        }
    }
});
