
function addData() {
          var productName = document.getElementById('productName').value;
          var quantity = document.getElementById('quantity').value;
          var saleWeek = document.getElementById('saleWeek').value;
          var date = document.getElementById('date').value;
        
          chart.data.labels.push(date);
          chart.data.datasets[0].data.push(quantity);
          chart.update();
          document.getElementById('productForm').style.display = 'none';
        }
        var ctx = document.getElementById('productChart').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [{
              label: 'Product Quantity',
              data: [50, 20, 60, 85, 45, 15, 80, 25], 
              borderColor: 'blue',
              borderWidth: 1,
              fill: false
            }]
          },
          options: {
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Months'
                        }
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Values'
                        },
                        min: 10,
                        max: 90
                      }
                    },
                    
          }
                });