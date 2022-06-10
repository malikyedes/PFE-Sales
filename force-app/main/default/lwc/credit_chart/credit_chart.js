import { LightningElement, wire } from 'lwc';
import getCredit from '@salesforce/apex/GEN_ChartController.getCredit';
 
export default class Credit_chart extends LightningElement {
    chartConfiguration;
    @wire(getCredit)
    getCredit({ error, data }) {
        if (error) {
            console.log(error);
            this.error = error;
            this.chartConfiguration = undefined;
        } else if (data) {
            console.log(data);
            let chartAmtData = [];
            let chartRevData = [];
            let chartLabel = [];
            data.forEach(opp => {
/*                 chartAmtData.push(opp.Typecredit); */
                chartRevData.push(opp.compteur);
                chartLabel.push(opp.CD1);
            });
 
            this.chartConfiguration = {
                type: 'line',
                data: {
                    datasets: [/* {
                            label: 'Amount',
                            backgroundColor: "#1190CB",
                            data: chartAmtData,
                        }, */
                        {
                            label: 'Created Date',
                            borderColor: "#1190CB",
                            data: chartRevData,
                        },
                    ],
                    labels: chartLabel,
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                  
            }, 
        };
            console.log('data => ', data);
            this.error = undefined;
        }
    }
}