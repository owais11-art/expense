import {data} from './data.js';

const amounts = data.map(item => item.amount);
const maximum = Math.max(...amounts);

const chart = document.querySelector('.main__chart');

let chartHeight = getComputedStyle(chart);


chartHeight = parseFloat(chartHeight.height.replace('px', ''));

for(let dataItem of data){
    const height = (dataItem.amount / chartHeight * 100) * 7;
    const div = document.createElement('div');
    div.classList.add(dataItem.day);
    div.style.height = height + 'px';
    if(dataItem.amount === maximum) div.classList.add('main__chart__max');
    chart.append(div);
}