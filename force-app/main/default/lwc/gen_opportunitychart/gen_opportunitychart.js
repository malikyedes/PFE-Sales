import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/GEN_ChartController.getOpportunities';
 
export default class Gen_opportunitychart extends LightningElement {
    chartConfiguration;
 
    @wire(getOpportunities)
    getOpportunities({ error, data }) {
        if (error) {
            this.error = error;
            this.chartConfiguration = undefined;
        } else if (data) {
            let chartAmtData = [];
            let chartRevData = [];
            let chartLabel = [];
            data.forEach(opp => {
/*                 chartAmtData.push(opp.Typecredit); */
                chartRevData.push(opp.compteur);
                chartLabel.push(opp.typecredit);
            });
 
            this.chartConfiguration = {
                type: 'bar',
                data: {
                    datasets: [/* {
                            label: 'Amount',
                            backgroundColor: "#1190CB",
                            data: chartAmtData,
                        }, */
                        {
                            label: 'Credit',
                            backgroundColor: "#1190CB",
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