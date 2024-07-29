import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip,  } from 'recharts';
import { Audio, Grid } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //  .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data=>setPhones(data.data.data))
        .then( data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map( phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
console.log(phonesWithFakeData)
setPhones(phonesWithFakeData);
setLoading(false)


        })
    },[])
    return (
        <div>

  { 
        loading &&  <div>
            <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
    />

      render(<Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />)
        </div>
}
            <h2 className="text-5xl">Phones: {phones.length}</h2>

          
        <BarChart width={1000} height={600} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="price" fill="#8884d8"></XAxis>
          <YAxis/>
          <Tooltip/>
        </BarChart>
     
        </div>
    );
};

export default Phones;