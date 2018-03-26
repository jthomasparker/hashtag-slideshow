var accessToken = '45184894'
var queryUrl = 'https://api.instagram.com/v1/tags/search?'


$(document).ready(function(){

    $('#button').on('click', function(){
        var tag = $('#tag').val()
      //  var url = 'https://www.instagram.com/explore/tags/' + tag
      //  window.open(url)
      queryApi()
    })
})

function queryApi(){
  //  queryUrl =+ queryUrl + tag + "&access_token=" + accessToken
  queryUrl = 'https://api.instagram.com/v1/tags/search?' + 'dogs' + '&access_token=' + accessToken
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).done(function(response){
        console.log(response)
    })

}

