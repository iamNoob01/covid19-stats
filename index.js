$.ajax({

     type: 'GET',
     // url: 'https://coronavirus.m.pipedream.net/',
     url : 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true',
     success : function(response){
          // console.log(response[0].country)
          var ra = response
          for(var i=0; i<ra.length; i++){
               console.log(response[i].country)
               var totalactive = response[i].infected - response[i].recovered
               var tablerow = `<tr> <td>${response[i].country}</td> <td>${response[i].infected}</td> <td>${totalactive} <td>${response[i].recovered}</td> <td>${response[i].deceased}</td></tr>`

               $('#tbody').append(tablerow)

               $('#covidtable').DataTable()

          }
     },
     error : function(error){
          console.log(error)
     }

})
