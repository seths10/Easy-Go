const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBttn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBttn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = 
    `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 
        "Declined" ? 'danger' : order.shipping === 'pending' ? 
    'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['','','','','',''],
        datasets: [{
            label: '',
            data: [65, 59, 81, 56, 55, 40],
            fill: true,
            borderColor: 'blue',
            tension: 0.1
        }]
    },
});

const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['','','','','',''],
        datasets: [{
            label: '',
            data: [65, 59, 81, 56, 55, 40],
            fill: true,
            borderColor: 'red',
            tension: 0.1
        }]
    },
});

const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['','','','','',''],
        datasets: [{
            label: '',
            data: [65, 59, 81, 56, 55, 40],
            fill: true,
            borderColor: 'green',
            tension: 0.1
        }]
    },
});

const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['','','','','',''],
        datasets: [{
            label: '',
            data: [65, 59, 81, 56, 55, 40],
            fill: true,
            borderColor: 'orange',
            tension: 0.1
        }]
    },
});

const bar = document.getElementById('barChart');
const barChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ],
        datasets: [{
          label: 'Product Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
});

const pie = document.getElementById('pieChart');
const pieChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Product Category',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
});

const ctx4 = document.getElementById('myChart4');
const myChart4 = new Chart(ctx4, {
    data: {
        labels: ['','','','','',''],
        datasets: [{
            fill: true,
            borderColor: 'red',
            tension: 0.1,
            type: 'line',
            label: '',
            data: [10, 20, 30, 40]
        }, {
            fill: true,
            borderColor: 'blue',
            tension: 0.1,
            type: 'line',
            label: '',
            data: [60, 80, 40, 90],
        }]
    },
});