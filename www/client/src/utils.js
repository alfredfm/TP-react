/* get Date formated in french date */
export function getFrDate(date) {
  if (date) {
    let tabDate = [];
    if (date.search('-') > 0 ) {
      tabDate = date.split('-');
    } else if (date.search('/') > 0 ) {
      tabDate = date.split('-');
    }
    return tabDate[2]+"-"+tabDate[1]+"-"+tabDate[0];
  }
}

export function curdate() {
  let date = new Date();
  let strDate = date.getFullYear().toString() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
  return strDate;
}

export function isMobile() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

export function numberWithSpaces(num) {
    num = formatedPrice(num);
    var parts = num.toString().split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(",");
}

function formatedPrice(price) {
  price = price.toString().replace('.', ',');
  var hasComma = price.toString().indexOf(',');
  if (hasComma > -1) {
    /* there are som decimal */
    var arr = price.split(',');
    if (arr[1].length < 2) {
      price += "0";
    }
  }else {
    price += ",00";
  }

  return price
}

export function updateSizeView() {
  var swiper_container = document.querySelector('.swiper-container');
  if (swiper_container) {
    const { swiper } = swiper_container;
    swiper.updateAutoHeight();
  }
}

export function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return [(c>>16)&255, (c>>8)&255, c&255].join(',');
    }
    throw new Error('Bad Hex');
}

export function getFrTime(time) {
  let newTime = time.substr(0,4);

  return newTime.replace(/\B(?=(\d{2})+(?!\d))/g, ":");

}

export function formatedText(text) {
  return text.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
