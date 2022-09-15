'use strict';

const images = [
    { 'id': '1', 'url': 'imgs/chrono.jpg' },
    { 'id': '2', 'url': 'imgs/inuyasha.jpg' },
    { 'id': '3', 'url': 'imgs/ippo.png' },
    { 'id': '4', 'url': 'imgs/tenchi.jpg' },
    { 'id': '5', 'url': 'imgs/yuyuhakusho.jpg' }
]

const container = document.querySelector('.container-items')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class ='item'>
            <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, container)

let items = document.querySelectorAll ('.item')

const previous = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll ('.item')
}

const next = () => {
    const lastItem = items[items.length -1]
    container.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll ('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)