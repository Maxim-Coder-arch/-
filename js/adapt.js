window.addEventListener('load', ()=> {main1()});

function main1() {

  //------------создадим бургер-меню--------------------
  
  const burgerIcon = document.getElementById('burgerIcon');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    burgerIcon.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('active');
  });
  
  
  //----------------график для мобильных устройств-----------------
  
  const ctx = document.getElementById('hotelChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Гранд Палас', 'Изумрудный', 'Тихий дворик', 'Урбан Лофт'],
          datasets: [{
              label: 'Популярность отелей',
              data: [70, 75, 90, 75],
              backgroundColor: '#000',
              borderRadius: 5,
              borderSkipped: false
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 2,
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                      font: {
                          size: 12
                      }
                  }
              },
              x: {
                  ticks: {
                      font: {
                          size: 12
                      },
                      maxRotation: 10,
                      minRotation: 0
                  }
              }
          },
          plugins: {
              legend: {
                  display: false
              },
              datalabels: {
                  anchor: 'center',
                  align: 'center',
                  color: '#FFFFFF', 
                  font: {
                      size: 14,
                      weight: 'bold'
                  }
              }
          }
      },
      plugins: [ChartDataLabels] 
  });
};