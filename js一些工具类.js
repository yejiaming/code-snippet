/**
 * Created by yejiaming on 2017/2/24.
 */

/**
 * 获取某个元素的scrollTop
 * @param element 节点对象
 * @returns {*}
 */
var getScrollTop = function(element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    }

    return element.scrollTop;
};

/**
 * 获取scroll事件对应的目标对象
 * @param element 可以是目标事件的对象也可以是其子节点
 * @returns {*}
 */
var getScrollEventTarget = function(element) {
    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        var overflowY = getComputedStyle(currentNode).overflowY;
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
        }
        currentNode = currentNode.parentNode;
    }
    return window;
};

/**
 * 获取某个节点的可视部分的高度
 * @param element   节点对象
 * @returns {number}
 */
var getVisibleHeight = function(element) {
    if (element === window) {
        return document.documentElement.clientHeight;
    }

    return element.clientHeight;
};

/**
 * 获取元素距离窗口顶部的高度
 * @param element
 * @returns {*}
 */
var getElementTop = function(element) {
    if (element === window) {
        return getScrollTop(window);
    }
    return element.getBoundingClientRect().top + getScrollTop(window);
};

/**
 * 判断某个节点是否在HTML标签中
 * @param element
 * @returns {boolean}
 */
var isAttached = function(element) {
    var currentNode = element.parentNode;
    while (currentNode) {
        if (currentNode.tagName === 'HTML') {
            return true;
        }
        if (currentNode.nodeType === 11) {
            return false;
        }
        currentNode = currentNode.parentNode;
    }
    return false;
};