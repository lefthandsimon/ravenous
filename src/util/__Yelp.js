const clientId = '2Q02JBYp_l8l9A7tbsAWZQ';
const secret = 'ivgFcmW4tlencXEJ28rpmioJoJvYwpKqQWkXObdMx8Z0auIxMfjztNyTSalSrYaG';
let accessToken;
const Yelp = {
  getAccessToken: function() {
    if(accessToken)
    {
      console.log('got access');
      return new Promise((resolve,reject) =>{
        resolve(accessToken);
      });
    }  else {
      console.log("NO ACCESS_TOKEN")
      return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id='+clientId +'&client_secret=' + secret, {method: 'POST'}).then(response => {return response.json()}).then(jsonResponse => {
          accessToken = jsonResponse.access_token;
          console.log('getAccessToken ACCESS_TOKEN: ' + accessToken);
        });
      /*.then(jsonResponse => {
        accessToken = jsonResponse.access_token;
        )
    });*/
      }
  },
  search: function (term, location, sortBy) {
      //return Yelp.getAccessToken();
      return Yelp.getAccessToken().then(()=>{
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${accessToken}` }}).then(response => {return response.json()}).then(jsonResponse => {if(jsonResponse.businesses){ return jsonResponse.businesses.map(business =>{

      }

      )}});
    });
  }
}

export default Yelp;
