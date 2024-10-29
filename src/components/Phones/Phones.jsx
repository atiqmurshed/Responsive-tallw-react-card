import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';



import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';
const Phones = () => {
    const [phones, setPhones] = useState([]);
  

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFackData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFackData);
                setPhones(phonesWithFackData);
                
            });
    }, [])

    return (
        <div>

            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
           
            <h5 className="text-5xl">phones: {phones.length}</h5>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;