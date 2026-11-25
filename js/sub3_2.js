//그래프
 const data1 = {
        labels:  ['2017', '2018', '2019', '2020'],
        datasets: [{
          label: '봉사 인원(명)',
          data: [120, 163, 73, 32],
          backgroundColor: [
            'rgba(85, 128, 92, 0.85)',
          ],
          borderColor: [
            'rgba(15, 15, 15, 0.48)',
          ],
          borderWidth: 0,
          borderRadius:5,
          barThickness:58
        }
      ]
      };
            
      const config1 = {
        type: 'bar',
        data: data1,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
      const myChart1 = new Chart(
            document.getElementById('chartPeople'),
            config1
      );

      //두번째 
        
      const data2 = {
        labels:  ['2017', '2018', '2019', '2020'],
        datasets: [{
          label: '봉사 시간(시간)',
          data: [840, 1035, 630, 210],
          backgroundColor: [
            'rgba(180, 186, 196, 0.75)',
          ],
          borderColor: [
            'rgb(49, 124, 94)',
          ],
          borderWidth: 0,
          borderRadius:5,
          barThickness:58
        }
      ]
      };
            
      const config2 = {
        type: 'bar',
        data: data2,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
      const myChart2 = new Chart(
            document.getElementById('chartTime'),
            config2
      );


















