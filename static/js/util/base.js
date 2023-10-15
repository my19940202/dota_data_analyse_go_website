// 常用的库函数
import {heroesMap} from './../constants/heroes';

window.ifImgNotExist = (img, size) => {
    let src = '/static/img/default.jpg';
    if (size) {
        src = `http://temp.im/${size}`;
        // src = `https://fakeimg.pl/${size}/?text=dota666`;
    }
    img.src = src;
};

let base = {
    getImgUrl: (kind, id) => {
        let imgUrl = '';
        switch(kind) {
            case 'hero':
                if (heroesMap[id] 
                    && 'url_small_portrait' in heroesMap[id]) {
                    imgUrl = heroesMap[id]['url_small_portrait'];
                }
                break;
            case 'team':
                imgUrl = `/static/img/team_logo/${id}.png`;
                break;
            case 'hero_minimap':
                imgUrl = '/static/img/default.jpg';
                if (!!id) {
                    imgUrl = `/static/img/hero_minimap/${id}.png`;
                }
                break;
            case 'league':
                imgUrl = `/static/img/league/${id}.png`;
                break;
        }

        return imgUrl;
    },
    getUrlParam: (key) => {
        let str = window.location.href;
        let result = '';
        if (str.indexOf(key) !== -1) {
            result = str.split(`${key}=`)[1];
            if (result.indexOf('&') !== -1) {
                result = str.split('&')[0];
            }
        }
        return result;
    }
}
export {
    base
}