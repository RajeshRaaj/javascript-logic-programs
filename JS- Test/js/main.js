
let datas;

window.onload = () => {
    fetch('./json/data.json').then(d => {
        return d.json()
    }).then(res => {
        datas = [...res]
        console.log(datas)
        let tem=[];
        datas.forEach((element, index) => {
            let janda =  true;
            let secon;
            tem.forEach((tempData,indexs)=>{
                if(tempData.item === element.data.item ){
                    janda = false;
                    tem[indexs].Amount += element.data.Amount
                }
            })
            if(!janda){               
            }else{
                tem.push(element.data)
            }
        })
       // console.log(tem)
        function createTable(tableData) {
            var table = document.createElement('table');
            var tableBody = document.createElement('tbody');
            var tHeader = document.createElement('thead')
            var hade = document.createElement('th');
            var headerRow = document.createElement('tr');
            let headers;
            tem.forEach(function(rowData) {
              var row = document.createElement('tr');
              headers = Object.keys(rowData)
              
              let rowDatas = [];
              headers.forEach((hdata, hindex)=>{
                rowDatas.push(rowData[hdata])
              })
              console.log(rowDatas)
          
              rowDatas.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
              });        
              tableBody.appendChild(row);
            });
            headers.forEach(elementHead => {
                var cell = document.createElement('th');
                console.log(elementHead)
                cell.appendChild(document.createTextNode(elementHead));
                // hade.appendChild(cell);
                headerRow.appendChild(cell) 
                
            });
           
            tHeader.appendChild(headerRow)
            table.appendChild(tHeader);
            table.appendChild(tableBody);
            document.body.appendChild(table);
          }
          createTable();
    })


  
  
}
/*


*/