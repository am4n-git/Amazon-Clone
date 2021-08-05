import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
    return (
        <div className="home">
            
            <div className="home_container">

                <img className="home_image" 
                src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._CB663481141_._CR575,0,865,675_AC_.jpg' alt='Home' 
                />
                

                <div className="home_row">

                    <Product 
                        title='Asus ROG Rapture GT-AC5300 Tri-Band WiFi Gaming Router (Black) for VR and 4K Streaming, with Quad core Processor, Gaming Port, WTFast, Adaptive QoS' 
                        price= {22460} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51RzyXD3j1L._SL1000_.jpg" 
                        rating={5}
                    />
                    

                    <Product 
                        title='OneOdio Adapter-Free Closed Back Over-Ear DJ Stereo Monitor Headphones' 
                        price= {1999} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71jKSNdUJKL._SL1200_.jpg" 
                        rating={3}
                    />    
                </div>


                <div className="home_row">
                    <Product 
                        title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/NVIDIA GTX 1650' 
                        price= {80999} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg" 
                        rating={4}
                    />
                    

                    <Product 
                        title='ASUS TUF Gaming F15,15.6-inch FHD 60Hz, Intel Core i5-10300H 10th Gen, NVIDIA GeForce GTX 1650 4GB Graphics' 
                        price= {60000} 
                        image="https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg" 
                        rating={5}
                    />
                    

                    <Product 
                        title='Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)' 
                        price= {1,399} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61l3aUqHRVL._SL1000_.jpg" 
                        rating={5}
                    />
                    

                </div>

                <div className="home_row">
                    <Product 
                        title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor ' 
                        price= {160000} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg" 
                        rating={5}
                    />

                </div>
                

            </div>
            
        </div>
    )
}

export default Home
