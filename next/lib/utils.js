import { Toast } from "antd-mobile";

const utils = {
  formatNumber(num) {
    let result = '';
    num = (num || 0).toString()
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
  },

  toast(content = '', duration = 3, onClose = null, mask = false) {
    // switch (type) {
    //   case 'info': Toast.info(content, duration, onClose, mask); break;
    //   case 'success': Toast.success(content, duration, onClose, mask); break;
    //   case 'fail': Toast.fail(content, duration, onClose, mask); break;
    //   case 'loading': Toast.loading(content, duration, onClose, mask); break;
    //   case 'offline': Toast.offline(content, duration, onClose, mask); break;
    //   default: Toast.info(content, duration, onClose, mask); break;
    // }
    if (content) Toast.info(content, duration, onClose, mask);
  }
}

export default utils;
