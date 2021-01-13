// const URL = "http://f2.uppeople.space/api";
componentDidMount(){
const URL = process.env.REACT_APP_API_ENDPOINT;
const headers = new Headers({
    'Autorization': '1111'
});
const options = {
    headers,
    credentials: "include"
};

 fetch('https://161.97.144.240/api/auth/login',options).then((response) => {
      console.log(response.json());
 })
}