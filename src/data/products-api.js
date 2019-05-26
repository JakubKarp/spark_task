import axios from 'axios';


class getFromMongo {
    static mongoProducts() {
        return axios.get('http://localhost:4000/products')
            .then(response => {
                console.log("TCL: fetchProducts -> response from axios", response.data)
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return error
            })
    }
}


  export default getFromMongo;